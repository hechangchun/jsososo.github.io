webpackJsonp([15],{"./app/containers/CodingDemo/index.js":function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k;switch(arguments[1].type){case L:default:return e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function T(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function A(e){return{dispatch:e}}Object.defineProperty(t,"__esModule",{value:!0});var S=n("./node_modules/_react@16.8.6@react/index.js"),O=n.n(S),j=(n("./node_modules/_prop-types@15.5.10@prop-types/index.js"),n("./node_modules/_react-redux@5.0.5@react-redux/es/index.js")),g=n("./node_modules/_react-helmet@5.1.3@react-helmet/lib/Helmet.js"),w=n("./node_modules/_reselect@3.0.1@reselect/es/index.js"),P=n("./node_modules/_redux@3.6.0@redux/es/index.js"),R=n("./app/utils/injectReducer.js"),C=function(e){return e.get("codingDemo")},M=function(){return Object(w.a)(C,function(e){return e.toJS()})},I=M,N=n("./node_modules/_immutable@3.8.1@immutable/dist/immutable.js"),L="app/CodingDemo/DEFAULT_ACTION",k=Object(N.fromJS)({}),x=r,G=n("./node_modules/_antd@3.5.2@antd/lib/index.js"),H=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var u in i)void 0===n[u]&&(n[u]=i[u]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var c=Array(a),l=0;l<a;l++)c[l]=arguments[l+3];n.children=c}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),U=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),B=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),U(t,[{key:"render",value:function(){var e=this.props,t=e.val,n=e.obj,r=e.arr,o=e.type,i=t;return"obj"===o?i=n.val:"arr"===o&&(i=r[0]),H("div",{},void 0,H("span",{className:"ft_18 inline-block",style:{width:"420px"}},void 0,"Component: "),H("span",{},void 0,i))}}]),t}(O.a.Component),D=B,q=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var u in i)void 0===n[u]&&(n[u]=i[u]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var c=Array(a),l=0;l<a;l++)c[l]=arguments[l+3];n.children=c}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),$=function(e){function t(){return u(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),Y(t,[{key:"render",value:function(){var e=this.props,t=e.val,n=e.obj,r=e.arr,o=e.type,i=e.sub,a=t;return"obj"===o?a=n.val:"arr"===o&&(a=r[0]),q("div",{},void 0,q("span",{className:"ft_18 inline-block",style:{width:"420px"}},void 0,"PureComponent",i,": "),q("span",{},void 0,a))}}]),t}(O.a.PureComponent),F=$,W=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var u in i)void 0===n[u]&&(n[u]=i[u]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var c=Array(a),l=0;l<a;l++)c[l]=arguments[l+3];n.children=c}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),K=function(e){var t=e.val,n=e.obj,r=e.arr,o=e.type,i=t;return"obj"===o?i=n.val:"arr"===o&&(i=r[0]),W("div",{},void 0,W("span",{className:"ft_18 inline-block",style:{width:"420px"}},void 0,"Stateless: "),W("span",{},void 0,i))},X=K,V=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var u in i)void 0===n[u]&&(n[u]=i[u]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var c=Array(a),l=0;l<a;l++)c[l]=arguments[l+3];n.children=c}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Q=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),z=function(e){function t(){return s(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,e),Q(t,[{key:"shouldComponentUpdate",value:function(e,t){return console.log(J({},e),J({},this.props)),!0}},{key:"render",value:function(){var e=this.props,t=e.val,n=e.obj,r=e.arr,o=e.type,i=t;return"obj"===o?i=n.val:"arr"===o&&(i=r[0]),V("div",{},void 0,V("span",{className:"ft_18 inline-block",style:{width:"420px"}},void 0,"PureComponent (shouldComponentUpdate): "),V("span",{},void 0,i))}}]),t}(O.a.PureComponent),Z=z,ee=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var u in i)void 0===n[u]&&(n[u]=i[u]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var c=Array(a),l=0;l<a;l++)c[l]=arguments[l+3];n.children=c}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ne=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),re=function(e){function t(e){d(this,t);var n=y(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={val:"",obj:{val:""},arr:[""]},n}return T(t,e),ne(t,[{key:"onChange",value:function(e){var t=te({},this.state);switch(this.props.type){case"string":t.val=e;break;case"obj":t.obj.val=e;break;case"arr":t.arr[0]=e}this.setState(t)}},{key:"render",value:function(){var e=this,t=this.props.type,n=this.state,r=n.val,o=n.obj,i=n.arr,a=r;return"obj"===t?a=o.val:"arr"===t&&(a=i[0]),ee("div",{className:"mt_20"},void 0,ee(G.Input,{value:a,onChange:function(t){return e.onChange(t.target.value)}}),ee("span",{className:"ft_18 inline-block",style:{width:"420px"}},void 0,"PureComponent ( state ): "),ee("span",{},void 0,a))}}]),t}(O.a.PureComponent),oe=re,ie=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var u in i)void 0===n[u]&&(n[u]=i[u]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var c=Array(a),l=0;l<a;l++)c[l]=arguments[l+3];n.children=c}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),ae=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),ue=ie("div",{className:"ft_18"},void 0,"stateless with hook"),ce=function(){var e=Object(S.useState)("hello world"),t=ae(e,2),n=t[0],r=t[1];return ie("div",{className:"mt_20"},void 0,ue,ie(G.Input,{value:n,onChange:function(e){return r(e.target.value)}}),ie("span",{},void 0,n))},le=ce,se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fe=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var u in i)void 0===n[u]&&(n[u]=i[u]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var c=Array(a),l=0;l<a;l++)c[l]=arguments[l+3];n.children=c}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),pe=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),de=fe(G.Radio,{value:"string"},void 0,"String"),ye=fe(G.Radio,{value:"obj"},void 0,"Object"),Te=fe(G.Radio,{value:"arr"},void 0,"Array"),be=fe(le,{}),he=function(e){function t(e){b(this,t);var n=h(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={obj:{val:""},val:"",arr:[""],type:"string"},n.onChange=n.onChange.bind(n),n}return v(t,e),pe(t,[{key:"onChange",value:function(e){var t=this.state;switch(t.type){case"string":t.val=e;break;case"obj":t.obj.val=e;break;case"arr":t.arr[0]=e}this.setState(t)}},{key:"render",value:function(){var e=this,t=this.state,n=t.val;return"obj"===t.type?n=t.obj.val:"arr"===t.type&&(n=t.arr[0]),fe("div",{},void 0,fe(G.Radio.Group,{className:"mb_10",value:t.type,onChange:function(t){return e.setState({type:t.target.value})}},void 0,de,ye,Te),fe(G.Input,{className:"mb_10",value:n,onChange:function(t){return e.onChange(t.target.value)}}),fe("div",{},void 0,O.a.createElement(D,t),O.a.createElement(F,t),O.a.createElement(X,t),O.a.createElement(Z,t),O.a.createElement(F,se({},t,{fun:function(){return!0},sub:" (props: func={() => true})"})),fe(oe,{type:t.type}),be))}}]),t}(O.a.Component),ve=he;n.d(t,"CodingDemo",function(){return Se});var Ee=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_e=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var u in i)void 0===n[u]&&(n[u]=i[u]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var c=Array(a),l=0;l<a;l++)c[l]=arguments[l+3];n.children=c}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),me={demo1:_e(ve,{})},Ae=_e(g.Helmet,{},void 0,_e("title",{},void 0,"Coooooding")),Se=function(e){function t(){return E(this,t),_(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return m(t,e),Ee(t,[{key:"render",value:function(){var e=this.props.match.params.id;return _e("div",{},void 0,Ae,_e("div",{},void 0,me["demo"+e]))}}]),t}(O.a.PureComponent),Oe=Object(w.b)({codingdemo:I()}),je=Object(j.b)(Oe,A),ge=Object(R.a)({key:"codingDemo",reducer:x});t.default=Object(P.c)(ge,je)(Se)},"./app/utils/injectReducer.js":function(e,t,n){"use strict";function r(e,t){return function(n,r){t||Object(A.a)(e),T()(m()(n)&&!h()(n)&&E()(r),"(app/utils...) injectReducer: Expected `reducer` to be a reducer function"),Reflect.has(e.injectedReducers,n)&&e.injectedReducers[n]===r||(e.injectedReducers[n]=r,e.replaceReducer(Object(S.a)(e.injectedReducers)))}}function o(e){return Object(A.a)(e),{injectReducer:r(e,!0)}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n("./node_modules/_react@16.8.6@react/index.js"),l=n.n(c),s=n("./node_modules/_prop-types@15.5.10@prop-types/index.js"),f=n.n(s),p=n("./node_modules/_hoist-non-react-statics@2.1.1@hoist-non-react-statics/index.js"),d=n.n(p),y=n("./node_modules/_invariant@2.2.2@invariant/browser.js"),T=n.n(y),b=n("./node_modules/_lodash@4.17.11@lodash/isEmpty.js"),h=n.n(b),v=n("./node_modules/_lodash@4.17.11@lodash/isFunction.js"),E=n.n(v),_=n("./node_modules/_lodash@4.17.11@lodash/isString.js"),m=n.n(_),A=n("./app/utils/checkStore.js"),S=n("./app/reducers.js"),O=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.a=function(e){var t=e.key,n=e.reducer;return function(e){var r=function(r){function c(){var e,t,n,r;i(this,c);for(var u=arguments.length,l=Array(u),s=0;s<u;s++)l[s]=arguments[s];return t=n=a(this,(e=c.__proto__||Object.getPrototypeOf(c)).call.apply(e,[this].concat(l))),n.injectors=o(n.context.store),r=t,a(n,r)}return u(c,r),O(c,[{key:"componentWillMount",value:function(){(0,this.injectors.injectReducer)(t,n)}},{key:"render",value:function(){return l.a.createElement(e,this.props)}}]),c}(l.a.Component);return r.WrappedComponent=e,r.contextTypes={store:f.a.object.isRequired},r.displayName="withReducer("+(e.displayName||e.name||"Component")+")",d()(r,e)}}},"./node_modules/_deep-equal@1.0.1@deep-equal/index.js":function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function i(e,t,n){var i,s;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(c(e))return!!c(t)&&(e=a.call(e),t=a.call(t),l(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}try{var f=u(e),p=u(t)}catch(e){return!1}if(f.length!=p.length)return!1;for(f.sort(),p.sort(),i=f.length-1;i>=0;i--)if(f[i]!=p[i])return!1;for(i=f.length-1;i>=0;i--)if(s=f[i],!l(e[s],t[s],n))return!1;return typeof e==typeof t}var a=Array.prototype.slice,u=n("./node_modules/_deep-equal@1.0.1@deep-equal/lib/keys.js"),c=n("./node_modules/_deep-equal@1.0.1@deep-equal/lib/is_arguments.js"),l=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:i(e,t,n))}},"./node_modules/_deep-equal@1.0.1@deep-equal/lib/is_arguments.js":function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},"./node_modules/_deep-equal@1.0.1@deep-equal/lib/keys.js":function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},"./node_modules/_exenv@1.2.2@exenv/index.js":function(e,t,n){var r;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0!==(r=function(){return i}.call(t,n,t,e))&&(e.exports=r)}()},"./node_modules/_react-helmet@5.1.3@react-helmet/lib/Helmet.js":function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n("./node_modules/_react@16.8.6@react/index.js"),f=r(s),p=n("./node_modules/_prop-types@15.7.2@prop-types/index.js"),d=r(p),y=n("./node_modules/_react-side-effect@1.1.5@react-side-effect/lib/index.js"),T=r(y),b=n("./node_modules/_deep-equal@1.0.1@deep-equal/index.js"),h=r(b),v=n("./node_modules/_react-helmet@5.1.3@react-helmet/lib/HelmetUtils.js"),E=n("./node_modules/_react-helmet@5.1.3@react-helmet/lib/HelmetConstants.js"),_=function(){return null},m=(0,T.default)(v.reducePropsToState,v.handleClientStateChange,v.mapStateOnServer)(_),A=function(e){var t,n;return n=t=function(t){function n(){return i(this,n),a(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,h.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case E.TAG_NAMES.SCRIPT:case E.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case E.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return c({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[c({},o,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case E.TAG_NAMES.TITLE:return c({},o,(t={},t[r.type]=a,t.titleAttributes=c({},i),t));case E.TAG_NAMES.BODY:return c({},o,{bodyAttributes:c({},i)});case E.TAG_NAMES.HTML:return c({},o,{htmlAttributes:c({},i)})}return c({},o,(n={},n[r.type]=c({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=c({},t);return Object.keys(e).forEach(function(t){var r;n=c({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var i=e.props,a=i.children,u=o(i,["children"]),c=(0,v.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,a),e.type){case E.TAG_NAMES.LINK:case E.TAG_NAMES.META:case E.TAG_NAMES.NOSCRIPT:case E.TAG_NAMES.SCRIPT:case E.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:a})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),i=c({},r);return n&&(i=this.mapChildrenToProps(n,i)),f.default.createElement(e,i)},l(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:d.default.object,bodyAttributes:d.default.object,children:d.default.oneOfType([d.default.arrayOf(d.default.node),d.default.node]),defaultTitle:d.default.string,encodeSpecialCharacters:d.default.bool,htmlAttributes:d.default.object,link:d.default.arrayOf(d.default.object),meta:d.default.arrayOf(d.default.object),noscript:d.default.arrayOf(d.default.object),onChangeClientState:d.default.func,script:d.default.arrayOf(d.default.object),style:d.default.arrayOf(d.default.object),title:d.default.string,titleAttributes:d.default.object,titleTemplate:d.default.string},t.defaultProps={encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,v.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n}(m);A.renderStatic=A.rewind,t.Helmet=A,t.default=A},"./node_modules/_react-helmet@5.1.3@react-helmet/lib/HelmetConstants.js":function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},"./node_modules/_react-helmet@5.1.3@react-helmet/lib/HelmetUtils.js":function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestIdleCallback=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n("./node_modules/_react@16.8.6@react/index.js"),u=r(a),c=n("./node_modules/_object-assign@4.1.1@object-assign/index.js"),l=r(c),s=n("./node_modules/_react-helmet@5.1.3@react-helmet/lib/HelmetConstants.js"),f=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},p=function(e){var t=h(e,s.TAG_NAMES.TITLE),n=h(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=h(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},d=function(e){return h(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},y=function(e,t){return t.filter(function(t){return void 0!==t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return i({},e,t)},{})},T=function(e,t){return t.filter(function(e){return void 0!==e[s.TAG_NAMES.BASE]}).map(function(e){return e[s.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o],a=i.toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t},[])},b=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&m("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();-1===t.indexOf(c)||n===s.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||c===s.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(u)||u!==s.TAG_PROPERTIES.INNER_HTML&&u!==s.TAG_PROPERTIES.CSS_TEXT&&u!==s.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=(0,l.default)({},r[u],o[u]);r[u]=c}return e},[]).reverse()},h=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},v=function(e){return{baseTag:T([s.TAG_PROPERTIES.HREF],e),bodyAttributes:y(s.ATTRIBUTE_NAMES.BODY,e),encode:h(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:y(s.ATTRIBUTE_NAMES.HTML,e),linkTags:b(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:b(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:b(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:d(e),scriptTags:b(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:b(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:p(e),titleAttributes:y(s.ATTRIBUTE_NAMES.TITLE,e)}},E=function(){return"undefined"!=typeof window&&void 0!==window.requestIdleCallback?window.requestIdleCallback:function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)}}(),_=function(){return"undefined"!=typeof window&&void 0!==window.cancelIdleCallback?window.cancelIdleCallback:function(e){return clearTimeout(e)}}(),m=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},A=null,S=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.htmlAttributes,o=e.linkTags,i=e.metaTags,a=e.noscriptTags,u=e.onChangeClientState,c=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;A&&_(A),A=E(function(){j(s.TAG_NAMES.BODY,n),j(s.TAG_NAMES.HTML,r),O(f,p);var d={baseTag:g(s.TAG_NAMES.BASE,t),linkTags:g(s.TAG_NAMES.LINK,o),metaTags:g(s.TAG_NAMES.META,i),noscriptTags:g(s.TAG_NAMES.NOSCRIPT,a),scriptTags:g(s.TAG_NAMES.SCRIPT,c),styleTags:g(s.TAG_NAMES.STYLE,l)},y={},T={};Object.keys(d).forEach(function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(y[e]=n),r.length&&(T[e]=d[e].oldTags)}),A=null,u(e,y,T)})},O=function(e,t){void 0!==e&&document.title!==e&&(document.title=Array.isArray(e)?e.join(""):e),j(s.TAG_NAMES.TITLE,t)},j=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(s.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var c=a[u],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),-1===o.indexOf(c)&&o.push(c);var f=i.indexOf(c);-1!==f&&i.splice(f,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);o.length===i.length?n.removeAttribute(s.HELMET_ATTRIBUTE):n.getAttribute(s.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(s.HELMET_ATTRIBUTE,a.join(","))}},g=function(e,t){var n=document.head||document.querySelector(s.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===s.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===s.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(s.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return a=t,n.isEqualNode(e)})?o.splice(a,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},w=function(e){return Object.keys(e).reduce(function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},P=function(e,t,n,r){var o=w(n);return o?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+">"+f(t,r)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+f(t,r)+"</"+e+">"},R=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o=void 0===r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=-1===s.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.REACT_TAG_MAP[n]||n]=e[n],t},t)},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.HTML_TAG_MAP[n]||n]=e[n],t},t)},I=function(e,t,n){var r,o=(r={key:t},r[s.HELMET_ATTRIBUTE]=!0,r),i=C(n,o);return[u.default.createElement(s.TAG_NAMES.TITLE,i,t)]},N=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[s.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=s.REACT_TAG_MAP[e]||e;if(n===s.TAG_PROPERTIES.INNER_HTML||n===s.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),u.default.createElement(e,o)})},L=function(e,t,n){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return I(0,t.title,t.titleAttributes)},toString:function(){return P(e,t.title,t.titleAttributes,n)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return C(t)},toString:function(){return w(t)}};default:return{toComponent:function(){return N(e,t)},toString:function(){return R(e,t,n)}}}},k=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.scriptTags,l=e.styleTags,f=e.title,p=void 0===f?"":f,d=e.titleAttributes;return{base:L(s.TAG_NAMES.BASE,t,r),bodyAttributes:L(s.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:L(s.ATTRIBUTE_NAMES.HTML,o,r),link:L(s.TAG_NAMES.LINK,i,r),meta:L(s.TAG_NAMES.META,a,r),noscript:L(s.TAG_NAMES.NOSCRIPT,u,r),script:L(s.TAG_NAMES.SCRIPT,c,r),style:L(s.TAG_NAMES.STYLE,l,r),title:L(s.TAG_NAMES.TITLE,{title:p,titleAttributes:d},r)}};t.convertReactPropstoHtmlAttributes=M,t.handleClientStateChange=S,t.mapStateOnServer=k,t.reducePropsToState=v,t.requestIdleCallback=E,t.warn=m},"./node_modules/_react-side-effect@1.1.5@react-side-effect/lib/index.js":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(u){function p(){y=e(d.map(function(e){return e.props})),T.canUseDOM?t(y):n&&(y=n(y))}if("function"!=typeof u)throw new Error("Expected WrappedComponent to be a React component.");var d=[],y=void 0,T=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.peek=function(){return y},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=y;return y=void 0,d=[],e},t.prototype.shouldComponentUpdate=function(e){return!f(e,this.props)},t.prototype.componentWillMount=function(){d.push(this),p()},t.prototype.componentDidUpdate=function(){p()},t.prototype.componentWillUnmount=function(){var e=d.indexOf(this);d.splice(e,1),p()},t.prototype.render=function(){return l.createElement(u,this.props)},t}(c.Component);return T.displayName="SideEffect("+r(u)+")",T.canUseDOM=s.canUseDOM,T}}var c=n("./node_modules/_react@16.8.6@react/index.js"),l=r(c),s=r(n("./node_modules/_exenv@1.2.2@exenv/index.js")),f=r(n("./node_modules/_shallowequal@1.1.0@shallowequal/index.js"));e.exports=u}});