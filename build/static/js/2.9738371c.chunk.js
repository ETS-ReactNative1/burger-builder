webpackJsonp([2],{145:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=n(0),t=n.n(o),i=n(5),a=n(156),s=n(11),d=n(49),c=n(10),u=n(48),l=function(e){Object(o.useEffect)(function(){e.onFetchOrders(e.token,e.userId)},[]);var r=t.a.createElement(u.a,null);return e.loading||(r=e.orders.map(function(e){return t.a.createElement(a.a,{key:e.id,ingredients:e.ingredients,price:e.price})})),r},p=function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},A=function(e){return{onFetchOrders:function(r,n){return e(c.e(r,n))}}};r.default=Object(i.b)(p,A)(Object(d.a)(l,s.a))},156:function(e,r,n){"use strict";var o=n(0),t=n.n(o),i=n(157),a=n.n(i),s=function(e){var r=[];for(var n in e.ingredients)r.push({name:n,amount:e.ingredients[n]});var o=r.map(function(e){return t.a.createElement("span",{key:e.name,style:{lineHeight:"1em",textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"}},e.name," (",e.amount,")")});return t.a.createElement("div",{className:a.a.Order},t.a.createElement("p",null,"Ingredients: ",o),t.a.createElement("p",null,"Price: ",t.a.createElement("strong",null,"USD $",Number.parseFloat(e.price).toFixed(2))))};r.a=s},157:function(e,r,n){var o=n(158);"string"===typeof o&&(o=[[e.i,o,""]]);var t={};t.transform=void 0;n(143)(o,t);o.locals&&(e.exports=o.locals)},158:function(e,r,n){r=e.exports=n(142)(!0),r.push([e.i,".Order-module__Order__17xRB{width:80%;border:1px solid #eee;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;padding:10px;margin:10px auto;-webkit-box-sizing:border-box;box-sizing:border-box}","",{version:3,sources:["C:/Users/gabri/Downloads/burger-builder/src/components/Order/Order.module.css"],names:[],mappings:"AAAA,4BACE,UAAW,AACX,sBAAuB,AACvB,kCAAmC,AAC3B,0BAA2B,AACnC,aAAc,AACd,iBAAkB,AAClB,8BAA+B,AACvB,qBAAuB,CAChC",file:"Order.module.css",sourcesContent:[".Order {\r\n  width: 80%;\r\n  border: 1px solid #eee;\r\n  -webkit-box-shadow: 0 2px 3px #ccc;\r\n          box-shadow: 0 2px 3px #ccc;\r\n  padding: 10px;\r\n  margin: 10px auto;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n"],sourceRoot:""}]),r.locals={Order:"Order-module__Order__17xRB"}}});
//# sourceMappingURL=2.9738371c.chunk.js.map