(this["webpackJsonpreact-journal"]=this["webpackJsonpreact-journal"]||[]).push([[0],{68:function(e,t,c){},75:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(13),o=c.n(a),l=(c(68),c(11)),r=c(7),i=c(2),s=Object(n.createContext)(),j=function(e){var t=Object(n.useState)([]),c=Object(r.a)(t,2),a=c[0],o=c[1];return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todoStore"));e&&o(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem("todoStore",JSON.stringify(a))}),[a]),Object(i.jsx)("div",{children:Object(i.jsx)(s.Provider,{value:[a,o],children:e.children})})},b=c(114),u=c(120),d=Object(b.a)((function(e){return{input:{color:"#FFF"}}})),h=function(){var e=d(),t=Object(n.useContext)(s),c=Object(r.a)(t,2),a=c[0],o=c[1],j=Object(n.useState)(""),b=Object(r.a)(j,2),h=b[0],O=b[1],m=Object(n.useState)(""),x=Object(r.a)(m,2),f=x[0],p=x[1];return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault(),o([].concat(Object(l.a)(a),[{name:h,date:f,complete:!1}])),O("")},children:[Object(i.jsx)("input",{name:"date",value:f,onChange:function(e){return p(e.target.value)},type:"date",className:"col my-3 form-control bg-dark text-white",style:{width:"200px",float:"right"}}),Object(i.jsx)(u.a,{type:"text",name:"todos",id:"todos",value:h,onChange:function(e){return O(e.target.value.toLowerCase())},placeholder:"Type here...",color:"secondary",textColor:"white",multiline:!0,rows:4,required:!0,fullWidth:!0,inputProps:{className:e.input}}),Object(i.jsx)("button",{type:"submit",className:"mt-2 btn btn-dark",children:"Create to-do"})]})})},O=c(12),m=c(34),x=c(3),f=(c(75),c(122)),p=c(119),v=c(53),g=c.n(v),C=c(52),N=c.n(C),S=c(118),k=c(117),y=c(121),w=Object(n.createContext)(),E=function(e){var t=Object(n.useState)([]),c=Object(r.a)(t,2),a=c[0],o=c[1];return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("thoughtStore"));e&&o(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem("thoughtStore",JSON.stringify(a))}),[a]),Object(i.jsx)("div",{children:Object(i.jsx)(w.Provider,{value:[a,o],children:e.children})})},F=function(){var e=Object(n.useContext)(w),t=Object(r.a)(e,2),c=t[0],a=t[1],o=Object(n.useState)(""),s=Object(r.a)(o,2),j=s[0],b=s[1],d=Object(n.useState)(""),h=Object(r.a)(d,2),O=h[0],m=h[1];return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault(),a([].concat(Object(l.a)(c),[{name:j,date:O,complete:!1}])),b("")},children:[Object(i.jsx)("input",{name:"date",value:O,onChange:function(e){return m(e.target.value)},type:"date",className:"col my-3 form-control",style:{width:"200px",float:"right"}}),Object(i.jsx)(u.a,{type:"text",name:"todos",id:"todos",value:j,onChange:function(e){return b(e.target.value.toLowerCase())},placeholder:"Type here...",color:"secondary",textColor:"white",multiline:!0,rows:4,required:!0,fullWidth:!0}),Object(i.jsx)("button",{type:"submit",className:"mt-2 btn btn-dark",children:"Input thoughts"})]})})},L=function(e){var t=e.todo,c=e.id,a=e.checkComplete,o=e.handleEditTodos,l=Object(n.useState)(!1),s=Object(r.a)(l,2),j=s[0],b=s[1],u=Object(n.useState)(t.name),d=Object(r.a)(u,2),h=d[0],O=d[1];return j?Object(i.jsx)("div",{children:Object(i.jsxs)("li",{className:"border-light",children:[Object(i.jsx)("textarea",{type:"text",id:"editValue",name:"editValue",value:h,className:"form-control",onChange:function(e){return O(e.target.value.toLowerCase())}}),Object(i.jsx)("button",{onClick:function(){return function(e){b(!1),h?o(h,e):O(t.name)}(c)},className:"ms-3 btn btn-success",children:" Save "})]})}):Object(i.jsx)("div",{children:Object(i.jsxs)("li",{className:"border-light text-white",children:[Object(i.jsxs)("label",{htmlFor:c,className:t.complete?"active":"",children:[Object(i.jsx)("input",{type:"checkbox",id:c,checked:t.complete,onChange:function(){return a(c)}}),Object(i.jsx)("span",{className:"me-3",children:t.date}),t.name]}),Object(i.jsx)("button",{disabled:t.complete,onClick:function(){b(!0)},className:"ms-3 btn btn-warning",children:" Edit "})]})})},T=function(){var e=Object(n.useContext)(s),t=Object(r.a)(e,2),c=t[0],a=t[1],o=function(e){var t=Object(l.a)(c);t.forEach((function(t,c){c===e&&(t.complete=!t.complete)})),a(t)},j=function(e,t){var n=Object(l.a)(c);n.forEach((function(c,n){n===t&&(c.name=e)})),a(n)};return Object(i.jsx)("div",{className:"mt-5",children:Object(i.jsx)("ul",{children:c.map((function(e,t){return Object(i.jsx)(L,{todo:e,id:t,checkComplete:o,handleEditTodos:j},t)}))})})},J=function(){var e=Object(n.useContext)(w),t=Object(r.a)(e,2),c=t[0],a=t[1],o=function(e){var t=Object(l.a)(c);t.forEach((function(t,c){c===e&&(t.complete=!t.complete)})),a(t)},s=function(e,t){var n=Object(l.a)(c);n.forEach((function(c,n){n===t&&(c.name=e)})),a(n)};return Object(i.jsx)("div",{className:"mt-5",children:Object(i.jsx)("ul",{children:c.map((function(e,t){return Object(i.jsx)(L,{todo:e,id:t,checkComplete:o,handleEditTodos:s},t)}))})})},I=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],a=t[1],o=Object(n.useContext)(s),j=Object(r.a)(o,2),b=j[0],u=j[1];return Object(i.jsx)("div",{className:"Message text-white",children:0===b.length?Object(i.jsx)("h3",{children:"You have no task left"}):Object(i.jsxs)("div",{className:"row_",children:[Object(i.jsxs)("label",{htmlFor:"all",className:"",children:[Object(i.jsx)("input",{type:"checkbox",name:"all",id:"all",onClick:function(){var e=Object(l.a)(b);e.forEach((function(e){e.complete=!c})),u(e),a(!c)},checked:c}),"ALL"]}),Object(i.jsx)("p",{children:b.length<2?Object(i.jsxs)(i.Fragment,{children:["You have ",b.length," task"]}):Object(i.jsxs)(i.Fragment,{children:["You have ",b.length," tasks"]})}),Object(i.jsx)("button",{id:"delete",onClick:function(){var e=b.filter((function(e){return!1===e.complete}));u(e),a(!1)},className:"btn btn-danger",children:"Delete"})]})})},A=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],a=t[1],o=Object(n.useContext)(w),s=Object(r.a)(o,2),j=s[0],b=s[1];return Object(i.jsx)("div",{className:"Message",children:0===j.length?Object(i.jsx)("h3",{children:"Your thought journal is empty"}):Object(i.jsxs)("div",{className:"row_",children:[Object(i.jsxs)("label",{htmlFor:"all",className:"",children:[Object(i.jsx)("input",{type:"checkbox",name:"all",id:"all",onClick:function(){var e=Object(l.a)(j);e.forEach((function(e){e.complete=!c})),b(e),a(!c)},checked:c}),"ALL"]}),Object(i.jsx)("button",{id:"delete",onClick:function(){var e=j.filter((function(e){return!1===e.complete}));b(e),a(!1)},className:"btn btn-danger",children:"Delete"})]})})},D=["children","value","index"],P=Object(b.a)({root:{flexGrow:1,maxWidth:"100%",minHeight:"100%"}});function W(e){var t=e.children,c=e.value,n=e.index,a=Object(x.a)(e,D);return Object(i.jsx)("div",Object(m.a)(Object(m.a)({role:"tabpanel",hidden:c!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},a),{},{children:c===n&&Object(i.jsx)(y.a,{p:3,children:Object(i.jsx)(k.a,{children:t})})}))}function Y(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var q=function(){P();var e,t=Object(n.useState)(0),c=Object(r.a)(t,2),a=c[0],o=c[1];return Object(i.jsxs)("div",{className:"App-main bg-dark",children:[Object(i.jsx)(S.a,{position:"static",className:"bg-dark text-white",children:Object(i.jsxs)(f.a,(e={value:a,onChange:function(e,t){o(t)},"aria-label":"simple tabs example",variant:"fullWidth",indicatorColor:"secondary",textColor:"white"},Object(O.a)(e,"aria-label","icon label tabs example"),Object(O.a)(e,"children",[Object(i.jsx)(p.a,Object(m.a)({icon:Object(i.jsx)(N.a,{}),label:"Jocyll's To-do List"},Y(0))),Object(i.jsx)(p.a,Object(m.a)({icon:Object(i.jsx)(g.a,{}),label:"Jocyll's Thoughts"},Y(1)))]),e))}),Object(i.jsx)(W,{value:a,index:0,children:Object(i.jsx)(j,{children:Object(i.jsxs)("div",{className:"App-task p-5 shadow-lg",children:[Object(i.jsx)(h,{}),Object(i.jsx)(T,{}),Object(i.jsx)(I,{})]})})}),Object(i.jsx)(W,{value:a,index:1,children:Object(i.jsx)(E,{children:Object(i.jsxs)("div",{className:"App-thought p-5 shadow-lg",children:[Object(i.jsx)(F,{}),Object(i.jsx)(J,{}),Object(i.jsx)(A,{})]})})})]})};var B=function(){return Object(i.jsx)("div",{className:"d-flex flex-column",children:Object(i.jsx)(q,{})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,124)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,l=t.getTTFB;c(e),n(e),a(e),o(e),l(e)}))};o.a.render(Object(i.jsx)(B,{}),document.getElementById("root")),M()}},[[77,1,2]]]);
//# sourceMappingURL=main.2a55a494.chunk.js.map