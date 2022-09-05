"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[241],{241:function(e,a,s){s.d(a,{Z:function(){return ie}});var i=s(1413),r=s(5987),l=s(1694),o=s.n(l),t=s(2007),n=s.n(t),c=s(2791),d=s(184),f=["as","className","type","tooltip"],v={type:n().string,tooltip:n().bool,as:n().elementType},m=c.forwardRef((function(e,a){var s=e.as,l=void 0===s?"div":s,t=e.className,n=e.type,c=void 0===n?"valid":n,v=e.tooltip,m=void 0!==v&&v,u=(0,r.Z)(e,f);return(0,d.jsx)(l,(0,i.Z)((0,i.Z)({},u),{},{ref:a,className:o()(t,"".concat(c,"-").concat(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=v;var u=m,p=s(6882),b=s(4934),x=s(162),Z=["bsPrefix","className","htmlFor"],h=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,t=e.htmlFor,n=(0,r.Z)(e,Z),f=(0,c.useContext)(b.Z).controlId;return s=(0,x.vE)(s,"form-check-label"),(0,d.jsx)("label",(0,i.Z)((0,i.Z)({},n),{},{ref:a,htmlFor:t||f,className:o()(l,s)}))}));h.displayName="FormCheckLabel";var N=h;var y=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],j=c.forwardRef((function(e,a){var s=e.id,l=e.bsPrefix,t=e.bsSwitchPrefix,n=e.inline,f=void 0!==n&&n,v=e.reverse,m=void 0!==v&&v,Z=e.disabled,h=void 0!==Z&&Z,j=e.isValid,w=void 0!==j&&j,I=e.isInvalid,P=void 0!==I&&I,k=e.feedbackTooltip,F=void 0!==k&&k,g=e.feedback,C=e.feedbackType,R=e.className,E=e.style,z=e.title,S=void 0===z?"":z,T=e.type,V=void 0===T?"checkbox":T,_=e.label,L=e.children,O=e.as,G=void 0===O?"input":O,H=(0,r.Z)(e,y);l=(0,x.vE)(l,"form-check"),t=(0,x.vE)(t,"form-switch");var M=(0,c.useContext)(b.Z).controlId,A=(0,c.useMemo)((function(){return{controlId:s||M}}),[M,s]),q=!L&&null!=_&&!1!==_||function(e,a){return c.Children.toArray(e).some((function(e){return c.isValidElement(e)&&e.type===a}))}(L,N),B=(0,d.jsx)(p.Z,(0,i.Z)((0,i.Z)({},H),{},{type:"switch"===V?"checkbox":V,ref:a,isValid:w,isInvalid:P,disabled:h,as:G}));return(0,d.jsx)(b.Z.Provider,{value:A,children:(0,d.jsx)("div",{style:E,className:o()(R,q&&l,f&&"".concat(l,"-inline"),m&&"".concat(l,"-reverse"),"switch"===V&&t),children:L||(0,d.jsxs)(d.Fragment,{children:[B,q&&(0,d.jsx)(N,{title:S,children:_}),g&&(0,d.jsx)(u,{type:C,tooltip:F,children:g})]})})})}));j.displayName="FormCheck";var w=Object.assign(j,{Input:p.Z,Label:N}),I=s(4942),P=(s(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),k=c.forwardRef((function(e,a){var s,l,t=e.bsPrefix,n=e.type,f=e.size,v=e.htmlSize,m=e.id,u=e.className,p=e.isValid,Z=void 0!==p&&p,h=e.isInvalid,N=void 0!==h&&h,y=e.plaintext,j=e.readOnly,w=e.as,k=void 0===w?"input":w,F=(0,r.Z)(e,P),g=(0,c.useContext)(b.Z).controlId;(t=(0,x.vE)(t,"form-control"),y)?s=(0,I.Z)({},"".concat(t,"-plaintext"),!0):(l={},(0,I.Z)(l,t,!0),(0,I.Z)(l,"".concat(t,"-").concat(f),f),s=l);return(0,d.jsx)(k,(0,i.Z)((0,i.Z)({},F),{},{type:n,size:v,ref:a,readOnly:j,id:m||g,className:o()(u,s,Z&&"is-valid",N&&"is-invalid","color"===n&&"".concat(t,"-color"))}))}));k.displayName="FormControl";var F=Object.assign(k,{Feedback:u}),g=(0,s(6543).Z)("form-floating"),C=["controlId","as"],R=c.forwardRef((function(e,a){var s=e.controlId,l=e.as,o=void 0===l?"div":l,t=(0,r.Z)(e,C),n=(0,c.useMemo)((function(){return{controlId:s}}),[s]);return(0,d.jsx)(b.Z.Provider,{value:n,children:(0,d.jsx)(o,(0,i.Z)((0,i.Z)({},t),{},{ref:a}))})}));R.displayName="FormGroup";var E=R,z=s(885),S=["as","bsPrefix","className"],T=["className"];var V=c.forwardRef((function(e,a){var s=function(e){var a=e.as,s=e.bsPrefix,l=e.className,t=(0,r.Z)(e,S);s=(0,x.vE)(s,"col");var n=(0,x.pi)(),c=(0,x.zG)(),d=[],f=[];return n.forEach((function(e){var a,i,r,l=t[e];delete t[e],"object"===typeof l&&null!=l?(a=l.span,i=l.offset,r=l.order):a=l;var o=e!==c?"-".concat(e):"";a&&d.push(!0===a?"".concat(s).concat(o):"".concat(s).concat(o,"-").concat(a)),null!=r&&f.push("order".concat(o,"-").concat(r)),null!=i&&f.push("offset".concat(o,"-").concat(i))})),[(0,i.Z)((0,i.Z)({},t),{},{className:o().apply(void 0,[l].concat(d,f))}),{as:a,bsPrefix:s,spans:d}]}(e),l=(0,z.Z)(s,2),t=l[0],n=t.className,c=(0,r.Z)(t,T),f=l[1],v=f.as,m=void 0===v?"div":v,u=f.bsPrefix,p=f.spans;return(0,d.jsx)(m,(0,i.Z)((0,i.Z)({},c),{},{ref:a,className:o()(n,!p.length&&u)}))}));V.displayName="Col";var _=V,L=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],O=c.forwardRef((function(e,a){var s=e.as,l=void 0===s?"label":s,t=e.bsPrefix,n=e.column,f=e.visuallyHidden,v=e.className,m=e.htmlFor,u=(0,r.Z)(e,L),p=(0,c.useContext)(b.Z).controlId;t=(0,x.vE)(t,"form-label");var Z="col-form-label";"string"===typeof n&&(Z="".concat(Z," ").concat(Z,"-").concat(n));var h=o()(v,t,f&&"visually-hidden",n&&Z);return m=m||p,n?(0,d.jsx)(_,(0,i.Z)({ref:a,as:"label",className:h,htmlFor:m},u)):(0,d.jsx)(l,(0,i.Z)({ref:a,className:h,htmlFor:m},u))}));O.displayName="FormLabel",O.defaultProps={column:!1,visuallyHidden:!1};var G=O,H=["bsPrefix","className","id"],M=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,t=e.id,n=(0,r.Z)(e,H),f=(0,c.useContext)(b.Z).controlId;return s=(0,x.vE)(s,"form-range"),(0,d.jsx)("input",(0,i.Z)((0,i.Z)({},n),{},{type:"range",ref:a,className:o()(l,s),id:t||f}))}));M.displayName="FormRange";var A=M,q=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],B=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.size,t=e.htmlSize,n=e.className,f=e.isValid,v=void 0!==f&&f,m=e.isInvalid,u=void 0!==m&&m,p=e.id,Z=(0,r.Z)(e,q),h=(0,c.useContext)(b.Z).controlId;return s=(0,x.vE)(s,"form-select"),(0,d.jsx)("select",(0,i.Z)((0,i.Z)({},Z),{},{size:t,ref:a,className:o()(n,s,l&&"".concat(s,"-").concat(l),v&&"is-valid",u&&"is-invalid"),id:p||h}))}));B.displayName="FormSelect";var D=B,J=["bsPrefix","className","as","muted"],K=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,t=e.as,n=void 0===t?"small":t,c=e.muted,f=(0,r.Z)(e,J);return s=(0,x.vE)(s,"form-text"),(0,d.jsx)(n,(0,i.Z)((0,i.Z)({},f),{},{ref:a,className:o()(l,s,c&&"text-muted")}))}));K.displayName="FormText";var Q=K,U=c.forwardRef((function(e,a){return(0,d.jsx)(w,(0,i.Z)((0,i.Z)({},e),{},{ref:a,type:"switch"}))}));U.displayName="Switch";var W=Object.assign(U,{Input:w.Input,Label:w.Label}),X=["bsPrefix","className","children","controlId","label"],Y=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,t=e.children,n=e.controlId,c=e.label,f=(0,r.Z)(e,X);return s=(0,x.vE)(s,"form-floating"),(0,d.jsxs)(E,(0,i.Z)((0,i.Z)({ref:a,className:o()(l,s),controlId:n},f),{},{children:[t,(0,d.jsx)("label",{htmlFor:n,children:c})]}))}));Y.displayName="FloatingLabel";var $=Y,ee=["className","validated","as"],ae={_ref:n().any,validated:n().bool,as:n().elementType},se=c.forwardRef((function(e,a){var s=e.className,l=e.validated,t=e.as,n=void 0===t?"form":t,c=(0,r.Z)(e,ee);return(0,d.jsx)(n,(0,i.Z)((0,i.Z)({},c),{},{ref:a,className:o()(s,l&&"was-validated")}))}));se.displayName="Form",se.propTypes=ae;var ie=Object.assign(se,{Group:E,Control:F,Floating:g,Check:w,Switch:W,Label:G,Text:Q,Range:A,Select:D,FloatingLabel:$})},6882:function(e,a,s){var i=s(1413),r=s(5987),l=s(1694),o=s.n(l),t=s(2791),n=s(4934),c=s(162),d=s(184),f=["id","bsPrefix","className","type","isValid","isInvalid","as"],v=t.forwardRef((function(e,a){var s=e.id,l=e.bsPrefix,v=e.className,m=e.type,u=void 0===m?"checkbox":m,p=e.isValid,b=void 0!==p&&p,x=e.isInvalid,Z=void 0!==x&&x,h=e.as,N=void 0===h?"input":h,y=(0,r.Z)(e,f),j=(0,t.useContext)(n.Z).controlId;return l=(0,c.vE)(l,"form-check-input"),(0,d.jsx)(N,(0,i.Z)((0,i.Z)({},y),{},{ref:a,type:u,id:s||j,className:o()(v,l,b&&"is-valid",Z&&"is-invalid")}))}));v.displayName="FormCheckInput",a.Z=v},4934:function(e,a,s){var i=s(2791).createContext({});a.Z=i},2391:function(e){var a=function(){};e.exports=a}}]);
//# sourceMappingURL=241.71b13ffb.chunk.js.map