"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[574,131],{2131:function(e,n,t){t.r(n),t.d(n,{Contacts:function(){return I},default:function(){return E}});var a=t(885),r=t(9298),i=t(2791),s=t(9085),o=(t(5462),t(5273)),c=t(241),l=t(3360),u=t(184),d=function(){var e=(0,r.wY)().data,n=(0,i.useState)(""),t=(0,a.Z)(n,2),d=t[0],m=t[1],f=(0,i.useState)(""),h=(0,a.Z)(f,2),x=h[0],v=h[1],b=(0,r.Tn)(),j=(0,a.Z)(b,1)[0],p=function(){m(""),v("")};return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(c.Z,{className:"d-flex",onSubmit:function(n){n.preventDefault();var t={id:(0,o.x0)(),name:d,number:x};if(console.log("values",t),function(n){return e.some((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))}(t))return s.Am.info("This contact already exist !"),void p();s.Am.success("You add new contact !"),j(t),p()},children:[(0,u.jsx)(c.Z.Label,{children:"Name "}),(0,u.jsx)(c.Z.Control,{className:"me-2 w-25","aria-label":"Search",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:d,onChange:function(e){m(e.target.value)},placeholder:"Enter name"}),(0,u.jsx)(c.Z.Label,{children:"Number "}),(0,u.jsx)(c.Z.Control,{className:"me-2 w-25","aria-label":"Search",onChange:function(e){v(e.target.value)},type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:x,placeholder:"Enter phone number"}),(0,u.jsx)(l.Z,{variant:"outline-success",type:"submit",children:"Add contact"})]})})},m=t(5048),f=t(1413),h=t(5987),x=t(1694),v=t.n(x),b=(t(2391),t(239)),j=t(7503),p=t(162),g=t(9007),Z=t(4787),w=t(8633),C=["bsPrefix","active","disabled","eventKey","className","variant","action","as"],N=i.forwardRef((function(e,n){var t=e.bsPrefix,r=e.active,i=e.disabled,s=e.eventKey,o=e.className,c=e.variant,l=e.action,d=e.as,m=(0,h.Z)(e,C);t=(0,p.vE)(t,"list-group-item");var x=(0,Z.v)((0,f.Z)({key:(0,w.h)(s,m.href),active:r},m)),b=(0,a.Z)(x,2),j=b[0],N=b[1],y=(0,g.Z)((function(e){if(i)return e.preventDefault(),void e.stopPropagation();j.onClick(e)}));i&&void 0===m.tabIndex&&(m.tabIndex=-1,m["aria-disabled"]=!0);var k=d||(l?m.href?"a":"button":"div");return(0,u.jsx)(k,(0,f.Z)((0,f.Z)((0,f.Z)({ref:n},m),j),{},{onClick:y,className:v()(o,t,N.isActive&&"active",i&&"disabled",c&&"".concat(t,"-").concat(c),l&&"".concat(t,"-action"))}))}));N.displayName="ListGroupItem";var y=N,k=["className","bsPrefix","variant","horizontal","numbered","as"],L=i.forwardRef((function(e,n){var t,a=(0,b.Ch)(e,{activeKey:"onSelect"}),r=a.className,i=a.bsPrefix,s=a.variant,o=a.horizontal,c=a.numbered,l=a.as,d=void 0===l?"div":l,m=(0,h.Z)(a,k),x=(0,p.vE)(i,"list-group");return o&&(t=!0===o?"horizontal":"horizontal-".concat(o)),(0,u.jsx)(j.Z,(0,f.Z)((0,f.Z)({ref:n},m),{},{as:d,className:v()(r,x,s&&"".concat(x,"-").concat(s),t&&"".concat(x,"-").concat(t),c&&"".concat(x,"-numbered"))}))}));L.displayName="ListGroup";var _=Object.assign(L,{Item:y}),F=function(e){var n=e.id,t=e.name,i=e.number,s=(0,r.Nt)(),o=(0,a.Z)(s,2),c=o[0],d=o[1];return(0,u.jsxs)("li",{children:[" ",(0,u.jsxs)(_.Item,{variant:"warning",className:"d-flex p-1 justify-content-between",children:[t,": ",i,(0,u.jsx)(l.Z,{variant:"warning",type:"button",onClick:function(){return c(n)},disabled:d.isLoading,children:"Delete"})]})]})},A=function(){var e=(0,r.wY)(),n=e.data,t=e.error,a=e.isLoading,i=(0,m.v9)((function(e){return e.filter})).filter,s=(0,m.v9)((function(e){return e.auth})).token;console.log("user",s);return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("ul",{className:"d-flex flex-column justify-content-between w-25",children:t?(0,u.jsx)(u.Fragment,{children:"Oh no, there was an error"}):a?(0,u.jsx)(u.Fragment,{children:"Loading..."}):n?n.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())})).map((function(e){return(0,u.jsx)(F,{id:e.id,name:e.name,number:e.number},e.id)})):null})})},S=t(6895),z=function(){var e=(0,m.v9)((function(e){return e.filter})).filter,n=(0,m.I0)();return(0,u.jsxs)(c.Z,{className:"d-flex",children:[(0,u.jsx)(c.Z.Control,{className:"me-2 w-25","aria-label":"Search",type:"text",name:"filter",onChange:function(e){return n((0,S.W1)(e.target.value))},value:e,placeholder:"Search"}),(0,u.jsx)(l.Z,{variant:"outline-success",children:"Search"})]})},P=t(9140),I=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d,{}),(0,u.jsx)(P.Z.Title,{children:"Find contact by name"}),(0,u.jsx)(z,{}),(0,u.jsx)(P.Z.Title,{children:"Contacts"}),(0,u.jsx)(A,{})]})},E=I},2574:function(e,n,t){t.r(n),t.d(n,{HomePage:function(){return m},default:function(){return f}});var a="Homeview_text__Y9PBI",r=t(758),i=t(3504),s=t(7022),o=t(5048),c=t(9140),l=t(2131),u=t(184),d=function(){var e=(0,o.v9)((function(e){return e.auth}));return console.log("user",e),(0,u.jsx)(s.Z,{fluid:"md",children:e.token?(0,u.jsx)(l.Contacts,{}):(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(c.Z,{className:"text-center",children:[(0,u.jsxs)("p",{className:a,children:["For more information you should",(0,u.jsx)(i.rU,{to:"/login",children:" log in "}),"if you have account, or ",(0,u.jsx)(i.rU,{to:"/register",children:" sign up"})]}),(0,u.jsx)("img",{src:r,"min-width":"800",alt:"phone"})]})})})},m=function(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(d,{})})},f=m},758:function(e,n,t){e.exports=t.p+"static/media/background.309cf2a9dcccc436eb06.jpg"}}]);
//# sourceMappingURL=574.a6a465c1.chunk.js.map