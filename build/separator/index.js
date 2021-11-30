(window.webpackJsonp_beer_blocks=window.webpackJsonp_beer_blocks||[]).push([[20],{49:function(e,t,r){}}]),function(e){function t(t){for(var a,l,i=t[0],c=t[1],s=t[2],u=0,d=[];u<i.length;u++)l=i[u],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&d.push(n[l][0]),n[l]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(b&&b(t);d.length;)d.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,i=1;i<r.length;i++){var c=r[i];0!==n[c]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=r[0]))}return e}var a={},n={19:0},o=[];function l(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=a,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(r,a,function(t){return e[t]}.bind(null,a));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window.webpackJsonp_beer_blocks=window.webpackJsonp_beer_blocks||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var b=c;o.push([55,20]),r()}({0:function(e,t){e.exports=window.React},1:function(e,t){e.exports=window.wp.element},2:function(e,t){e.exports=window.wp.i18n},3:function(e,t){e.exports=window.lodash},39:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return n}));const a=[...Object.entries({primary:"#007bff",secondary:"#6c757d",success:"#28a745",info:"#17a2b8",warning:"#ffc107",danger:"#dc3545",light:"#f8f9fa",dark:"#343a40"}).map(e=>({name:e[0],color:e[1]}))],n=[{value:"primary",label:"Primary"},{value:"secondary",label:"Secondary"},{value:"success",label:"Success"},{value:"danger",label:"Danger"},{value:"warning",label:"Warning"},{value:"info",label:"Info"},{value:"light",label:"Light"},{value:"dark",label:"Dark"}]},4:function(e,t){e.exports=window.wp.components},55:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r(2),o=r(8),l=(r(49),r(6)),i=r(4),c=e=>{switch(e){case"left":return{marginLeft:0,marginRight:"auto"};case"right":return{marginLeft:"auto",marginRight:0};case"center":default:return{marginLeft:"auto",marginRight:"auto"}}},s=r(7),b=[{value:"px",label:"PX"},{value:"em",label:"EM"},{value:"rem",label:"REM"},{value:"%",label:"%"}],u=r(39);const d=e=>{switch(e){case"em":case"rem":return"4"+e;case"px":case"%":return"100"+e;default:return 0}};r(0),Object(o.registerBlockType)("beer-blocks/separator",{apiVersion:2,title:Object(n._x)("Separator Line","block title","beer-blocks"),category:"beer-blocks",description:Object(n._x)("Create a separator line with custom color, width, height and margins.","block description","beer-blocks"),textdomain:"beer-blocks",icon:Object(a.createElement)("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDIuNjMgNTIuNTgiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojMDEwMTAxO30uY2xzLTJ7ZmlsbDojZWZhMTI2O308L3N0eWxlPjwvZGVmcz48ZyBpZD0iQ2FwYV8yIiBkYXRhLW5hbWU9IkNhcGEgMiI+PGcgaWQ9IkNhcGFfMS0yIiBkYXRhLW5hbWU9IkNhcGEgMSI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTAwLjUsMjguMzZIMi4xNGEyLjE0LDIuMTQsMCwwLDEsMC00LjI4SDEwMC41YTIuMTQsMi4xNCwwLDAsMSwwLDQuMjhaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNDkuOSwzNS4yNWEyLDIsMCwwLDEsMy40MiwxLjQydjkuMDdMNTYsNDNhMiwyLDAsMCwxLDIuODQsMi44M0w1Mi43Myw1MmEyLDIsMCwwLDEtLjg0LjVoMGEyLjA4LDIuMDgsMCwwLDEtMS4yMSwwQTEuOTIsMS45MiwwLDAsMSw0OS45LDUybC02LjE0LTYuMTVBMiwyLDAsMSwxLDQ2LjU5LDQzbDIuNzIsMi43MlYzNi42NmEyLDIsMCwwLDEsLjU5LTEuNDFaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNDkuOSwxNy4zMmEyLDIsMCwwLDAsMy40Mi0xLjQyVjYuODNMNTYsOS41NmEyLDIsMCwxLDAsMi44NC0yLjg0TDUyLjczLjU4aDBhMiwyLDAsMCwwLS44NC0uNWgwYTIuMDgsMi4wOCwwLDAsMC0xLjIxLDAsMi4xNywyLjE3LDAsMCwwLS43OC40OEw0My43Niw2LjczYTIsMiwwLDEsMCwyLjgzLDIuODNsMi43Mi0yLjczdjkuMDhhMiwyLDAsMCwwLC41OSwxLjQxWiIvPjwvZz48L2c+PC9zdmc+",alt:Object(n._x)("Separator Line","block title","beer-blocks")}),attributes:{height:{type:"number",default:1},widthUnit:{type:"string",default:"px"},width:{type:"string",default:d("px")},color:{type:"string",default:"#000"},align:{type:"string",default:"left"},arrow:{type:"object",default:{width:0,background:"#fff"}},...s.a.attributes({padding:!1})},edit:e=>{const{attributes:{height:t,widthUnit:r,width:o,color:g,align:p,arrow:m},setAttributes:w}=e,h=Object(l.useBlockProps)({style:{height:t,width:o,backgroundColor:g,...c(p),...s.a.styles(e.attributes)}}),j=Math.sqrt(Math.pow(parseFloat(o.replace(/px|rem|em|%/,"")),2)/2);return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(l.InspectorControls,null,Object(a.createElement)(i.PanelBody,{title:Object(n.__)("Dimensions","beer-blocks")},Object(a.createElement)("div",{style:{paddingBottom:"20px"}},Object(a.createElement)(i.RangeControl,{label:Object(n.__)("Height","beer-blocks"),value:t,onChange:e=>w({height:e}),min:1,max:10,step:1,style:{paddingBottom:0,marginBottom:0}})),Object(a.createElement)(i.__experimentalUnitControl,{label:Object(n.sprintf)(Object(n.__)("Width (%s)","beer-blocks"),r),value:o,onChange:e=>w({width:e}),onUnitChange:e=>w({widthUnit:e,width:d(e)}),units:b,style:{paddingBottom:0,marginBottom:0}})),Object(a.createElement)(i.PanelBody,{title:Object(n.__)("Color","beer-blocks")},Object(a.createElement)(i.__experimentalText,{as:"label",variant:"label",style:{marginBottom:"10px",display:"block",fontSize:"unset",fontWeight:"unset",display:"flex",alignItems:"center"}},Object(n.__)("Background color","beer-blocks")," ",Object(a.createElement)(i.ColorIndicator,{colorValue:g})),Object(a.createElement)(i.ColorPalette,{colors:u.b,value:g,onChange:e=>w({color:e})})),Object(a.createElement)(i.PanelBody,{title:Object(n.__)("Triangle","beer-blocks")},Object(a.createElement)(i.RangeControl,{label:Object(n.__)("Width","beer-blocks"),value:m.width,onChange:e=>w({arrow:{...m,width:e}}),min:0,max:j,step:1,style:{paddingBottom:0,marginBottom:0}}),Object(a.createElement)(i.__experimentalText,{as:"label",variant:"label",style:{marginBottom:"10px",display:"block",fontSize:"unset",fontWeight:"unset",display:"flex",alignItems:"center"}},Object(n.__)("Background color","beer-blocks")," ",Object(a.createElement)(i.ColorIndicator,{colorValue:m.background})),Object(a.createElement)(i.ColorPalette,{colors:u.b,value:g,onChange:e=>w({arrow:{...m,background:e}})})),s.a.controls({props:e})),Object(a.createElement)(l.BlockControls,null,Object(a.createElement)(l.BlockAlignmentToolbar,{value:p,onChange:e=>w({align:e})})),Object(a.createElement)("div",h,m.width>0&&Object(a.createElement)("div",{className:"wp-beer-blocks-separator-triangle",style:{width:m.width+"px",height:m.width+"px",backgroundColor:m.background,"--wp-block-beer-blocks-separator-triangle-translate":`-${(m.width-t)/2}px`,"--wp-block-beer-blocks-separator-triangle-color":g,"--wp-block-beer-blocks-separator-triangle-border-width":t+"px"}})))},save:e=>{const{attributes:{height:t,width:r,color:n,align:o,arrow:i}}=e,b=l.useBlockProps.save({style:{height:t,width:r,backgroundColor:n,...c(o),...s.a.styles(e.attributes)}});return Object(a.createElement)("div",b,i.width>0&&Object(a.createElement)("div",{className:"wp-beer-blocks-separator-triangle",style:{width:i.width+"px",height:i.width+"px",backgroundColor:i.background,"--wp-block-beer-blocks-separator-triangle-translate":`-${(i.width-1)/2}px`,"--wp-block-beer-blocks-separator-triangle-color":n}}))}})},6:function(e,t){e.exports=window.wp.blockEditor},7:function(e,t,r){"use strict";var a=r(1),n=r(2),o=r(4),l=r(3);const{__Visualizer:i}=o.__experimentalBoxControl,c=[{value:"px",label:"PX"},{value:"em",label:"EM"},{value:"rem",label:"REM"}],s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["top","right","bottom","left"];const t=Object.fromEntries(e.map(e=>[e,""]));return{type:"object",default:t}},b=function(){let{props:e,paddingAttr:t="padding",visualizerAttr:r="visualizer"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{setAttributes:l,attributes:{[t]:i}}=e,s=Object.entries(i).map(e=>e[0]),b=Object.fromEntries(s.map(e=>[e,""]));return Object(a.createElement)(o.__experimentalBoxControl,{label:Object(n.__)("Padding","beer-blocks"),allowReset:!0,resetValues:b,units:c,values:i,onChange:e=>l({[t]:e}),onChangeShowVisualizer:e=>l({[r]:{values:i,showValues:e}}),sides:s})},u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{top:t,right:r,bottom:a,left:n}=e;return{...t?{paddingTop:t}:{},...r?{paddingRight:r}:{},...a?{paddingBottom:a}:{},...n?{paddingLeft:n}:{}}},d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["top","right","bottom","left"];const t=Object.fromEntries(e.map(e=>[e,""]));return{type:"object",default:t}},g=e=>{let{props:t,marginAttr:r="margin"}=e;const{setAttributes:l,attributes:{[r]:i}}=t,s=Object.entries(i).map(e=>e[0]),b=Object.fromEntries(s.map(e=>[e,""]));return Object(a.createElement)(o.__experimentalBoxControl,{label:Object(n.__)("Margin","beer-blocks"),allowReset:!0,resetValues:b,units:c,values:i,onChange:e=>l({margin:e}),sides:s})},p=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{top:t,right:r,bottom:a,left:n}=e;return{...t?{marginTop:t}:{},...r?{marginRight:r}:{},...a?{marginBottom:a}:{},...n?{marginLeft:n}:{}}},m=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const r=Object(l.camelCase)(t+"-padding"),n=Object(l.camelCase)(t+"-visualizer"),o=Object(l.camelCase)(t+"-margin"),{attributes:{[r]:i,[o]:c}}=e;return Object(a.createElement)(a.Fragment,null,Object(l.isObjectLike)(i)?b({props:e,paddingAttr:r,visualizerAttr:n}):null,Object(l.isObjectLike)(c)?g({props:e,marginAttr:o}):null)};t.a={visualizerAttribute:()=>({type:"object",default:{values:{top:"",right:"",bottom:"",left:""},showValues:{top:!1,right:!1,bottom:!1,left:!1}}}),paddingAttribute:s,paddingControl:b,paddingStyles:u,marginAttribute:d,marginControl:g,marginStyles:p,attributes:function(){let{padding:e=["top","right","bottom","left"],margin:t=["top","right","bottom","left"]}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return{...Object(l.isArray)(e)?{[Object(l.camelCase)(r+"-padding")]:s(e)}:{},...Object(l.isArray)(t)?{[Object(l.camelCase)(r+"-margin")]:d(t)}:{},...Object(l.isArray)(e)?{[Object(l.camelCase)(r+"-visualizer")]:{type:"object",default:{values:{top:"",right:"",bottom:"",left:""},showValues:{top:!1,right:!1,bottom:!1,left:!1}}}}:{}}},innerControls:m,controls:e=>{let{props:t,initialOpen:r=!1,attrPrefixName:l=""}=e;return Object(a.createElement)(o.PanelBody,{title:Object(n.__)("Spacing","beer-blocks"),initialOpen:r},m(t,l))},styles:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const{[Object(l.camelCase)(t+"-padding")]:r,[Object(l.camelCase)(t+"-margin")]:a}=e;return{...Object(l.isObjectLike)(r)?u(r):{},...Object(l.isObjectLike)(a)?p(a):{}}},visualizer:function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const{attributes:{[Object(l.camelCase)(r+"-visualizer")]:{values:n,showValues:o}}}=e;return Object(a.createElement)(i,{showValues:o,values:n},t)}}},8:function(e,t){e.exports=window.wp.blocks}});