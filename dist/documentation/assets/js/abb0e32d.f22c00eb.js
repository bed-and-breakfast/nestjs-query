"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[3326],{7141:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var s=o(4848),n=o(8453);const r={title:"Custom Service"},i=void 0,c={id:"persistence/typegoose/custom-service",title:"Custom Service",description:"To create a custom query service to add your own methods to you can extend the TypegooseQueryService.",source:"@site/docs/persistence/typegoose/custom-service.md",sourceDirName:"persistence/typegoose",slug:"/persistence/typegoose/custom-service",permalink:"/nestjs-query/docs/persistence/typegoose/custom-service",draft:!1,unlisted:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/persistence/typegoose/custom-service.md",tags:[],version:"current",frontMatter:{title:"Custom Service"},sidebar:"docs",previous:{title:"Relations",permalink:"/nestjs-query/docs/persistence/typegoose/relations"},next:{title:"Serialization",permalink:"/nestjs-query/docs/persistence/typegoose/serialization"}},d={},u=[];function m(e){const t={code:"code",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["To create a custom query service to add your own methods to you can extend the ",(0,s.jsx)(t.code,{children:"TypegooseQueryService"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="todo-item.service.ts"',children:"import { QueryService } from '@ptc-org/nestjs-query-core';\nimport { InjectModel } from '@m8a/nestjs-typegoose';\nimport { TypegooseQueryService } from '@ptc-org/nestjs-query-typegoose';\nimport { TodoItemEntity } from './entity/todo-item.entity';\n\n@QueryService(TodoItemEntity)\nexport class TodoItemService extends TypegooseQueryService<TodoItemEntity> {\n  constructor(@InjectModel(TodoItemEntity) model: ReturnModelType<typeof TodoItemEntity>) {\n    super(model);\n  }\n\n  async markAllAsCompleted(): Promise<number> {\n    const entities = await this.query({ filter: { completed: { is: true } } });\n\n    const { updatedCount } = await this.updateMany(\n      { completed: true }, // update\n      { id: { in: entities.map((e) => e.id) } }, // filter\n    );\n    // do some other business logic\n    return updatedCount;\n  }\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["To use the custom service in the auto-generated resolver you can specify the ",(0,s.jsx)(t.code,{children:"ServiceClass"})," option."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="todo-item.module.ts" {12,16}',children:"import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';\nimport { NestjsQueryTypegooseModule } from '@ptc-org/nestjs-query-typegoose';\nimport { Module } from '@nestjs/common';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { TodoItemService } from './todo-item.service';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypegooseModule.forFeature([TodoItemEntity])],\n      services: [TodoItemService],\n      resolvers: [\n        {\n          DTOClass: TodoItemDTO,\n          ServiceClass: TodoItemService,\n        },\n      ],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>c});var s=o(6540);const n={},r=s.createContext(n);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);