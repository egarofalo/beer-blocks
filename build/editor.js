!function(e){var t={};function s(L){if(t[L])return t[L].exports;var M=t[L]={i:L,l:!1,exports:{}};return e[L].call(M.exports,M,M.exports,s),M.l=!0,M.exports}s.m=e,s.c=t,s.d=function(e,t,L){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:L})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var L=Object.create(null);if(s.r(L),Object.defineProperty(L,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var M in e)s.d(L,M,function(t){return e[t]}.bind(null,M));return L},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=55)}({0:function(e,t){e.exports=window.React},1:function(e,t){e.exports=window.wp.element},11:function(e,t,s){"use strict";s.d(t,"a",(function(){return L})),s.d(t,"b",(function(){return M}));const L={SET_SELECTED_FONTS:"beer_blocks_set_selected_fonts",SET_SELECTED_FONTS_LOADING:"beer_blocks_set_selected_fonts_loading",SET_SELECTED_FONTS_ERROR:"beer_blocks_set_selected_fonts_error",SET_UPDATE_SELECTED_FONTS_LOADING:"beer_blocks_set_update_selected_fonts_loading",SET_UPDATE_SELECTED_FONTS_ERROR:"beer_blocks_set_update_selected_fonts_error"},M="beer-blocks/data"},2:function(e,t){e.exports=window.wp.i18n},45:function(e,t){e.exports=window.wp.dataControls},55:function(e,t,s){"use strict";s.r(t);var L={};s.r(L),s.d(L,"selectedFonts",(function(){return c})),s.d(L,"selectedFontsLoading",(function(){return D})),s.d(L,"selectedFontsError",(function(){return u})),s.d(L,"updateSelectedFontsLoading",(function(){return i})),s.d(L,"updateSelectedFontsError",(function(){return S}));var M={};s.r(M),s.d(M,"setSelectedFonts",(function(){return E})),s.d(M,"setSelectedFontsLoading",(function(){return j})),s.d(M,"setSelectedFontsError",(function(){return d})),s.d(M,"setUpdateSelectedFontsLoading",(function(){return T})),s.d(M,"setUpdateSelectedFontsError",(function(){return a})),s.d(M,"updateSelectedFonts",(function(){return l}));var o={};s.r(o),s.d(o,"selectedFonts",(function(){return x}));var n=s(1),w=s(9),r=s(45);const c=e=>e.googleFonts.selectedFonts,D=e=>e.googleFonts.selectedFontsLoading,u=e=>e.googleFonts.selectedFontsError,i=e=>e.googleFonts.updateSelectedFontsLoading,S=e=>e.googleFonts.updateSelectedFontsError;s(2);var N=s(11);const E=e=>{const t=e.reduce((e,t)=>(e.find(e=>e.family===t.family)||e.push(t),e),[]);return{type:N.a.SET_SELECTED_FONTS,selectedFonts:t}},j=e=>({type:N.a.SET_SELECTED_FONTS_LOADING,loading:e}),d=e=>({type:N.a.SET_SELECTED_FONTS_ERROR,error:e}),T=e=>({type:N.a.SET_UPDATE_SELECTED_FONTS_LOADING,loading:e}),a=e=>({type:N.a.SET_UPDATE_SELECTED_FONTS_ERROR,error:e});function*l(e){Object(w.dispatch)(N.b).setUpdateSelectedFontsLoading(!0),Object(w.dispatch)(N.b).setUpdateSelectedFontsError(null);try{return Object(w.dispatch)(N.b).setSelectedFonts(e),yield Object(w.dispatch)("core/editor","editPost",{meta:{_beer_blocks_selected_fonts:Object(w.select)(N.b).selectedFonts()}}),T(!1)}catch(e){return Object(w.dispatch)(N.b).setUpdateSelectedFontsError(e),T(!1)}}var C={FETCH:({path:e,options:t})=>new Promise((s,L)=>window.fetch(e,t).then(e=>e.json()).then(e=>s(e)).catch(e=>L(e)))};function*x(){Object(w.dispatch)(N.b).setSelectedFontsLoading(!0),Object(w.dispatch)(N.b).setSelectedFontsError(null);try{if(Object(w.select)("core/editor")){const{meta:{_beer_blocks_selected_fonts:e}}=yield Object(r.select)("core/editor","getCurrentPost");return Object(w.dispatch)(N.b).setSelectedFontsLoading(!1),E(e)}return Object(w.dispatch)(N.b).setSelectedFontsLoading(!1),E([])}catch(e){return Object(w.dispatch)(N.b).setSelectedFontsLoading(!1),d(e)}}const O={googleFonts:{selectedFonts:void 0,selectedFontsLoading:!1,selectedFontsError:void 0,updateSelectedFontsLoading:!1,updateSelectedFontsError:void 0}};Object(w.registerStore)(N.b,{selectors:L,actions:M,resolvers:o,reducer:(e=O,t)=>{switch(t.type){case N.a.SET_SELECTED_FONTS:return{...e,googleFonts:{...e.googleFonts,selectedFonts:t.selectedFonts}};case N.a.SET_SELECTED_FONTS_LOADING:return{...e,googleFonts:{...e.googleFonts,selectedFontsLoading:t.loading}};case N.a.SET_SELECTED_FONTS_ERROR:return{...e,googleFonts:{...e.googleFonts,selectedFontsError:t.error}};case N.a.SET_UPDATE_SELECTED_FONTS_LOADING:return{...e,googleFonts:{...e.googleFonts,updateSelectedFontsLoading:t.loading}};case N.a.SET_UPDATE_SELECTED_FONTS_ERROR:return{...e,googleFonts:{...e.googleFonts,updateSelectedFontsError:t.error}};default:return e}},controls:{...r.controls,...C}}),s(0),wp.blocks.updateCategory("beer-blocks",{icon:Object(n.createElement)("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3OS4wMSA5Ny45NyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmNmEzMjg7fS5jbHMtMntmaWxsOm5vbmU7fS5jbHMtM3tmaWxsOiMxZDFkMWI7fS5jbHMtNHtmaWxsOiNmZmY7fS5jbHMtNXtmaWxsOiNmM2Y0ZDI7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJDYXBhXzIiIGRhdGEtbmFtZT0iQ2FwYSAyIj48ZyBpZD0iQ2FwYV8xLTIiIGRhdGEtbmFtZT0iQ2FwYSAxIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xOC4zLDk4QTEwLjE4LDEwLjE4LDAsMCwxLDguMTMsODcuOHYtLjM2YTEwLjE4LDEwLjE4LDAsMCwxLDcuNzMtOS44N2wuOTEtMTMuNzVBMTkuNDIsMTkuNDIsMCwwLDEsMCw0NC42LDE5LjIyLDE5LjIyLDAsMCwxLDYuNjUsMzBhMTEuMSwxMS4xLDAsMCwxLS4yOC0yLjUxLDExLjUxLDExLjUxLDAsMCwxLDYuMjUtMTAuMjMsMTQuMDUsMTQuMDUsMCwwLDEtLjA5LTEuNzIsMTUuNTIsMTUuNTIsMCwwLDEsMjktNy43OCwxMS4xMSwxMS4xMSwwLDAsMSwxLjgzLS4xNSwxMS41LDExLjUsMCwwLDEsNy43OSwzLjA2LDEyLjE4LDEyLjE4LDAsMCwxLDIuMjYtLjIxQTExLjg5LDExLjg5LDAsMCwxLDY0LjkzLDI1LjEyTDY1LjM5LDMyaDMuNDVBMTAuMTgsMTAuMTgsMCwwLDEsNzksNDIuMlY2MC41NUExMC4xOCwxMC4xOCwwLDAsMSw2OC44NCw3MC43Mkg2OGwuNDYsNi45MmExMC4xOSwxMC4xOSwwLDAsMSw3LjQ1LDkuOHYuMzZBMTAuMTgsMTAuMTgsMCwwLDEsNjUuNyw5OFoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik02OC44NCwzNy4xMkg2MC42M0w1OS44LDI0LjU3YTYuOCw2LjgsMCwwLDAtNi40My05LDYuNzQsNi43NCwwLDAsMC00LDEuMzUsNi40MSw2LjQxLDAsMCwwLTEwLjg2LTIsMTAuNDQsMTAuNDQsMCwxLDAtMTkuMTYsNi4zMiw2LjgzLDYuODMsMCwwLDAtMS40NC0uMTYsNi40LDYuNCwwLDAsMC00Ljc2LDEwLjY5QTE0LjMsMTQuMywwLDAsMCwxOS40LDU4LjkxYTEzLjc0LDEzLjc0LDAsMCwwLDIuODEtLjI4bDAsLjI4TDIwLjY0LDgyLjM2SDE4LjNhNS4wOCw1LjA4LDAsMCwwLTUuMDksNS4wOHYuMzZhNS4wOSw1LjA5LDAsMCwwLDUuMDksNS4wOUg2NS43YTUuMDksNS4wOSwwLDAsMCw1LjA5LTUuMDl2LS4zNmE1LjA4LDUuMDgsMCwwLDAtNS4wOS01LjA4SDYzLjYzTDYyLjUyLDY1LjY0aDYuMzJhNS4wOCw1LjA4LDAsMCwwLDUuMDgtNS4wOVY0Mi4yQTUuMDcsNS4wNywwLDAsMCw2OC44NCwzNy4xMloiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik02OC44NCw2Ny42N0g1Ny43N1Y2My42SDY4Ljg0YTMuMDYsMy4wNiwwLDAsMCwzLTMuMDVWNDIuMmEzLjA2LDMuMDYsMCwwLDAtMy0zLjA1SDU1LjE2VjM1LjA4SDY4Ljg0QTcuMTQsNy4xNCwwLDAsMSw3Niw0Mi4yVjYwLjU1QTcuMTMsNy4xMywwLDAsMSw2OC44NCw2Ny42N1oiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik02My42Myw4Mi4zNmgtNDNsMS41NS0yMy40NWgwYTIzLDIzLDAsMCwxLDguNTctNC4yMiwyOS42OSwyOS42OSwwLDAsMSwxMS4zNS0uNzdjMTIuNTMsMS40OCwxOC41LTEzLjU3LDE4LjY3LTE0aDBaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNjAuODIsMzkuODhoMGMtLjE3LjQ1LTYuMTQsMTUuNS0xOC42NywxNGEyOS42OSwyOS42OSwwLDAsMC0xMS4zNS43NywyMywyMywwLDAsMC04LjU3LDQuMjJoMGwyLjUyLTM3Ljg0SDU5LjU2WiIvPjxyZWN0IGNsYXNzPSJjbHMtMyIgeD0iMTMuMjEiIHk9IjgyLjM2IiB3aWR0aD0iNTcuNTciIGhlaWdodD0iMTAuNTMiIHJ4PSI1LjA5Ii8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMzMuNzEsNDQuNkExNC4zMSwxNC4zMSwwLDEsMSwxOS40LDMwLjMsMTQuMzEsMTQuMzEsMCwwLDEsMzMuNzEsNDQuNloiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0yNC4yOCwyNy40OGE2LjQxLDYuNDEsMCwxLDEtNi40MS02LjQxQTYuNDEsNi40MSwwLDAsMSwyNC4yOCwyNy40OFoiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik00OS43MywxOS4xYTYuNDEsNi40MSwwLDEsMS02LjQxLTYuNDFBNi40MSw2LjQxLDAsMCwxLDQ5LjczLDE5LjFaIi8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNNjAuMTgsMjIuMzRhNi44MSw2LjgxLDAsMSwxLTYuODEtNi44MUE2LjgxLDYuODEsMCwwLDEsNjAuMTgsMjIuMzRaIi8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNNDcuNTQsMjYuNjVBNy41NSw3LjU1LDAsMSwxLDQwLDE5LjEsNy41NSw3LjU1LDAsMCwxLDQ3LjU0LDI2LjY1WiIvPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTM1LjI1LDMwLjNhNy4xOSw3LjE5LDAsMSwxLTcuMTktNy4xOUE3LjE5LDcuMTksMCwwLDEsMzUuMjUsMzAuM1oiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0zOC41MSwxNS41M0ExMC40NSwxMC40NSwwLDEsMSwyOC4wNiw1LjA5LDEwLjQ1LDEwLjQ1LDAsMCwxLDM4LjUxLDE1LjUzWiIvPjxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTQ2LjU3LDY2LjI3YTQsNCwwLDEsMS00LTRBNCw0LDAsMCwxLDQ2LjU3LDY2LjI3WiIvPjxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTUzLjczLDUyLjMyYTMuMSwzLjEsMCwxLDEtMy4xLTMuMDlBMy4xLDMuMSwwLDAsMSw1My43Myw1Mi4zMloiLz48cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Ik00Mi41LDQyLjg2YTEuNzQsMS43NCwwLDEsMS0xLjc0LTEuNzRBMS43NCwxLjc0LDAsMCwxLDQyLjUsNDIuODZaIi8+PC9nPjwvZz48L3N2Zz4=",alt:"Beer Blocks",style:{width:"25px",height:"auto"}})})},9:function(e,t){e.exports=window.wp.data}});