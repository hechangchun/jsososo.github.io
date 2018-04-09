/**
*
* LineChart
*
*/

import React from 'react';
import ReactEchart from 'echarts-for-react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


class LineChart extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  chartOption() {
    const data = this.props.data;
    const selected = this.props.selected;
    const series = [];
    const legend = [];
    Object.keys(data).forEach(item => {
      let d = data[item];
      legend.push(d.name);
      series.push({
        name: d.name,
        type: 'line',
        smooth: true,
        data: d.value,
        itemStyle: {
          normal: {
            areaStyle: { type: 'default', opacity: 0.3 },
          },
        },
      });
    });
    return {
      color: ['#f93', '#3f9', '#39f', '#ff0', '#f6f', '#3ff', '#fc6', '#66f', '#9f3'],
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        top: '0',
        data: legend,
        selected: selected || {},
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: this.props.xAxis,
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series,
    };
  }
  render() {
    return (
      <ReactEchart
        style={this.props.style}
        option={this.chartOption()}
      />
    );
  }
}

LineChart.propTypes = {
  data: PropTypes.object,
  xAxis: PropTypes.array,
  style: PropTypes.object,
  selected: PropTypes.object,
};

export default LineChart;
