"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[9748],{4765:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=s(4848),o=s(8453);const r={title:"Serialization"},i=void 0,a={id:"persistence/typegoose/serialization",title:"Serialization",description:"Using class-transformer is a popular libarary used in nestjs, unfortunately class-transformer does not play nicely with tyepgoose documents.",source:"@site/docs/persistence/typegoose/serialization.md",sourceDirName:"persistence/typegoose",slug:"/persistence/typegoose/serialization",permalink:"/nestjs-query/docs/persistence/typegoose/serialization",draft:!1,unlisted:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/persistence/typegoose/serialization.md",tags:[],version:"current",frontMatter:{title:"Serialization"},sidebar:"docs",previous:{title:"Custom Service",permalink:"/nestjs-query/docs/persistence/typegoose/custom-service"},next:{title:"Getting Started",permalink:"/nestjs-query/docs/graphql/getting-started"}},c={},l=[];function d(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Using ",(0,n.jsx)(t.code,{children:"class-transformer"})," is a popular libarary used in ",(0,n.jsx)(t.code,{children:"nestjs"}),", unfortunately ",(0,n.jsx)(t.code,{children:"class-transformer"})," does not play nicely with ",(0,n.jsx)(t.code,{children:"tyepgoose"})," documents."]}),"\n",(0,n.jsxs)(t.p,{children:["For most use cases ",(0,n.jsx)(t.code,{children:"nestjs-query"})," will take care of the serialization for you through ",(0,n.jsx)(t.a,{href:"/nestjs-query/docs/concepts/advanced/assemblers",children:"assemblers"}),". If you find yourself in a situation where you want to use ",(0,n.jsx)(t.code,{children:"class-transformer"})," with a model you should use the following patterns."]}),"\n",(0,n.jsx)(t.p,{children:"To convert your DTO into a model, you can inject your Model and create a new instance."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"new TodoItemModel(todoItemDTO);\n"})}),"\n",(0,n.jsx)(t.p,{children:"When converting your entity into a DTO, you can use the following."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"const dto = plainToClass(TodoItemDTO, todoItemEntity.toObject({ virtuals: true }));\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>a});var n=s(6540);const o={},r=n.createContext(o);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);