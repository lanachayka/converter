(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={wrapper:"Converting_wrapper__1pTJj",select:"Converting_select__3lp0Z",inputBlock:"Converting_inputBlock__2kwPt",input:"Converting_input__1e5FB",equal:"Converting_equal__2Eed4",btn:"Converting_btn__1nTIp"}},,,function(e,t,n){e.exports={title:"Menu_title__3aHS-",line:"Menu_line__2iazS",navigation:"Menu_navigation__2ZEr4"}},function(e,t,n){e.exports={wrapper:"DateField_wrapper__3YQOS",text:"DateField_text__1IdhJ",clock:"DateField_clock__27CoR"}},,function(e,t,n){e.exports={link:"MenuLink_link__9mSRq",active:"MenuLink_active__3AIbU"}},,function(e,t,n){e.exports={select:"DropDownList_select__3fLOA"}},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(12),c=n.n(i),s=(n(18),n(19),n(8)),o=n.n(s),u=n(11),l=n.n(u),d=n(2),j=n(6),g=n(1),h=function(e){var t=Object(d.f)({path:Object(d.h)(e.way).pathname,end:!0});return Object(g.jsx)(j.b,{to:e.way,className:t?l.a.active:l.a.link,children:e.name})},x=function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:o.a.title,children:"Choose what you want to convert:"}),Object(g.jsxs)("nav",{className:o.a.navigation,children:[Object(g.jsx)(h,{way:"/converter/length",name:"Length"}),Object(g.jsx)(h,{way:"/converter/weight",name:"Weight"}),Object(g.jsx)(h,{way:"/converter/temperature",name:"Temperature"})]}),Object(g.jsx)("hr",{className:o.a.line})]})},p=function(e,t,n){switch(e){case"meters":return function(e,t){var n=parseInt(t);switch(e){case"kilometer":return(n/1e3).toString();case"feet":return(3.2808*n).toFixed(2).toString();case"yards":return(1.0936*n).toFixed(2).toString();case"miles":return(62137e-8*n).toFixed(4).toString();default:return t}}(t,n);case"kilometer":return function(e,t){var n=parseInt(t);switch(e){case"meter":return(1e3*n).toString();case"feet":return(3280.8*n).toFixed(2).toString();case"yards":return(1093.6*n).toFixed(2).toString();case"miles":return(.62137*n).toFixed(2).toString();default:return t}}(t,n);case"feet":return function(e,t){var n=parseInt(t);switch(e){case"meters":return(n/3.2808).toFixed(2).toString();case"kilometer":return(n/3280.8).toFixed(4).toString();case"yards":return(.33333*n).toFixed(2).toString();case"miles":return(18939e-8*n).toFixed(4).toString();default:return t}}(t,n);case"yards":return function(e,t){var n=parseInt(t);switch(e){case"meters":return(n/1.0936).toFixed(2).toString();case"kilometer":return(n/1093.6).toFixed(4).toString();case"feet":return(3*n).toString();case"miles":return(56818e-8*n).toFixed(4).toString();default:return t}}(t,n);case"miles":return function(e,t){var n=parseInt(t);switch(e){case"meters":return(n/62137e-8).toFixed(4).toString();case"kilometer":return(n/.62137).toFixed(4).toString();case"feet":return(5280*n).toString();case"yards":return(1760*n).toString();default:return t}}(t,n);default:return n}},f=["meters","kilometer","feet","yards","miles"],m=n(3),v=n(5),b=n.n(v),O=n(13),S=n.n(O),_=function(e){return Object(g.jsx)("select",{className:S.a.select,onChange:function(t){e.onSelectChange(t.target.value)},children:e.values.map((function(e,t){return Object(g.jsx)("option",{value:e,children:e},t)}))})},w=function(e){var t=Object(r.useState)(e.units[0]),n=Object(m.a)(t,2),a=n[0],i=n[1],c=Object(r.useState)(e.units[0]),s=Object(m.a)(c,2),o=s[0],u=s[1],l=Object(r.useState)(""),d=Object(m.a)(l,2),j=d[0],h=d[1],x=Object(r.useState)(""),p=Object(m.a)(x,2),f=p[0],v=p[1];return Object(g.jsxs)("div",{className:b.a.wrapper,children:[Object(g.jsxs)("div",{className:b.a.select,children:[Object(g.jsxs)("div",{className:b.a.inputBlock,children:[Object(g.jsx)("input",{placeholder:"Enter a value",className:b.a.input,onChange:function(e){h(e.target.value)}}),Object(g.jsx)(_,{onSelectChange:i,values:e.units})]}),Object(g.jsx)("p",{className:b.a.equal,children:"="}),Object(g.jsxs)("div",{className:b.a.inputBlock,children:[Object(g.jsx)("input",{className:b.a.input,defaultValue:f}),Object(g.jsx)(_,{onSelectChange:u,values:e.units})]})]}),Object(g.jsx)("button",{className:b.a.btn,onClick:function(){v(e.convertingMethod(a,o,j))},children:"\u0421onvert"})]})},F=function(){return Object(g.jsx)(w,{units:f,convertingMethod:p})},k=function(e,t,n){switch(e){case"kilograms":return function(e,t){var n=parseInt(t);switch(e){case"stones":return(.1574*n).toFixed(2).toString();case"pounds":return(2.2046*n).toFixed(2).toString();case"grams":return(1e3*n).toString();default:return t}}(t,n);case"grams":return function(e,t){var n=parseInt(t);switch(e){case"stones":return(15747e-8*n).toFixed(4).toString();case"pounds":return(.0022046*n).toFixed(4).toString();case"kilograms":return(n/1e3).toFixed(4).toString();default:return t}}(t,n);case"pounds":return function(e,t){var n=parseInt(t);switch(e){case"stones":return(.0071429*n).toFixed(4).toString();case"grams":return(n/.0022046).toFixed(4).toString();case"kilograms":return(n/2.2046).toFixed(2).toString();default:return t}}(t,n);case"stones":return function(e,t){var n=parseInt(t);switch(e){case"pounds":return(14*n).toString();case"grams":return(n/15747e-8).toFixed(4).toString();case"kilograms":return(n/.15747).toFixed(2).toString();default:return t}}(t,n);default:return n}},y=["kilograms","grams","pounds","stones"],I=function(){return Object(g.jsx)(w,{units:y,convertingMethod:k})},N=function(e,t,n){switch(e){case"fahrenheit":return function(e,t){var n=parseInt(t);switch(e){case"celsius":return((n-32)/1.8).toFixed(2).toString();case"kelvin":return((n-32)/1.8+273.15).toFixed(2).toString();default:return t}}(t,n);case"kelvin":return function(e,t){var n=parseInt(t);switch(e){case"celsius":return(n-273.15).toFixed(2).toString();case"fahrenheit":return(1.8*(n-273.15)+32).toFixed(2).toString();default:return t}}(t,n);case"celsius":return function(e,t){var n=parseInt(t);switch(e){case"kelvin":return(n+273.15).toFixed(2).toString();case"fahrenheit":return(1.8*n+32).toFixed(2).toString();default:return t}}(t,n);default:return n}},C=["fahrenheit","kelvin","celsius"],M=function(){return Object(g.jsx)(w,{units:C,convertingMethod:N})},D=n(9),L=n.n(D),B=function(){var e=Object(r.useState)((new Date).toLocaleTimeString()),t=Object(m.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){var e=setInterval((function(){return a((new Date).toLocaleTimeString())}),1e3);return function(){clearInterval(e)}}),[]),Object(g.jsxs)("div",{className:L.a.wrapper,children:[Object(g.jsx)("p",{className:L.a.text,children:(new Date).toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"})}),Object(g.jsx)("span",{className:L.a.clock,children:n})]})},T=function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(B,{}),Object(g.jsx)(x,{}),Object(g.jsxs)(d.c,{children:[Object(g.jsx)(d.a,{path:"/converter/length",element:Object(g.jsx)(F,{}),children:"Length"}),Object(g.jsx)(d.a,{path:"/converter/weight",element:Object(g.jsx)(I,{}),children:"Weight"}),Object(g.jsx)(d.a,{path:"/converter/temperature",element:Object(g.jsx)(M,{}),children:"Temperature"})]})]})};c.a.render(Object(g.jsx)(j.a,{children:Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(T,{})})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.fcd13848.chunk.js.map