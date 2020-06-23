webpackJsonp([1],{146:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),o=t.n(a),i=t(5),u=t(8),l=t(159),c=t.n(l),A=t(147),d=t(47),s=t(48),b=t(10),p=t(12),m=function(){function e(e,n){var t=[],r=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&u.return&&u.return()}finally{if(a)throw o}}return t}return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return e(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),g=function(e){var n=function(e,n,t,r){return{elementType:e,elementConfig:{type:n,placeholder:t},value:"",validation:Object.assign({required:!0},r),valid:!1,touched:!1}},t=Object(a.useState)({email:n("input","email","test@example.com",{isEmail:!0}),password:n("input","password","**********",{minLength:6})}),i=m(t,2),l=i[0],b=i[1],g=Object(a.useState)(!0),h=m(g,2),f=h[0],x=h[1];Object(a.useEffect)(function(){e.building||"/"===e.authRedirectPath||e.onSetAuthRedirectPath()},[]);var C=function(e,n){var t=Object(p.b)(l,r({},n,Object(p.b)(l[n],{value:e.target.value,valid:Object(p.a)(e.target.value,l[n].validation),touched:!0})));b(t)},v=function(n){n.preventDefault(),e.onAuth(l.email.value,l.password.value,f)},B=function(){x(function(e){return!e})},_=[];for(var w in l)_.push({id:w,config:l[w]});var E=_.map(function(e){return o.a.createElement(A.a,{key:e.id,elementType:e.config.elementType,elementConfig:e.config.elementConfig,value:e.config.value,invalid:!e.config.valid,shouldValidate:e.config.validation,touched:e.config.touched,changed:function(n){return C(n,e.id)}})});e.loading&&(E=o.a.createElement(s.a,null));var I=null;e.error&&(I=o.a.createElement("p",null,e.error.message));var y=null;return e.isAuthenticated&&(y=o.a.createElement(u.c,{to:e.authRedirectPath})),o.a.createElement("div",{className:c.a.Auth},y,I,o.a.createElement("form",{onSubmit:v},E,o.a.createElement(d.a,{btnType:"Success"},"Submit")),o.a.createElement(d.a,{clicked:B,btnType:"Danger"},"Switch to ",f?"Sign In":"Sign Up"))},h=function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,authRedirectPath:e.auth.authRedirectPath,building:e.burgerBuilder.building}},f=function(e){return{onAuth:function(n,t,r){return e(b.b(n,t,r))},onSetAuthRedirectPath:function(){return e(b.j("/"))}}};n.default=Object(i.b)(h,f)(g)},147:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(148),i=t.n(o),u=function(e){var n=null,t=[i.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&t.push(i.a.Invalid),e.elementType){case"input":n=a.a.createElement("input",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":n=a.a.createElement("textarea",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":n=a.a.createElement("select",{className:t.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return a.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:n=a.a.createElement("input",Object.assign({className:i.a.InputElement},e.elementConfig,{value:e.value,onChange:e.changed}))}return a.a.createElement("div",{className:i.a.Input},a.a.createElement("label",{className:i.a.Label},e.input),n)};n.a=u},148:function(e,n,t){var r=t(149);"string"===typeof r&&(r=[[e.i,r,""]]);var a={};a.transform=void 0;t(143)(r,a);r.locals&&(e.exports=r.locals)},149:function(e,n,t){n=e.exports=t(142)(!0),n.push([e.i,".Input-module__Input__2GO9p{width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.Input-module__Label__1Cyzj{font-weight:700;display:block;margin-bottom:8px}.Input-module__InputElement__1Uyb4{outline:none;border:1px solid #ccc;background-color:#fff;font:inherit;padding:6px 10px;display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.Input-module__InputElement__1Uyb4:focus{outline:none;background-color:#ccc}.Input-module__Invalid__1dxIO{border:1px solid red;background-color:#fda49a}","",{version:3,sources:["C:/Users/gabri/Downloads/burger-builder/src/components/UI/Input/Input.module.css"],names:[],mappings:"AAAA,4BACE,WAAY,AACZ,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAChC,AAED,4BACE,gBAAkB,AAClB,cAAe,AACf,iBAAmB,CACpB,AAED,mCACE,aAAc,AACd,sBAAuB,AACvB,sBAAwB,AACxB,aAAc,AACd,iBAAkB,AAClB,cAAe,AACf,WAAY,AACZ,8BAA+B,AACvB,qBAAuB,CAChC,AAED,yCACE,aAAc,AACd,qBAAuB,CACxB,AAED,8BACE,qBAAsB,AACtB,wBAA0B,CAC3B",file:"Input.module.css",sourcesContent:[".Input {\r\n  width: 100%;\r\n  padding: 10px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n.Label {\r\n  font-weight: bold;\r\n  display: block;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.InputElement {\r\n  outline: none;\r\n  border: 1px solid #ccc;\r\n  background-color: white;\r\n  font: inherit;\r\n  padding: 6px 10px;\r\n  display: block;\r\n  width: 100%;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n.InputElement:focus {\r\n  outline: none;\r\n  background-color: #ccc;\r\n}\r\n\r\n.Invalid {\r\n  border: 1px solid red;\r\n  background-color: #fda49a;\r\n}\r\n"],sourceRoot:""}]),n.locals={Input:"Input-module__Input__2GO9p",Label:"Input-module__Label__1Cyzj",InputElement:"Input-module__InputElement__1Uyb4",Invalid:"Input-module__Invalid__1dxIO"}},159:function(e,n,t){var r=t(160);"string"===typeof r&&(r=[[e.i,r,""]]);var a={};a.transform=void 0;t(143)(r,a);r.locals&&(e.exports=r.locals)},160:function(e,n,t){n=e.exports=t(142)(!0),n.push([e.i,".Auth-module__Auth__3o8Dm{margin:20px auto;width:80%;text-align:center;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;border:1px solid #eee;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:5px}@media (min-width:600px){.Auth-module__Auth__3o8Dm{width:500px}}","",{version:3,sources:["C:/Users/gabri/Downloads/burger-builder/src/containers/Auth/Auth.module.css"],names:[],mappings:"AAAA,0BACE,iBAAkB,AAClB,UAAW,AACX,kBAAmB,AACnB,kCAAmC,AAC3B,0BAA2B,AACnC,sBAAuB,AACvB,aAAc,AACd,8BAA+B,AACvB,sBAAuB,AAC/B,iBAAmB,CACpB,AAED,yBACE,0BACE,WAAa,CACd,CACF",file:"Auth.module.css",sourcesContent:[".Auth {\r\n  margin: 20px auto;\r\n  width: 80%;\r\n  text-align: center;\r\n  -webkit-box-shadow: 0 2px 3px #ccc;\r\n          box-shadow: 0 2px 3px #ccc;\r\n  border: 1px solid #eee;\r\n  padding: 10px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  border-radius: 5px;\r\n}\r\n\r\n@media (min-width: 600px) {\r\n  .Auth {\r\n    width: 500px;\r\n  }\r\n}\r\n"],sourceRoot:""}]),n.locals={Auth:"Auth-module__Auth__3o8Dm"}}});
//# sourceMappingURL=1.00a9abd3.chunk.js.map