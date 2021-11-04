!function(e){var t={};function r(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(i,s,function(t){return e[t]}.bind(null,s));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=62)}({0:function(e,t){e.exports=window.React},1:function(e,t){e.exports=window.wp.element},2:function(e,t){e.exports=window.wp.i18n},3:function(e,t){e.exports=window.lodash},4:function(e,t){e.exports=window.wp.components},6:function(e,t){e.exports=window.wp.blockEditor},62:function(e,t,r){"use strict";r.r(t);var i=r(1),s=r(2),a=r(8),o=r(6),n=r(7);r(0),Object(a.registerBlockType)("beer-blocks/advanced-header",{apiVersion:2,title:Object(s._x)("Advanced Header","block title","beer-blocks"),category:"beer-blocks",description:Object(s._x)("Create headers with title, line separator and subtitle.","block description","beer-blocks"),textdomain:"beer-blocks",supports:{color:{background:!0,gradients:!0,text:!1}},icon:Object(i.createElement)("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3Ny4wNiA3Ny4wNiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNlZmExMjY7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJDYXBhXzIiIGRhdGEtbmFtZT0iQ2FwYSAyIj48ZyBpZD0iQ2FwYV8xLTIiIGRhdGEtbmFtZT0iQ2FwYSAxIj48cGF0aCBkPSJNNzIuMjQsMTkuMjZINC44MkE0LjgyLDQuODIsMCwwLDEsMCwxNC40NVY0LjgyQTQuODIsNC44MiwwLDAsMSw0LjgyLDBINzIuMjRhNC44Miw0LjgyLDAsMCwxLDQuODIsNC44MnY5LjYzYTQuODIsNC44MiwwLDAsMS00LjgyLDQuODFaIi8+PHJlY3QgY2xhc3M9ImNscy0xIiB4PSIzLjIxIiB5PSIzLjIxIiB3aWR0aD0iNzAuNjMiIGhlaWdodD0iMTIuODQiIHJ4PSIxLjYxIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzMuNzEsMjguOUgxLjYxYTEuNjEsMS42MSwwLDEsMSwwLTMuMjFoMzIuMWExLjYxLDEuNjEsMCwxLDEsMCwzLjIxWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTMzLjcxLDM4LjUzSDEuNjFhMS42MSwxLjYxLDAsMSwxLDAtMy4yMWgzMi4xYTEuNjEsMS42MSwwLDEsMSwwLDMuMjFaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzMuNzEsNDguMTZIMS42MWExLjYxLDEuNjEsMCwxLDEsMC0zLjIxaDMyLjFhMS42MSwxLjYxLDAsMSwxLDAsMy4yMVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0zMy43MSw1Ny43OUgxLjYxYTEuNjEsMS42MSwwLDEsMSwwLTMuMjFoMzIuMWExLjYxLDEuNjEsMCwxLDEsMCwzLjIxWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTMzLjcxLDY3LjQySDEuNjFhMS42MSwxLjYxLDAsMSwxLDAtMy4yMWgzMi4xYTEuNjEsMS42MSwwLDEsMSwwLDMuMjFaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNzUuNDUsMjguOUg0My4zNGExLjYxLDEuNjEsMCwwLDEsMC0zLjIxSDc1LjQ1YTEuNjEsMS42MSwwLDEsMSwwLDMuMjFaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNzUuNDUsMzguNTNINDMuMzRhMS42MSwxLjYxLDAsMCwxLDAtMy4yMUg3NS40NWExLjYxLDEuNjEsMCwxLDEsMCwzLjIxWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTc1LjQ1LDQ4LjE2SDQzLjM0YTEuNjEsMS42MSwwLDAsMSwwLTMuMjFINzUuNDVhMS42MSwxLjYxLDAsMSwxLDAsMy4yMVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik03NS40NSw1Ny43OUg0My4zNGExLjYxLDEuNjEsMCwwLDEsMC0zLjIxSDc1LjQ1YTEuNjEsMS42MSwwLDEsMSwwLDMuMjFaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNzUuNDUsNjcuNDJINDMuMzRhMS42MSwxLjYxLDAsMCwxLDAtMy4yMUg3NS40NWExLjYxLDEuNjEsMCwxLDEsMCwzLjIxWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTMzLjcxLDc3LjA2SDEuNjFhMS42MSwxLjYxLDAsMSwxLDAtMy4yMWgzMi4xYTEuNjEsMS42MSwwLDEsMSwwLDMuMjFaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNzUuNDUsNzcuMDZINDMuMzRhMS42MSwxLjYxLDAsMCwxLDAtMy4yMUg3NS40NWExLjYxLDEuNjEsMCwxLDEsMCwzLjIxWiIvPjwvZz48L2c+PC9zdmc+",alt:Object(s._x)("Advanced Header","block title","beer-blocks")}),attributes:{...n.a.attributes()},edit:e=>{const t=Object(o.useBlockProps)({style:{...n.a.styles(e.attributes)}}),r=[["beer-blocks/header",{placeholder:Object(s.__)("Write title here...","beer-blocks"),textAlign:"center"}],["beer-blocks/separator",{height:2,marginTop:"1rem",marginBottom:"1rem",align:"center"}],["beer-blocks/paragraph",{placeholder:Object(s.__)("Write subtitle here...","beer-blocks"),textAlign:"center"}]];return Object(i.createElement)(i.Fragment,null,Object(i.createElement)(o.InspectorControls,null,n.a.controls({props:e})),n.a.visualizer(e,Object(i.createElement)("div",t,Object(i.createElement)(o.InnerBlocks,{template:r,templateLock:"all"}))))},save:e=>{const t=o.useBlockProps.save({style:{...n.a.styles(e.attributes)}});return Object(i.createElement)("div",t,Object(i.createElement)(o.InnerBlocks.Content,null))}})},7:function(e,t,r){"use strict";var i=r(1),s=r(2),a=r(4),o=r(3);const{__Visualizer:n}=a.__experimentalBoxControl,c=[{value:"px",label:"PX"},{value:"em",label:"EM"},{value:"rem",label:"REM"}],l=(e=["top","right","bottom","left"])=>({type:"object",default:Object.fromEntries(e.map(e=>[e,""]))}),M=({props:e,paddingAttr:t="padding",visualizerAttr:r="visualizer"}={})=>{const{setAttributes:o,attributes:{[t]:n}}=e,l=Object.entries(n).map(e=>e[0]),M=Object.fromEntries(l.map(e=>[e,""]));return Object(i.createElement)(a.__experimentalBoxControl,{label:Object(s.__)("Padding","beer-blocks"),allowReset:!0,resetValues:M,units:c,values:n,onChange:e=>o({[t]:e}),onChangeShowVisualizer:e=>o({[r]:{values:n,showValues:e}}),sides:l})},u=(e={})=>{const{top:t,right:r,bottom:i,left:s}=e;return{...t?{paddingTop:t}:{},...r?{paddingRight:r}:{},...i?{paddingBottom:i}:{},...s?{paddingLeft:s}:{}}},j=(e=["top","right","bottom","left"])=>({type:"object",default:Object.fromEntries(e.map(e=>[e,""]))}),b=({props:e,marginAttr:t="margin"})=>{const{setAttributes:r,attributes:{[t]:o}}=e,n=Object.entries(o).map(e=>e[0]),l=Object.fromEntries(n.map(e=>[e,""]));return Object(i.createElement)(a.__experimentalBoxControl,{label:Object(s.__)("Margin","beer-blocks"),allowReset:!0,resetValues:l,units:c,values:o,onChange:e=>r({margin:e}),sides:n})},x=(e={})=>{const{top:t,right:r,bottom:i,left:s}=e;return{...t?{marginTop:t}:{},...r?{marginRight:r}:{},...i?{marginBottom:i}:{},...s?{marginLeft:s}:{}}},L=(e,t="")=>{const r=Object(o.camelCase)(t+"-padding"),s=Object(o.camelCase)(t+"-visualizer"),a=Object(o.camelCase)(t+"-margin"),{attributes:{[r]:n,[a]:c}}=e;return Object(i.createElement)(i.Fragment,null,Object(o.isObjectLike)(n)?M({props:e,paddingAttr:r,visualizerAttr:s}):null,Object(o.isObjectLike)(c)?b({props:e,marginAttr:a}):null)};t.a={visualizerAttribute:()=>({type:"object",default:{values:{top:"",right:"",bottom:"",left:""},showValues:{top:!1,right:!1,bottom:!1,left:!1}}}),paddingAttribute:l,paddingControl:M,paddingStyles:u,marginAttribute:j,marginControl:b,marginStyles:x,attributes:({padding:e=["top","right","bottom","left"],margin:t=["top","right","bottom","left"]}={},r="")=>({...Object(o.isArray)(e)?{[Object(o.camelCase)(r+"-padding")]:l(e)}:{},...Object(o.isArray)(t)?{[Object(o.camelCase)(r+"-margin")]:j(t)}:{},...Object(o.isArray)(e)?{[Object(o.camelCase)(r+"-visualizer")]:{type:"object",default:{values:{top:"",right:"",bottom:"",left:""},showValues:{top:!1,right:!1,bottom:!1,left:!1}}}}:{}}),innerControls:L,controls:({props:e,initialOpen:t=!1,attrPrefixName:r=""})=>Object(i.createElement)(a.PanelBody,{title:Object(s.__)("Spacing","beer-blocks"),initialOpen:t},L(e,r)),styles:(e,t="")=>{const{[Object(o.camelCase)(t+"-padding")]:r,[Object(o.camelCase)(t+"-margin")]:i}=e;return{...Object(o.isObjectLike)(r)?u(r):{},...Object(o.isObjectLike)(i)?x(i):{}}},visualizer:(e,t,r="")=>{const{attributes:{[Object(o.camelCase)(r+"-visualizer")]:{values:s,showValues:a}}}=e;return Object(i.createElement)(n,{showValues:a,values:s},t)}}},8:function(e,t){e.exports=window.wp.blocks}});