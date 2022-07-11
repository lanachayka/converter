(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,function(e,t,n){e.exports={wrapperBackGr:"Converting_wrapperBackGr__1ule8",wrapper:"Converting_wrapper__1pTJj",select:"Converting_select__3lp0Z",inputBlock:"Converting_inputBlock__2kwPt",input:"Converting_input__1e5FB",equal:"Converting_equal__2Eed4",btn:"Converting_btn__1nTIp"}},,function(e,t,n){e.exports={wrapper:"DateField_wrapper__3YQOS"}},,function(e,t,n){e.exports={title:"Menu_title__3aHS-",navigation:"Menu_navigation__2ZEr4"}},function(e,t,n){e.exports={link:"MenuLink_link__9mSRq",active:"MenuLink_active__3AIbU"}},,function(e,t,n){e.exports={select:"DropDownList_select__3fLOA"}},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),i=n(8),s=n.n(i),c=(n(14),n(3)),u=(n(15),n(6)),o=n.n(u),l=n(7),d=n.n(l),p=n(0),g=function(e){return Object(p.jsx)("button",{onClick:function(){return e.setCurrentType(e.type)},className:e.active===e.type?d.a.active:d.a.link,children:e.type})},j=function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{className:o.a.title,children:"Choose what you want to convert:"}),Object(p.jsx)("div",{className:o.a.navigation,children:e.types.map((function(t,n){return Object(p.jsx)(g,{type:t,setCurrentType:e.setCurrentType,active:e.active},n)}))})]})},f=n(4),x=n.n(f),h=function(){var e=Object(r.useState)((new Date).toLocaleTimeString()),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){var e=setInterval((function(){return a((new Date).toLocaleTimeString())}),1e3);return function(){clearInterval(e)}}),[]),Object(p.jsxs)("div",{className:x.a.wrapper,children:[Object(p.jsx)("p",{className:x.a.text,children:(new Date).toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"})}),Object(p.jsx)("span",{className:x.a.clock,children:n})]})},v=n(2),m=n.n(v),S=n(9),b=n.n(S),O=function(e){return Object(p.jsx)("select",{className:b.a.select,onChange:function(t){e.onSelectChange(t.target.value)},children:e.values.map((function(e,t){return Object(p.jsx)("option",{value:e,children:e},t)}))})},_=function(e){var t=Object(r.useState)(e.units[0]),n=Object(c.a)(t,2),a=n[0],i=n[1],s=Object(r.useState)(e.units[0]),u=Object(c.a)(s,2),o=u[0],l=u[1],d=Object(r.useState)(""),g=Object(c.a)(d,2),j=g[0],f=g[1],x=Object(r.useState)(""),h=Object(c.a)(x,2),v=h[0],S=h[1];return Object(p.jsx)("div",{className:m.a.wrapperBackGr,children:Object(p.jsxs)("div",{className:m.a.wrapper,children:[Object(p.jsxs)("div",{className:m.a.select,children:[Object(p.jsxs)("div",{className:m.a.inputBlock,children:[Object(p.jsx)("input",{placeholder:"Enter a value",className:m.a.input,onChange:function(e){f(e.target.value)}}),Object(p.jsx)(O,{onSelectChange:i,values:e.units})]}),Object(p.jsx)("p",{className:m.a.equal,children:"="}),Object(p.jsxs)("div",{className:m.a.inputBlock,children:[Object(p.jsx)("input",{className:m.a.input,defaultValue:v}),Object(p.jsx)(O,{onSelectChange:l,values:e.units})]})]}),Object(p.jsx)("button",{className:m.a.btn,onClick:function(){S(e.convertingMethod(a,o,j))},children:"\u0421onvert"})]})})},w=function(e,t,n){switch(e){case"meters":return function(e,t){var n=parseInt(t);switch(e){case"kilometer":return(n/1e3).toString();case"feet":return(3.2808*n).toFixed(2).toString();case"yards":return(1.0936*n).toFixed(2).toString();case"miles":return(62137e-8*n).toFixed(4).toString();default:return t}}(t,n);case"kilometer":return function(e,t){var n=parseInt(t);switch(e){case"meters":return(1e3*n).toString();case"feet":return(3280.8*n).toFixed(2).toString();case"yards":return(1093.6*n).toFixed(2).toString();case"miles":return(.62137*n).toFixed(2).toString();default:return t}}(t,n);case"feet":return function(e,t){var n=parseInt(t);switch(e){case"meters":return(n/3.2808).toFixed(2).toString();case"kilometer":return(n/3280.8).toFixed(4).toString();case"yards":return(.33333*n).toFixed(2).toString();case"miles":return(18939e-8*n).toFixed(4).toString();default:return t}}(t,n);case"yards":return function(e,t){var n=parseInt(t);switch(e){case"meters":return(n/1.0936).toFixed(2).toString();case"kilometer":return(n/1093.6).toFixed(4).toString();case"feet":return(3*n).toString();case"miles":return(56818e-8*n).toFixed(4).toString();default:return t}}(t,n);case"miles":return function(e,t){var n=parseInt(t);switch(e){case"meters":return(n/62137e-8).toFixed(4).toString();case"kilometer":return(n/.62137).toFixed(4).toString();case"feet":return(5280*n).toString();case"yards":return(1760*n).toString();default:return t}}(t,n);default:return n}},k=["meters","kilometer","feet","yards","miles"],F=function(e,t,n){switch(e){case"kilograms":return function(e,t){var n=parseInt(t);switch(e){case"stones":return(.1574*n).toFixed(2).toString();case"pounds":return(2.2046*n).toFixed(2).toString();case"grams":return(1e3*n).toString();default:return t}}(t,n);case"grams":return function(e,t){var n=parseInt(t);switch(e){case"stones":return(15747e-8*n).toFixed(4).toString();case"pounds":return(.0022046*n).toFixed(4).toString();case"kilograms":return(n/1e3).toFixed(4).toString();default:return t}}(t,n);case"pounds":return function(e,t){var n=parseInt(t);switch(e){case"stones":return(.0071429*n).toFixed(4).toString();case"grams":return(n/.0022046).toFixed(4).toString();case"kilograms":return(n/2.2046).toFixed(2).toString();default:return t}}(t,n);case"stones":return function(e,t){var n=parseInt(t);switch(e){case"pounds":return(14*n).toString();case"grams":return(n/15747e-8).toFixed(4).toString();case"kilograms":return(n/.15747).toFixed(2).toString();default:return t}}(t,n);default:return n}},y=["kilograms","grams","pounds","stones"],C=function(e,t,n){switch(e){case"fahrenheit":return function(e,t){var n=parseInt(t);switch(e){case"celsius":return((n-32)/1.8).toFixed(2).toString();case"kelvin":return((n-32)/1.8+273.15).toFixed(2).toString();default:return t}}(t,n);case"kelvin":return function(e,t){var n=parseInt(t);switch(e){case"celsius":return(n-273.15).toFixed(2).toString();case"fahrenheit":return(1.8*(n-273.15)+32).toFixed(2).toString();default:return t}}(t,n);case"celsius":return function(e,t){var n=parseInt(t);switch(e){case"kelvin":return(n+273.15).toFixed(2).toString();case"fahrenheit":return(1.8*n+32).toFixed(2).toString();default:return t}}(t,n);default:return n}},I=["fahrenheit","kelvin","celsius"],N=function(){var e=Object(r.useState)("length"),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(h,{}),Object(p.jsx)(j,{types:["length","weight","temperature"],setCurrentType:a,active:n}),"length"===n&&Object(p.jsx)(_,{units:k,convertingMethod:w}),"weight"===n&&Object(p.jsx)(_,{units:y,convertingMethod:F}),"temperature"===n&&Object(p.jsx)(_,{units:I,convertingMethod:C})]})};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(N,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.236827e2.chunk.js.map