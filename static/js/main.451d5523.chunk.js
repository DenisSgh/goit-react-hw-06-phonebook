(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={title:"Section_title__3t8-Q"}},16:function(t,e,n){t.exports={form:"Form_form__4eV3X",button:"Form_button__2wvc_"}},17:function(t,e,n){t.exports={label:"Filter_label__FcRKz",input:"Filter_input__2NBAn"}},38:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var c,a,r=n(0),o=n.n(r),i=n(9),s=n.n(i),l=n(3),u=n(2),b=n(4),j=n(11),d=n(19),m=n(7),O=n.n(m),f=Object(b.b)("contacts/add",(function(t){var e=t.name,n=t.number;return{payload:{id:O.a.generate(),name:e,number:n}}})),h=Object(b.b)("contacts/delete"),p=Object(b.b)("contacts/filter"),_=Object(b.c)(null!==(c=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==c?c:[],(a={},Object(j.a)(a,f,(function(t,e){var n=e.payload;return[].concat(Object(d.a)(t),[n])})),Object(j.a)(a,h,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),x=Object(b.c)("",Object(j.a)({},p,(function(t,e){return e.payload}))),v=Object(u.b)({items:_,filter:x}),g=Object(u.b)({contacts:v}),N=Object(b.a)({reducer:g}),y=n(18),C=function(t){return t.contacts.items},w=function(t){return t.contacts.filter},F=function(t){var e=C(t),n=w(t);window.localStorage.setItem("contacts",JSON.stringify(e));var c=n.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(c)}))},S=n(15),k=n.n(S),A=n(1),J=function(t){var e=t.title,n=t.children;return Object(A.jsxs)("section",{className:k.a.section,children:[Object(A.jsx)("h2",{className:k.a.title,children:e}),n]})},z=n(16),T=n.n(z),B=function(){var t=Object(r.useState)(""),e=Object(y.a)(t,2),n=e[0],c=e[1],a=Object(r.useState)(""),o=Object(y.a)(a,2),i=o[0],s=o[1],u=Object(l.c)(C),b=Object(l.b)(),j=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":return c(a);case"number":return s(a)}},d=function(){c(""),s("")},m=O.a.generate(),h=O.a.generate();return Object(A.jsx)(J,{title:"Phonebook",children:Object(A.jsxs)("form",{className:T.a.form,onSubmit:function(t){if(t.preventDefault(),u.find((function(t){return t.name===n})))return alert("".concat(n," is already in the contact list"));b(f({name:n,number:i})),d()},children:[Object(A.jsxs)("label",{htmlFor:m,children:["Name",Object(A.jsx)("input",{type:"text",name:"name",value:n,onChange:j,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",id:m,required:!0})]}),Object(A.jsxs)("label",{htmlFor:h,children:["Number",Object(A.jsx)("input",{type:"tel",name:"number",value:i,onChange:j,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",id:h,required:!0})]}),Object(A.jsx)("button",{type:"submit",className:T.a.button,children:"Add new contact"})]})})},I=n(17),Z=n.n(I),q=function(){var t=Object(l.c)(w),e=Object(l.b)();return Object(A.jsxs)("label",{className:Z.a.label,children:["Find contacts by name",Object(A.jsx)("input",{className:Z.a.input,name:"filter",type:"text",placeholder:"Type contact name",value:t,onChange:function(t){return e(p(t.currentTarget.value))}})]})},D=n(5),L=n.n(D),M=function(){var t=Object(l.c)(F),e=Object(l.b)();return Object(A.jsx)(J,{title:"Contacts",children:0!==t.length?Object(A.jsx)("ul",{className:L.a.list,children:t.map((function(t){var n=t.id,c=t.name,a=t.number;return Object(A.jsxs)("li",{className:L.a.item,children:[Object(A.jsxs)("div",{className:L.a.position,children:[Object(A.jsxs)("span",{children:[c,":"]}),Object(A.jsx)("span",{children:a})]}),Object(A.jsx)("button",{className:L.a.button,type:"button",onClick:function(){return e(h(n))},children:"Delete"})]},n)}))}):Object(A.jsx)("p",{className:L.a.notification,children:"No contacts found :("})})};function Q(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(B,{}),Object(A.jsx)(q,{}),Object(A.jsx)(M,{})]})}n(37),n(38);s.a.render(Object(A.jsx)(o.a.StrictMode,{children:Object(A.jsx)(l.a,{store:N,children:Object(A.jsx)(Q,{})})}),document.getElementById("root"))},5:function(t,e,n){t.exports={list:"Contacts_list__3m_hX",item:"Contacts_item__1FkhT",button:"Contacts_button__383vt",notification:"Contacts_notification__1oeQk",position:"Contacts_position__3e_4J"}}},[[39,1,2]]]);
//# sourceMappingURL=main.451d5523.chunk.js.map