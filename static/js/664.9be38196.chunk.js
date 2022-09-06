(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[664,721],{3671:function(e,n,t){"use strict";t.r(n),t.d(n,{Contacts:function(){return w},default:function(){return Z}});var a=t(885),r=t(9298),s=t(2791),i=t(9085),c=(t(5462),t(5273)),l=t(3027),o=t(3360),u=t(184),m=function(){var e=(0,r.wY)().data,n=(0,s.useState)(""),t=(0,a.Z)(n,2),m=t[0],d=t[1],h=(0,s.useState)(""),f=(0,a.Z)(h,2),x=f[0],g=f[1],j=(0,r.Tn)(),p=(0,a.Z)(j,1)[0],b=function(){d(""),g("")};return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(l.Z,{className:"d-flex mt-2",onSubmit:function(n){n.preventDefault();var t={id:(0,c.x0)(),name:m,number:x};if(function(n){return e.some((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))}(t))return i.Am.info("This contact already exist !"),void b();i.Am.success("You add new contact !"),p(t),b()},children:[(0,u.jsx)(l.Z.Label,{className:"d-flex align-items-center m-0 my-2",children:"Name"}),(0,u.jsx)(l.Z.Control,{className:"me-2 w-25 mx-2","aria-label":"Search",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:m,onChange:function(e){d(e.target.value)},placeholder:"Enter name"}),(0,u.jsx)(l.Z.Label,{className:"d-flex align-items-center m-0",children:"Number "}),(0,u.jsx)(l.Z.Control,{className:"me-2 w-25 mx-2 ","aria-label":"Search",onChange:function(e){g(e.target.value)},type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:x,placeholder:"Enter phone number"}),(0,u.jsx)(o.Z,{variant:"outline-success",type:"submit",children:"Add contact"})]})})},d=t(5048),h=t(1398),f="Contact_avatar__899mE",x=t(128),g=function(e){var n=e.id,t=e.name,s=e.number,i=(0,r.Nt)(),c=(0,a.Z)(i,2),l=c[0],m=c[1],d=new x.AvatarGenerator;return(0,u.jsxs)("li",{className:"d-flex align-items-center mb-1 w-75 ",children:[(0,u.jsx)("img",{src:d.generateRandomAvatar(),className:f,alt:"avatar"}),(0,u.jsxs)(h.Z.Item,{variant:"warning",className:"d-flex p-1 align-items-center w-75 justify-content-between ",children:[t,": ",s,(0,u.jsx)(o.Z,{variant:"warning",type:"button",onClick:function(){return l(n)},disabled:m.isLoading,children:"Delete"})]})]})},j=function(){var e=(0,r.wY)(),n=e.data,t=e.error,a=e.isLoading,s=(0,d.v9)((function(e){return e.filter})).filter;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("ul",{className:"d-flex flex-column w-75 p-0",children:t?(0,u.jsx)(u.Fragment,{children:"Oh no, there was an error"}):a?(0,u.jsx)(u.Fragment,{children:"Loading..."}):n?n.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())})).map((function(e){return(0,u.jsx)(g,{id:e.id,name:e.name,number:e.number},e.id)})):null})})},p=t(6895),b=function(){var e=(0,d.v9)((function(e){return e.filter})).filter,n=(0,d.I0)();return(0,u.jsxs)(l.Z,{className:"d-flex",children:[(0,u.jsx)(l.Z.Control,{className:"me-2 w-25","aria-label":"Search",type:"text",name:"filter",onChange:function(e){return n((0,p.W1)(e.target.value))},value:e,placeholder:"Search"}),(0,u.jsx)(o.Z,{variant:"outline-success",children:"Search"})]})},v=t(9140),w=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(m,{}),(0,u.jsx)(v.Z.Title,{className:"mt-4 my-2",children:"Find contact by name"}),(0,u.jsx)(b,{}),(0,u.jsx)(v.Z.Title,{className:"mt-4",children:"Contacts"}),(0,u.jsx)(j,{})]})},Z=w},7712:function(e,n,t){"use strict";t.r(n),t.d(n,{HomePage:function(){return m},default:function(){return d}});var a=t(758),r=t(3504),s=t(7022),i=t(5048),c=t(9140),l=t(3671),o=t(184),u=function(){var e=(0,i.v9)((function(e){return e.auth}));return(0,o.jsx)(s.Z,{fluid:"md",className:" p-0",children:e.token?(0,o.jsx)(l.Contacts,{}):(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(c.Z,{className:"text-center",children:[(0,o.jsxs)("p",{className:"m-2 position-absolute top-50 start-0 fs-1 text-warning",children:["For more information you should",(0,o.jsx)(r.rU,{to:"/login",children:" log in "}),"if you have account, or ",(0,o.jsx)(r.rU,{to:"/register",children:" sign up"})]}),(0,o.jsx)("img",{src:a,"min-width":"800",alt:"phone"})]})})})},m=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(u,{})})},d=m},758:function(e,n,t){"use strict";e.exports=t.p+"static/media/background.309cf2a9dcccc436eb06.jpg"},5042:function(){}}]);
//# sourceMappingURL=664.9be38196.chunk.js.map