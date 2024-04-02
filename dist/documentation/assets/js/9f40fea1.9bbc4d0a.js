"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[8151],{8377:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=o(4848),n=o(8453);const s={title:"Custom Service"},i=void 0,c={id:"persistence/typeorm/custom-service",title:"Custom Service",description:"To create a custom query service to add your own methods to you can extend the TypeOrmQueryService.",source:"@site/docs/persistence/typeorm/custom-service.md",sourceDirName:"persistence/typeorm",slug:"/persistence/typeorm/custom-service",permalink:"/nestjs-query/docs/persistence/typeorm/custom-service",draft:!1,unlisted:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/persistence/typeorm/custom-service.md",tags:[],version:"current",frontMatter:{title:"Custom Service"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/nestjs-query/docs/persistence/typeorm/getting-started"},next:{title:"Multiple Databases",permalink:"/nestjs-query/docs/persistence/typeorm/multiple-databases"}},m={},u=[];function d(e){const t={code:"code",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["To create a custom query service to add your own methods to you can extend the ",(0,r.jsx)(t.code,{children:"TypeOrmQueryService"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="todo-item.service.ts"',children:"import { QueryService } from '@ptc-org/nestjs-query-core'\nimport { TypeOrmQueryService } from '@ptc-org/nestjs-query-typeorm';\nimport { InjectRepository } from '@nestjs/typeorm';\nimport { Repository } from 'typeorm';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@QueryService(TodoItemEntity)\nexport class TodoItemService extends TypeOrmQueryService<TodoItemEntity> {\n  constructor(\n    @InjectRepository(TodoItemEntity) repo: Repository<TodoItemEntity>,\n  ) {\n    super(repo);\n  }\n\n  async markAllAsCompleted(): Promise<number> {\n     const entities = await this.query({ filter: { completed: { is: true } } });\n\n     const { updatedCount } = await this.updateMany(\n       { completed: true }, // update\n       { id: { in: entities.map(e => e.id) } } // filter\n     );\n     // do some other business logic\n     return updatedCount;\n  }\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["To use the custom service in the auto-generated resolver you can specify the ",(0,r.jsx)(t.code,{children:"ServiceClass"})," option."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="todo-item.module.ts" {12,16}',children:"import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { TodoItemService } from './todo-item.service';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n      services: [TodoItemService],\n      resolvers: [\n        {\n          DTOClass: TodoItemDTO,\n          ServiceClass: TodoItemService,\n        },\n      ],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n\n"})})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>c});var r=o(6540);const n={},s=r.createContext(n);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);