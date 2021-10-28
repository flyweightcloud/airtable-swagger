(this["webpackJsonpairtable-swagger-builder-ui"]=this["webpackJsonpairtable-swagger-builder-ui"]||[]).push([[0],{70:function(e,t,a){},71:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),i=a(27),n=a.n(i),c=(a(70),a(71),a(40)),o=a.n(c),l=a(42),h=a(25),u=a(116),d=a(119),b=a(117),g=a(118),p=a(4),j=a(5),f={fieldGroup:{width:"100%"}},m={fieldGroup:{width:"50%"}},w={childrenGap:15},x=new RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i),y=new RegExp(/^(https:\/\/)(api.airtable.com)(\/v0)(\/)([a-zA-Z0-9-]*)(\/)([a-zA-Z0-9-]*)$/),O=function(e){var t=e.message;return Object(j.jsx)(g.a,{messageBarType:p.a.severeWarning,children:t})},v=function(e){var t=e.message;return Object(j.jsx)(g.a,{messageBarType:p.a.success,isMultiline:!1,children:t})},S=function(){var e=r.useState(""),t=Object(h.a)(e,2),a=t[0],s=t[1],i=r.useState(""),n=Object(h.a)(i,2),c=n[0],g=n[1],p=r.useState(""),S=Object(h.a)(p,2),A=S[0],k=S[1],C=r.useState({isError:!1,isSuccess:!1,message:""}),P=Object(h.a)(C,2),T=P[0],E=P[1],I=r.useCallback((function(e,t){s(t||"")}),[]),F=r.useCallback((function(e,t){g(t||"")}),[]),B=r.useCallback((function(e,t){k(t||"")}),[]),M=function(){var e=Object(l.a)(o.a.mark((function e(t){var r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("https://flyweight-airtable-swagger-builder-fn.azurewebsites.net/api/Build/swagger",{body:JSON.stringify({email:A,airtable_url:a,airtable_key:c}),headers:{"Content-Type":"application/json"},method:"POST"});case 3:return r=e.sent,e.next=6,r.json();case 6:s=e.sent,200===r.status?E({isError:!1,isSuccess:!0,message:"Success! Please check your email"}):E({isError:!0,isSuccess:!1,message:s.error.message}),console.log(s);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){return""===A||x.test(A)?"":"Valid email required"},z=function(){return""===a||y.test(a)?"":"Please check your Airtable API url"};return Object(j.jsxs)("div",{style:{width:"50%",minWidth:"350px",maxWidth:"600px"},children:[T.isError&&Object(j.jsx)(O,{message:T.message}),T.isSuccess&&Object(j.jsx)(v,{message:T.message}),Object(j.jsx)("form",{onSubmit:M,children:Object(j.jsxs)(b.a,{tokens:w,children:[Object(j.jsx)(u.a,{label:"Airtable API URL",placeholder:"https://api.airtable.com/v0/appABC123/MyTable",value:a,errorMessage:z(),onChange:I,styles:f}),Object(j.jsx)(u.a,{label:"Airtable API Key",placeholder:"key123",value:c,onChange:F,styles:m}),Object(j.jsx)(u.a,{label:"Email Address to send Swagger file to",onChange:B,value:A,errorMessage:_(),styles:f}),Object(j.jsx)(d.a,{text:"Generate Swagger File",type:"submit",disabled:!(A.length>0&&""===_()&&a.length>0&&""===z()&&c.length>0)})]})})]})},A=a(2),k=a(24),C=a(115),P={marginTop:"3em",boxShadow:k.a.depth4,padding:"2em",backgroundColor:"#ffffff",width:"100%",minWidth:"350px",maxWidth:"700px"};var T=function(){return Object(r.useEffect)((function(){Object(C.a)()})),Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("main",{children:[Object(j.jsx)("img",{src:"flyweight_logo_800.png",height:"127",width:"300",alt:"Flyweight Logo"}),Object(j.jsx)("h1",{style:{fontSize:A.b.size42,paddingBottom:"1em",paddingTop:"1em"},children:"Airtable to Swagger Conversion"}),Object(j.jsx)(S,{}),Object(j.jsxs)("div",{style:P,children:[Object(j.jsx)("h4",{children:"About"}),Object(j.jsx)("p",{children:"This application converts your Airtable tables to Swagger files which can then be used to consume the Airtable API directly from the Microsoft Power Platform."}),Object(j.jsx)("h4",{children:"How to use this app"}),Object(j.jsxs)("p",{children:["Start by visiting ",Object(j.jsx)("a",{href:"https://airtable.com/api",target:"_blank",rel:"noreferrer",children:"https://airtable.com/api"})," in order to find your Airtable API URL. You will also need to provide your Airtable API key, which can be found in your account page (",Object(j.jsx)("a",{href:"https://airtable.com/account",target:"_blank",rel:"noreferrer",children:"https://airtable.com/account"}),")"]}),Object(j.jsx)("p",{children:'Enter in the details above and click generate. The generated swagger file will be emailed to the email address you provided. You can then import this file into your Power Platform project as a "Custom Connector".'}),Object(j.jsx)("h4",{children:"Support"}),Object(j.jsxs)("p",{children:["This project is maintained by Flyweight.Cloud, which provides low code tooling for building cloud applications. If you have any questions, please contact us at ",Object(j.jsx)("a",{href:"mailto:team@flyweight.cloud",children:"team@flyweight.cloud"})]}),Object(j.jsx)("p",{children:"This project is provided without warranty and under the terms of the MIT license."}),Object(j.jsx)("h4",{children:"Open Source"}),Object(j.jsxs)("p",{children:["Flyweight believes open source is the key to faster low code adoption. You can find the source code to this swagger builder at ",Object(j.jsx)("a",{href:"https://github.com/flyweightcloud/airtable2swagger",target:"_blank",rel:"noreferrer",children:"https://github.com/flyweightcloud/airtable2swagger"})]})]})]})})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,124)).then((function(t){var a=t.getCLS,r=t.getFID,s=t.getFCP,i=t.getLCP,n=t.getTTFB;a(e),r(e),s(e),i(e),n(e)}))};n.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(T,{})}),document.getElementById("root")),E()}},[[75,1,2]]]);
//# sourceMappingURL=main.a24b7805.chunk.js.map