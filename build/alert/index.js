!function(e){var t={};function r(a){if(t[a])return t[a].exports;var l=t[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,r),l.l=!0,l.exports}r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)r.d(a,l,function(t){return e[t]}.bind(null,l));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=124)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},124:function(e,t,r){"use strict";r.r(t);var a=r(0),l=r(1),n=r(7),o=r(16),i=r.n(o),s=r(5),c=r(4),u=r(80),b=r(6);r(2),Object(n.registerBlockType)("beer-blocks/alert",{apiVersion:2,title:Object(l._x)("Alert","block title","beer-blocks"),category:"beer-blocks",description:Object(l._x)("Represents Bootstrap Alerts that provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.","block description","beer-blocks"),textdomain:"beer-blocks",icon:Object(a.createElement)("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4Ni40MyA3Ny41NCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNlZmExMjY7fS5jbHMtMntmaWxsOm5vbmU7c3Ryb2tlOiMwMTAxMDE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9IkNhcGFfMiIgZGF0YS1uYW1lPSJDYXBhIDIiPjxnIGlkPSJDYXBhXzEtMiIgZGF0YS1uYW1lPSJDYXBhIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTc2LjI1LDc3LjU0SDEwLjE4QTEwLjE2LDEwLjE2LDAsMCwxLDEuMzgsNjIuM2wzMy01Ny4yMmExMC4xNiwxMC4xNiwwLDAsMSwxNy42LDBsMzMsNTcuMjJhMTAuMTYsMTAuMTYsMCwwLDEtOC44LDE1LjI0Wm0tMzMtNzIuNDhBNS4wNSw1LjA1LDAsMCwwLDM4LjgsNy42MWwtMzMsNTcuMjJhNS4xLDUuMSwwLDAsMCw0LjQyLDcuNjVINzYuMjVhNS4xLDUuMSwwLDAsMCw0LjQxLTcuNjVsLTMzLTU3LjIyQTUuMDYsNS4wNiwwLDAsMCw0My4yMSw1LjA2WiIvPjxyZWN0IGNsYXNzPSJjbHMtMiIgeD0iNDAuMiIgeT0iMTkuNzQiIHdpZHRoPSI2LjAzIiBoZWlnaHQ9IjMwLjEzIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNDMuMjEsNjMuOTNhNCw0LDAsMSwxLDQtNEE0LDQsMCwwLDEsNDMuMjEsNjMuOTNaIi8+PC9nPjwvZz48L3N2Zz4=",alt:Object(l._x)("Alert","block title","beer-blocks")}),attributes:{contents:{type:"html"},alertType:{type:"string",default:"alert alert-light"},...b.a.attributes()},edit:e=>{const{attributes:{alertType:t},setAttributes:r}=e,n=Object(s.useBlockProps)({className:t,style:{...b.a.styles(e.attributes)}});return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(s.InspectorControls,null,Object(a.createElement)(c.PanelBody,{title:Object(l.__)("Alert settings","beer-blocks")},Object(a.createElement)(c.SelectControl,{label:Object(l.__)("Select an alert type","beer-blocks"),value:t,options:u.a.map(e=>({...e,value:"alert alert-"+e.value})),onChange:e=>r({alertType:e}),style:{paddingBottom:0,marginBottom:0}})),b.a.controls({props:e})),b.a.visualizer(e,Object(a.createElement)("div",i()({},n,{role:"alert"}),Object(a.createElement)(s.InnerBlocks,null))))},save:e=>{const{attributes:{alertType:t}}=e,r=s.useBlockProps.save({className:t,style:{...b.a.styles(e.attributes)}});return Object(a.createElement)("div",i()({},r,{role:"alert"}),Object(a.createElement)(s.InnerBlocks.Content,null))}})},16:function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,r.apply(this,arguments)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},2:function(e,t){e.exports=window.React},3:function(e,t){e.exports=window.lodash},4:function(e,t){e.exports=window.wp.components},5:function(e,t){e.exports=window.wp.blockEditor},6:function(e,t,r){"use strict";var a=r(0),l=r(1),n=r(4),o=r(3);const{__Visualizer:i}=n.__experimentalBoxControl,s=[{value:"px",label:"PX"},{value:"em",label:"EM"},{value:"rem",label:"REM"}],c=(e=["top","right","bottom","left"])=>({type:"object",default:Object.fromEntries(e.map(e=>[e,""]))}),u=({props:e,paddingAttr:t="padding",visualizerAttr:r="visualizer"}={})=>{const{setAttributes:o,attributes:{[t]:i}}=e,c=Object.entries(i).map(e=>e[0]),u=Object.fromEntries(c.map(e=>[e,""]));return Object(a.createElement)(n.__experimentalBoxControl,{label:Object(l.__)("Padding","beer-blocks"),allowReset:!0,resetValues:u,units:s,values:i,onChange:e=>o({[t]:e}),onChangeShowVisualizer:e=>o({[r]:{values:i,showValues:e}}),sides:c})},b=(e={})=>{const{top:t,right:r,bottom:a,left:l}=e;return{...t?{paddingTop:t}:{},...r?{paddingRight:r}:{},...a?{paddingBottom:a}:{},...l?{paddingLeft:l}:{}}},p=(e=["top","right","bottom","left"])=>({type:"object",default:Object.fromEntries(e.map(e=>[e,""]))}),m=({props:e,marginAttr:t="margin"})=>{const{setAttributes:r,attributes:{[t]:o}}=e,i=Object.entries(o).map(e=>e[0]),c=Object.fromEntries(i.map(e=>[e,""]));return Object(a.createElement)(n.__experimentalBoxControl,{label:Object(l.__)("Margin","beer-blocks"),allowReset:!0,resetValues:c,units:s,values:o,onChange:e=>r({margin:e}),sides:i})},d=(e={})=>{const{top:t,right:r,bottom:a,left:l}=e;return{...t?{marginTop:t}:{},...r?{marginRight:r}:{},...a?{marginBottom:a}:{},...l?{marginLeft:l}:{}}},j=(e,t="")=>{const r=Object(o.camelCase)(t+"-padding"),l=Object(o.camelCase)(t+"-visualizer"),n=Object(o.camelCase)(t+"-margin"),{attributes:{[r]:i,[n]:s}}=e;return Object(a.createElement)(a.Fragment,null,Object(o.isObjectLike)(i)?u({props:e,paddingAttr:r,visualizerAttr:l}):null,Object(o.isObjectLike)(s)?m({props:e,marginAttr:n}):null)};t.a={visualizerAttribute:()=>({type:"object",default:{values:{top:"",right:"",bottom:"",left:""},showValues:{top:!1,right:!1,bottom:!1,left:!1}}}),paddingAttribute:c,paddingControl:u,paddingStyles:b,marginAttribute:p,marginControl:m,marginStyles:d,attributes:({padding:e=["top","right","bottom","left"],margin:t=["top","right","bottom","left"]}={},r="")=>({...Object(o.isArray)(e)?{[Object(o.camelCase)(r+"-padding")]:c(e)}:{},...Object(o.isArray)(t)?{[Object(o.camelCase)(r+"-margin")]:p(t)}:{},...Object(o.isArray)(e)?{[Object(o.camelCase)(r+"-visualizer")]:{type:"object",default:{values:{top:"",right:"",bottom:"",left:""},showValues:{top:!1,right:!1,bottom:!1,left:!1}}}}:{}}),innerControls:j,controls:({props:e,initialOpen:t=!1,attrPrefixName:r=""})=>Object(a.createElement)(n.PanelBody,{title:Object(l.__)("Spacing","beer-blocks"),initialOpen:t},j(e,r)),styles:(e,t="")=>{const{[Object(o.camelCase)(t+"-padding")]:r,[Object(o.camelCase)(t+"-margin")]:a}=e;return{...Object(o.isObjectLike)(r)?b(r):{},...Object(o.isObjectLike)(a)?d(a):{}}},visualizer:(e,t,r="")=>{const{attributes:{[Object(o.camelCase)(r+"-visualizer")]:{values:l,showValues:n}}}=e;return Object(a.createElement)(i,{showValues:n,values:l},t)}}},7:function(e,t){e.exports=window.wp.blocks},80:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return l}));const a=[...Object.entries({primary:"#007bff",secondary:"#6c757d",success:"#28a745",info:"#17a2b8",warning:"#ffc107",danger:"#dc3545",light:"#f8f9fa",dark:"#343a40"}).map(e=>({name:e[0],color:e[1]}))],l=[{value:"primary",label:"Primary"},{value:"secondary",label:"Secondary"},{value:"success",label:"Success"},{value:"danger",label:"Danger"},{value:"warning",label:"Warning"},{value:"info",label:"Info"},{value:"light",label:"Light"},{value:"dark",label:"Dark"}]}});