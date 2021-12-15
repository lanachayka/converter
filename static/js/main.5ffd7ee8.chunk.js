(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,function(e,t,n){e.exports={wrapper:"Converting_wrapper__1pTJj",select:"Converting_select__3lp0Z",inputBlock:"Converting_inputBlock__2kwPt",input:"Converting_input__1e5FB",equal:"Converting_equal__2Eed4",btn:"Converting_btn__1nTIp"}},function(e,t,n){e.exports={title:"Menu_title__3aHS-",line:"Menu_line__2iazS",navigation:"Menu_navigation__2ZEr4"}},function(e,t,n){e.exports={wrapper:"DateField_wrapper__3YQOS",text:"DateField_text__1IdhJ",clock:"DateField_clock__27CoR"}},,function(e,t,n){e.exports={link:"MenuLink_link__9mSRq",active:"MenuLink_active__3AIbU"}},,function(e,t,n){e.exports={select:"DropDownList_select__3fLOA"}},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),i=n(8),s=n.n(i),c=(n(14),n(2)),o=(n(15),n(4)),u=n.n(o),l=n(7),d=n.n(l),g=n(0),p=function(e){return Object(g.jsx)("button",{onClick:function(){return e.setCurrentType(e.type)},className:e.active===e.type?d.a.active:d.a.link,children:e.type})},j=function(e){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:u.a.title,children:"Choose what you want to convert:"}),Object(g.jsx)("div",{className:u.a.navigation,children:e.types.map((function(t,n){return Object(g.jsx)(p,{type:t,setCurrentType:e.setCurrentType,active:e.active},n)}))}),Object(g.jsx)("hr",{className:u.a.line})]})},f=n(5),x=n.n(f),h=function(){var e=Object(r.useState)((new Date).toLocaleTimeString()),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){var e=setInterval((function(){return a((new Date).toLocaleTimeString())}),1e3);return function(){clearInterval(e)}}),[]),Object(g.jsxs)("div",{className:x.a.wrapper,children:[Object(g.jsx)("p",{className:x.a.text,children:(new Date).toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"})}),Object(g.jsx)("span",{className:x.a.clock,children:n})]})},v=n(3),m=n.n(v),S=n(9),b=n.n(S),_=function(e){return Object(g.jsx)("select",{className:b.a.select,onChange:function(t){e.onSelectChange(t.target.value)},children:e.values.map((function(e,t){return Object(g.jsx)("option",{value:e,children:e},t)}))})},O=function(e){var t=Object(r.useState)(e.units[0]),n=Object(c.a)(t,2),a=n[0],i=n[1],s=Object(r.useState)(e.units[0]),o=Object(c.a)(s,2),u=o[0],l=o[1],d=Object(r.useState)(""),p=Object(c.a)(d,2),j=p[0],f=p[1],x=Object(r.useState)(""),h=Object(c.a)(x,2),v=h[0],S=h[1];return Object(g.jsxs)("div",{className:m.a.wrapper,children:[Object(g.jsxs)("div",{className:m.a.select,children:[Object(g.jsxs)("div",{className:m.a.inputBlock,children:[Object(g.jsx)("input",{placeholder:"Enter a value",className:m.a.input,onChange:function(e){f(e.target.value)}}),Object(g.jsx)(_,{onSelectChange:i,values:e.units})]}),Object(g.jsx)("p",{className:m.a.equal,children:"="}),Object(g.jsxs)("div",{className:m.a.inputBlock,children:[Object(g.jsx)("input",{className:m.a.input,defaultValue:v}),Object(g.jsx)(_,{onSelectChange:l,values:e.units})]})]}),Object(g.jsx)("button",{className:m.a.btn,onClick:function(){S(e.convertingMethod(a,u,j))},children:"\u0421onvert"})]})},F=function(e,t,n){switch(e){case"meters":return function(e,t){var n=parseInt(t);switch(e){case"kilometer":return(n/1e3).toString();case"feet":return(3.2808*n).toFixed(2).toString();case"yards":return(1.0936*n).toFixed(2).toString();case"miles":return(62137e-8*n).toFixed(4).toString();default:return t}}(t,n);case"kilometer":return function(e,t){var n=parseInt(t);switch(e){case"meter":return(1e3*n).toString();case"feet":return(3280.8*n).toFixed(2).toString();case"yards":return(1093.6*n).toFixed(2).toString();case"miles":return(.62137*n).toFixed(2).toString();default:return t}}(t,n);case"feet":return function(e,t){var n=parseInt(t);switch(e){case"meters":return(n/3.2808).toFixed(2).toString();case"kilometer":return(n/3280.8).toFixed(4).toString();case"yards":return(.33333*n).toFixed(2).toString();case"miles":return(18939e-8*n).toFixed(4).toString();default:return t}}(t,n);case"yards":return function(e,t){var n=parseInt(t);switch(e){case"meters":return(n/1.0936).toFixed(2).toString();case"kilometer":return(n/1093.6).toFixed(4).toString();case"feet":return(3*n).toString();case"miles":return(56818e-8*n).toFixed(4).toString();default:return t}}(t,n);case"miles":return function(e,t){var n=parseInt(t);switch(e){case"meters":return(n/62137e-8).toFixed(4).toString();case"kilometer":return(n/.62137).toFixed(4).toString();case"feet":return(5280*n).toString();case"yards":return(1760*n).toString();default:return t}}(t,n);default:return n}},w=["meters","kilometer","feet","yards","miles"],k=function(e,t,n){switch(e){case"kilograms":return function(e,t){var n=parseInt(t);switch(e){case"stones":return(.1574*n).toFixed(2).toString();case"pounds":return(2.2046*n).toFixed(2).toString();case"grams":return(1e3*n).toString();default:return t}}(t,n);case"grams":return function(e,t){var n=parseInt(t);switch(e){case"stones":return(15747e-8*n).toFixed(4).toString();case"pounds":return(.0022046*n).toFixed(4).toString();case"kilograms":return(n/1e3).toFixed(4).toString();default:return t}}(t,n);case"pounds":return function(e,t){var n=parseInt(t);switch(e){case"stones":return(.0071429*n).toFixed(4).toString();case"grams":return(n/.0022046).toFixed(4).toString();case"kilograms":return(n/2.2046).toFixed(2).toString();default:return t}}(t,n);case"stones":return function(e,t){var n=parseInt(t);switch(e){case"pounds":return(14*n).toString();case"grams":return(n/15747e-8).toFixed(4).toString();case"kilograms":return(n/.15747).toFixed(2).toString();default:return t}}(t,n);default:return n}},y=["kilograms","grams","pounds","stones"],C=function(e,t,n){switch(e){case"fahrenheit":return function(e,t){var n=parseInt(t);switch(e){case"celsius":return((n-32)/1.8).toFixed(2).toString();case"kelvin":return((n-32)/1.8+273.15).toFixed(2).toString();default:return t}}(t,n);case"kelvin":return function(e,t){var n=parseInt(t);switch(e){case"celsius":return(n-273.15).toFixed(2).toString();case"fahrenheit":return(1.8*(n-273.15)+32).toFixed(2).toString();default:return t}}(t,n);case"celsius":return function(e,t){var n=parseInt(t);switch(e){case"kelvin":return(n+273.15).toFixed(2).toString();case"fahrenheit":return(1.8*n+32).toFixed(2).toString();default:return t}}(t,n);default:return n}},I=["fahrenheit","kelvin","celsius"],N=function(){var e=Object(r.useState)("length"),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(h,{}),Object(g.jsx)(j,{types:["length","weight","temperature"],setCurrentType:a,active:n}),Object(g.jsx)(O,{units:"length"===n?w:"weight"===n?y:I,convertingMethod:"length"===n?F:"weight"===n?k:C})]})};s.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(N,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.5ffd7ee8.chunk.js.map