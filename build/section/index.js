!function(e){var t={};function r(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(s,i,function(t){return e[t]}.bind(null,i));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=67)}({0:function(e,t){e.exports=window.React},1:function(e,t){e.exports=window.wp.element},2:function(e,t){e.exports=window.wp.i18n},3:function(e,t){e.exports=window.lodash},4:function(e,t){e.exports=window.wp.components},40:function(e,t,r){"use strict";t.a=["div","header","main","section","article","aside","footer"]},6:function(e,t){e.exports=window.wp.blockEditor},67:function(e,t,r){"use strict";r.r(t);var s=r(1),i=r(2),o=r(8),n=r(6),a=r(4),l=r(7),c=r(40);r(0),Object(o.registerBlockType)("beer-blocks/section",{apiVersion:2,title:Object(i._x)("Section","block title","beer-blocks"),category:"beer-blocks",description:Object(i._x)("Create a section element with custom paddings and margins.","block description","beer-blocks"),textdomain:"beer-blocks",supports:{color:{background:!0,gradients:!0,text:!1}},icon:Object(s.createElement)("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3Ny4wNiA3Ny4wNiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNlZmExMjY7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJDYXBhXzIiIGRhdGEtbmFtZT0iQ2FwYSAyIj48ZyBpZD0iQ2FwYV8xLTIiIGRhdGEtbmFtZT0iQ2FwYSAxIj48cGF0aCBkPSJNMzAuNSw3Ny4wNkg0LjgyQTQuODIsNC44MiwwLDAsMSwwLDcyLjI0VjQuODJBNC44Miw0LjgyLDAsMCwxLDQuODIsMEgzMC41YTQuODIsNC44MiwwLDAsMSw0LjgyLDQuODJWNzIuMjRhNC44Miw0LjgyLDAsMCwxLTQuODIsNC44MlpNNC44MiwzLjIxQTEuNjEsMS42MSwwLDAsMCwzLjIxLDQuODJWNzIuMjRhMS42MSwxLjYxLDAsMCwwLDEuNjEsMS42MUgzMC41YTEuNjEsMS42MSwwLDAsMCwxLjYxLTEuNjFWNC44MkExLjYxLDEuNjEsMCwwLDAsMzAuNSwzLjIxWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTcyLjI0LDI4LjlINDYuNTVhNC44Myw0LjgzLDAsMCwxLTQuODEtNC44MlY0LjgyQTQuODIsNC44MiwwLDAsMSw0Ni41NSwwSDcyLjI0YTQuODIsNC44MiwwLDAsMSw0LjgyLDQuODJWMjQuMDhhNC44Myw0LjgzLDAsMCwxLTQuODIsNC44MlpNNDYuNTUsMy4yMUExLjYxLDEuNjEsMCwwLDAsNDUsNC44MlYyNC4wOGExLjYxLDEuNjEsMCwwLDAsMS42LDEuNjFINzIuMjRhMS42MSwxLjYxLDAsMCwwLDEuNjEtMS42MVY0LjgyYTEuNjEsMS42MSwwLDAsMC0xLjYxLTEuNjFaIi8+PHBhdGggZD0iTTc1LjQ1LDQ4LjE2SDQzLjM0YTEuNjEsMS42MSwwLDAsMSwwLTMuMjFINzUuNDVhMS42MSwxLjYxLDAsMSwxLDAsMy4yMVoiLz48cGF0aCBkPSJNNzUuNDUsMzguNTNINDMuMzRhMS42MSwxLjYxLDAsMCwxLDAtMy4yMUg3NS40NWExLjYxLDEuNjEsMCwxLDEsMCwzLjIxWiIvPjxwYXRoIGQ9Ik03NS40NSw1Ny43OUg0My4zNGExLjYxLDEuNjEsMCwwLDEsMC0zLjIxSDc1LjQ1YTEuNjEsMS42MSwwLDEsMSwwLDMuMjFaIi8+PHBhdGggZD0iTTc1LjQ1LDY3LjQySDQzLjM0YTEuNjEsMS42MSwwLDAsMSwwLTMuMjFINzUuNDVhMS42MSwxLjYxLDAsMSwxLDAsMy4yMVoiLz48cGF0aCBkPSJNNzUuNDUsNzcuMDZINDMuMzRhMS42MSwxLjYxLDAsMCwxLDAtMy4yMUg3NS40NWExLjYxLDEuNjEsMCwxLDEsMCwzLjIxWiIvPjwvZz48L2c+PC9zdmc+",alt:Object(i._x)("Section","block title","beer-blocks")}),attributes:{tagName:{type:"string",default:"section"},...l.a.attributes()},transforms:{from:[{type:"block",blocks:["core/group"],transform:(e,t)=>Object(o.createBlock)("beer-blocks/section",e,t)}]},edit:e=>{const{attributes:{tagName:t},setAttributes:r}=e,o=Object(n.useBlockProps)({style:{...l.a.styles(e.attributes)}});return Object(s.createElement)(s.Fragment,null,Object(s.createElement)(n.InspectorControls,null,Object(s.createElement)(a.PanelBody,{title:Object(i.__)("Section settings","beer-blocks")},Object(s.createElement)(a.SelectControl,{label:Object(i.__)("HTML Tag","beer-blocks"),options:[...c.a.map(e=>({label:`<${e}>`,value:e}))],value:t,onChange:e=>r({tagName:e})})),l.a.controls({props:e})),l.a.visualizer(e,Object(s.createElement)(t,o,Object(s.createElement)(n.InnerBlocks,null))))},save:e=>{const{attributes:{tagName:t}}=e,r=n.useBlockProps.save({style:{...l.a.styles(e.attributes)}});return Object(s.createElement)(t,r,Object(s.createElement)(n.InnerBlocks.Content,null))}})},7:function(e,t,r){"use strict";var s=r(1),i=r(2),o=r(4),n=r(3);const{__Visualizer:a}=o.__experimentalBoxControl,l=[{value:"px",label:"PX"},{value:"em",label:"EM"},{value:"rem",label:"REM"}],c=(e=["top","right","bottom","left"])=>({type:"object",default:Object.fromEntries(e.map(e=>[e,""]))}),u=({props:e,paddingAttr:t="padding",visualizerAttr:r="visualizer"}={})=>{const{setAttributes:n,attributes:{[t]:a}}=e,c=Object.entries(a).map(e=>e[0]),u=Object.fromEntries(c.map(e=>[e,""]));return Object(s.createElement)(o.__experimentalBoxControl,{label:Object(i.__)("Padding","beer-blocks"),allowReset:!0,resetValues:u,units:l,values:a,onChange:e=>n({[t]:e}),onChangeShowVisualizer:e=>n({[r]:{values:a,showValues:e}}),sides:c})},b=(e={})=>{const{top:t,right:r,bottom:s,left:i}=e;return{...t?{paddingTop:t}:{},...r?{paddingRight:r}:{},...s?{paddingBottom:s}:{},...i?{paddingLeft:i}:{}}},j=(e=["top","right","bottom","left"])=>({type:"object",default:Object.fromEntries(e.map(e=>[e,""]))}),M=({props:e,marginAttr:t="margin"})=>{const{setAttributes:r,attributes:{[t]:n}}=e,a=Object.entries(n).map(e=>e[0]),c=Object.fromEntries(a.map(e=>[e,""]));return Object(s.createElement)(o.__experimentalBoxControl,{label:Object(i.__)("Margin","beer-blocks"),allowReset:!0,resetValues:c,units:l,values:n,onChange:e=>r({margin:e}),sides:a})},w=(e={})=>{const{top:t,right:r,bottom:s,left:i}=e;return{...t?{marginTop:t}:{},...r?{marginRight:r}:{},...s?{marginBottom:s}:{},...i?{marginLeft:i}:{}}},L=(e,t="")=>{const r=Object(n.camelCase)(t+"-padding"),i=Object(n.camelCase)(t+"-visualizer"),o=Object(n.camelCase)(t+"-margin"),{attributes:{[r]:a,[o]:l}}=e;return Object(s.createElement)(s.Fragment,null,Object(n.isObjectLike)(a)?u({props:e,paddingAttr:r,visualizerAttr:i}):null,Object(n.isObjectLike)(l)?M({props:e,marginAttr:o}):null)};t.a={visualizerAttribute:()=>({type:"object",default:{values:{top:"",right:"",bottom:"",left:""},showValues:{top:!1,right:!1,bottom:!1,left:!1}}}),paddingAttribute:c,paddingControl:u,paddingStyles:b,marginAttribute:j,marginControl:M,marginStyles:w,attributes:({padding:e=["top","right","bottom","left"],margin:t=["top","right","bottom","left"]}={},r="")=>({...Object(n.isArray)(e)?{[Object(n.camelCase)(r+"-padding")]:c(e)}:{},...Object(n.isArray)(t)?{[Object(n.camelCase)(r+"-margin")]:j(t)}:{},...Object(n.isArray)(e)?{[Object(n.camelCase)(r+"-visualizer")]:{type:"object",default:{values:{top:"",right:"",bottom:"",left:""},showValues:{top:!1,right:!1,bottom:!1,left:!1}}}}:{}}),innerControls:L,controls:({props:e,initialOpen:t=!1,attrPrefixName:r=""})=>Object(s.createElement)(o.PanelBody,{title:Object(i.__)("Spacing","beer-blocks"),initialOpen:t},L(e,r)),styles:(e,t="")=>{const{[Object(n.camelCase)(t+"-padding")]:r,[Object(n.camelCase)(t+"-margin")]:s}=e;return{...Object(n.isObjectLike)(r)?b(r):{},...Object(n.isObjectLike)(s)?w(s):{}}},visualizer:(e,t,r="")=>{const{attributes:{[Object(n.camelCase)(r+"-visualizer")]:{values:i,showValues:o}}}=e;return Object(s.createElement)(a,{showValues:o,values:i},t)}}},8:function(e,t){e.exports=window.wp.blocks}});