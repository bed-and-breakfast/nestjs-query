"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[6660],{7616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=n(4848),s=n(8453);const r={title:"v0.13.x to v0.14.x"},i=void 0,c={id:"migration-guides/v0.13.x-to-v0.14.x",title:"v0.13.x to v0.14.x",description:"This change only affects @ptc-org/nestjs-query-graphql resolvers.",source:"@site/docs/migration-guides/v0.13.x-to-v0.14.x.md",sourceDirName:"migration-guides",slug:"/migration-guides/v0.13.x-to-v0.14.x",permalink:"/nestjs-query/docs/migration-guides/v0.13.x-to-v0.14.x",draft:!1,unlisted:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/migration-guides/v0.13.x-to-v0.14.x.md",tags:[],version:"current",frontMatter:{title:"v0.13.x to v0.14.x"},sidebar:"docs",previous:{title:"v0.14.x to v0.15.x",permalink:"/nestjs-query/docs/migration-guides/v0.14.x-to-v0.15.x"},next:{title:"v0.12.x to v0.13.x",permalink:"/nestjs-query/docs/migration-guides/v0.12.x-to-v0.13.x"}},a={},d=[];function u(e){const t={admonition:"admonition",code:"code",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["This change only affects ",(0,o.jsx)(t.code,{children:"@ptc-org/nestjs-query-graphql"})," resolvers."]})}),"\n",(0,o.jsxs)(t.p,{children:["In the ",(0,o.jsx)(t.code,{children:"v0.14.x"})," the paging/connection portion of the library was re-written to be type safe."]}),"\n",(0,o.jsxs)(t.p,{children:["In the previous version a temporary solution was put in place to handle an array or cursor connection differentiating between ",(0,o.jsx)(t.code,{children:"queryMany"})," and ",(0,o.jsx)(t.code,{children:"queryManyConnection"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["In ",(0,o.jsx)(t.code,{children:"0.14.x"})," the ",(0,o.jsx)(t.code,{children:"queryMany"})," and ",(0,o.jsx)(t.code,{children:"queryManyConnection"})," are merged into a single method. The ",(0,o.jsx)(t.code,{children:"queryMany"})," method is typesafe and will type check the arguments as well as the return type."]})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var o=n(6540);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);