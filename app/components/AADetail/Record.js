import React from 'react';
import PropTypes from 'prop-types';
import { Input, message, Icon, Modal, Select, Pagination } from 'antd';
import timer from '../../utils/timer';
import Num from '../../utils/num';

class Record extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newInfo: {
        desc: '',
        num: '',
      },
      totalCost: 0,
      pageNo: 1,
    };
  }

  componentWillMount() {
    this.getTotalCost(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.getTotalCost(nextProps);
  }

  getTotalCost(props) {
    const { info } = props;
    let totalCost = 0;
    info.list.forEach((r) => !r.del && (totalCost += r.num));
    this.setState({ totalCost });
  }

  inputNew(v, k) {
    const { newInfo } = this.state;
    newInfo[k] = v;
    this.setState({ newInfo });
  }

  addRecord(transfer) {
    const { newInfo, totalCost } = this.state;
    const { info, transferFun } = this.props;
    let num = newInfo.num;
    let desc = newInfo.desc;
    if (!newInfo.desc) {
      message.warning('么有描述');
      return;
    }
    if (!newInfo.num) {
      message.warning('么有金额');
      return;
    }
    if (isNaN(Number(num))) {
      try {
        num = eval(num);
        newInfo.desc += `【${newInfo.num}】`;
        desc = newInfo.desc;
      } catch (err) {
        message.warning('金额你写的啥呀');
        return;
      }
    } else {
      num = Number(num);
    }
    if (transfer) {
      transferFun(newInfo.desc, info.name, -num);
      desc = `转账给${newInfo.desc}`;
    }
    num = Math.round(num * 100) / 100;
    this.setState({
      newInfo: {
        desc: '',
        num: '',
      },
      totalCost: totalCost + num,
    });
    if (transfer) {
      return;
    }
    this.props.updateFun(true, {
      time: timer().time,
      desc,
      num,
    });
  }

  delRecord(t, num) {
    // const { info } = this.props;
    const { totalCost } = this.state;
    Modal.confirm({
      content: '不要了？',
      okText: '嗯',
      cancelText: '没',
      onOk: () => {
        // const delItem = info.list.find((r) => r.time === t);
        // delItem.del = true;
        this.props.updateFun(false, t);
        this.setState({
          totalCost: totalCost - num,
        });
      },
    });
  }

  transfer() {
    const { users, info } = this.props;
    const defaultUser = users.find(u => u !== info.name);
    this.inputNew(defaultUser, 'desc');
    Modal.confirm({
      iconType: 'null',
      content: (
        <div>
          转账给
          <Select className="w_100" defaultValue={defaultUser} onChange={(v) => this.inputNew(v, 'desc')}>
            {
              users.map((item) =>
                item !== info.name && <Select.Option key={item} value={item}>{item}</Select.Option>)
            }
          </Select>
          <Input className="w_100" onChange={(e) => this.inputNew(e.target.value, 'num')} />
        </div>
      ),
      onOk: () => {
        this.addRecord(true);
      },
      onCancel: () => {
        this.setState({
          newInfo: {
            desc: '',
            num: '',
          },
        });
      },
    });
  }

  addDivide() {
    const time = timer();
    this.props.updateFun(true, {
      time: time.time,
      desc: `--分割专用${time.str('YY.M.D H:m:s')}--`,
      num: 0,
    });
  }

  render() {
    const { info, total } = this.props;
    const { totalCost, newInfo, pageNo } = this.state;
    const infoList = info.list.slice((pageNo - 1) * 20, pageNo * 20);
    return (
      <div className="record-item" style={{ width: `${100 / total}%` }}>
        <div className="record-name">
          {info.name}
          <span className="transfer-btn" onClick={() => this.transfer()}>转账</span>
          <span className="transfer-btn" onClick={() => this.addDivide()}>分割专用</span>
        </div>
        <div className="record-total">
          <div className="record-left">支出总计：</div>
          <div className="record-right">{Num(totalCost, 2)}</div>
        </div>
        <hr/>
        <div className="record-list">
          <div className="record-detail">
            <div className="record-left">
              <Input
                placeholder="花在哪儿啦"
                value={newInfo.desc}
                onChange={(e) => this.inputNew(e.target.value, 'desc')}
                onPressEnter={() => this.addRecord()}
              />
            </div>
            <div className="record-right">
              <Input
                placeholder="多少钱？（支持加减乘除）"
                value={newInfo.num}
                onChange={(e) => this.inputNew(e.target.value, 'num')}
                onPressEnter={() => this.addRecord()}
              />
            </div>
          </div>
          {
            infoList.map((r) => ( !r.del &&
              <div className="record-detail" key={`${r.time}`}>
                <div className="record-left">
                  <Icon type="delete" className="del-btn" onClick={() => this.delRecord(r.time, r.num)} />{r.desc}
                </div>
                <div className="record-right">{r.num}</div>
              </div>
            ))
          }
        </div>
        {
          info.list.length > 20 &&
          <div className="mt_10">
            <Pagination
              onChange={(v) => this.setState({ pageNo: v })}
              className="pull-right"
              size="small"
              total={info.list.length}
              current={pageNo}
              pageSize={20}
            />
          </div>
        }
      </div>
    );
  }
}

Record.propTypes = {
  info: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  updateFun: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  transferFun: PropTypes.func.isRequired,
}

export default Record;
