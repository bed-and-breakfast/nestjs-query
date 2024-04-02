"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[6877],{433:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var r=n(6905);const o={tabItem:"tabItem_Ymn6"};var s=n(5893);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n,children:t})}},2808:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(7294),o=n(6905),s=n(3735),i=n(6550),l=n(613),a=n(4423),u=n(636),d=n(9200);function c(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function p(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return c(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,n=void 0!==t&&t,o=e.groupId,s=(0,i.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:o});return[(0,a._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(s.location.search);t.set(l,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[l,s])]}function b(e){var t,n,o,s,i=e.defaultValue,a=e.queryString,u=void 0!==a&&a,c=e.groupId,b=p(e),j=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var o=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:i,tabValues:b})})),f=j[0],v=j[1],y=h({queryString:u,groupId:c}),x=y[0],g=y[1],T=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,d.Nk)(t),o=n[0],s=n[1],[o,(0,r.useCallback)((function(e){t&&s.set(e)}),[t,s])]),I=T[0],O=T[1],S=function(){var e=null!=x?x:I;return m({value:e,tabValues:b})?e:null}();return(0,l.Z)((function(){S&&v(S)}),[S]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:b}))throw new Error("Can't select invalid tab value="+e);v(e),g(e),O(e)}),[g,O,b]),tabValues:b}}var j=n(5730);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(5893);function y(e){var t=e.className,n=e.block,r=e.selectedValue,i=e.selectValue,l=e.tabValues,a=[],u=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=a.indexOf(t),o=l[n].value;o!==r&&(u(t),i(o))},c=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,o=a.indexOf(e.currentTarget)+1;n=null!=(r=a[o])?r:a[0];break;case"ArrowLeft":var s,i=a.indexOf(e.currentTarget)-1;n=null!=(s=a[i])?s:a[a.length-1]}null==(t=n)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t),children:l.map((function(e){var t=e.value,n=e.label,s=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return a.push(e)},onKeyDown:c,onClick:d},s,{className:(0,o.Z)("tabs__item",f.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function x(e){var t=e.lazy,n=e.children,o=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=s.find((function(e){return e.props.value===o}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})}))})}function g(e){var t=b(e);return(0,v.jsxs)("div",{className:(0,o.Z)("tabs-container",f.tabList),children:[(0,v.jsx)(y,Object.assign({},e,t)),(0,v.jsx)(x,Object.assign({},e,t))]})}function T(e){var t=(0,j.Z)();return(0,v.jsx)(g,Object.assign({},e,{children:c(e.children)}),String(t))}},9077:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var r=n(5893),o=n(1151),s=n(2808),i=n(433);const l={title:"Subscriptions"},a=void 0,u={id:"graphql/subscriptions",title:"Subscriptions",description:"Before reading this it is recommended to read the nestjs graphql subscriptions docs.",source:"@site/docs/graphql/subscriptions.mdx",sourceDirName:"graphql",slug:"/graphql/subscriptions",permalink:"/nestjs-query/docs/graphql/subscriptions",draft:!1,unlisted:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/graphql/subscriptions.mdx",tags:[],version:"current",frontMatter:{title:"Subscriptions"},sidebar:"docs",previous:{title:"Aggregations",permalink:"/nestjs-query/docs/graphql/aggregations"},next:{title:"Relations",permalink:"/nestjs-query/docs/graphql/relations"}},d={},c=[{value:"Enabling Subscriptions",id:"enabling-subscriptions",level:2},{value:"Enabling/Disabling Individual Subscriptions",id:"enablingdisabling-individual-subscriptions",level:3},{value:"Filtering Subscriptions",id:"filtering-subscriptions",level:2},{value:"Custom PubSub Provider",id:"custom-pubsub-provider",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["Before reading this it is recommended to read the ",(0,r.jsx)(t.a,{href:"https://docs.nestjs.com/graphql/subscriptions",children:"nestjs graphql subscriptions docs"}),"."]})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"nestjs-query"})," includes out of the box subscription support. When enabling subscriptions the following subscriptions will be created"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"created{ObjectName}"})," - published when the ",(0,r.jsx)(t.code,{children:"createOne"})," or ",(0,r.jsx)(t.code,{children:"createMany"})," mutation is called."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"updatedOne{ObjectName}"}),"  - published when the ",(0,r.jsx)(t.code,{children:"updateOne"})," mutation is called."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"updatedMany{ObjectName}"})," - published when ",(0,r.jsx)(t.code,{children:"updateMany"})," mutation is called."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"deletedOne{ObjectName}"})," - published when the ",(0,r.jsx)(t.code,{children:"deleteOne"})," mutation is called."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"deletedMany{ObjectName}"}),"  - published when ",(0,r.jsx)(t.code,{children:"deleteMany"})," mutation is called."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"enabling-subscriptions",children:"Enabling Subscriptions"}),"\n",(0,r.jsxs)(t.p,{children:["You can enable subscriptions through the auto-generated resolver using the ",(0,r.jsx)(t.code,{children:"NestjsQueryGraphQLModule"})," or by manually defining your resolver."]}),"\n",(0,r.jsxs)(t.p,{children:["In both cases you need to set the ",(0,r.jsx)(t.code,{children:"enableSubscriptions"})," option to ",(0,r.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"In the below example the following subscriptions will be exposed."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"createdTodoItem"})," - published when the ",(0,r.jsx)(t.code,{children:"createOne"})," or ",(0,r.jsx)(t.code,{children:"createMany"})," mutation is called."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"updatedOneTodoItem"}),"  - published when the ",(0,r.jsx)(t.code,{children:"updateOne"})," mutation is called."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"updatedManyTodoItems"})," - published when ",(0,r.jsx)(t.code,{children:"updateMany"})," mutation is called."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"deletedOneTodoItem"})," - published when the ",(0,r.jsx)(t.code,{children:"deleteOne"})," mutation is called."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"deletedManyTodoItems"}),"  - published when ",(0,r.jsx)(t.code,{children:"deleteMany"})," mutation is called."]}),"\n"]}),"\n",(0,r.jsxs)(s.Z,{defaultValue:"module",values:[{label:"NestjsQueryGraphQLModule",value:"module"},{label:"CRUDResolver",value:"resolver"}],children:[(0,r.jsx)(i.Z,{value:"module",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="todo-item.module.ts" {17}',children:"import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemInputDTO } from './todo-item.input';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n      resolvers: [{\n        DTOClass: TodoItemDTO,\n        EntityClass: TodoItemEntity,\n        CreateDTOClass: TodoItemInputDTO,\n        UpdateDTOClass: TodoItemInputDTO,\n        enableSubscriptions: true,\n      }],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n"})})}),(0,r.jsxs)(i.Z,{value:"resolver",children:[(0,r.jsxs)(t.p,{children:["When manually defining your resolver you must also provide a readonly ",(0,r.jsx)(t.code,{children:"pubSub"})," property. In this the default ",(0,r.jsx)(t.code,{children:"PubSub"})," implementation is injected."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="todo-item.resolver.ts" {13,17}',children:"import { QueryService, InjectQueryService } from '@ptc-org/nestjs-query-core';\nimport { CRUDResolver, InjectPubSub } from '@ptc-org/nestjs-query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { PubSub } from 'graphql-subscriptions';\nimport { TodoItemInputDTO } from './todo-item.input';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Resolver()\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO, {\n  CreateDTOClass: TodoItemInputDTO,\n  UpdateDTOClass: TodoItemInputDTO,\n  enableSubscriptions: true,\n}) {\n  constructor(\n      @InjectQueryService(TodoItemEntity) readonly service: QueryService<TodoItemEntity>,\n      @InjectPubSub() readonly pubSub: PubSub\n  ) {\n    super(service);\n  }\n}\n"})})]})]}),"\n",(0,r.jsx)(t.h3,{id:"enablingdisabling-individual-subscriptions",children:"Enabling/Disabling Individual Subscriptions"}),"\n",(0,r.jsx)(t.p,{children:"You also have the option to selectively enable or disable individual subscriptions."}),"\n",(0,r.jsxs)(t.p,{children:["In this example the ",(0,r.jsx)(t.code,{children:"updatedMany"})," and ",(0,r.jsx)(t.code,{children:"deletedMany"})," subscriptions are disabled."]}),"\n",(0,r.jsxs)(s.Z,{defaultValue:"module",values:[{label:"NestjsQueryGraphQLModule",value:"module"},{label:"CRUDResolver",value:"resolver"}],children:[(0,r.jsx)(i.Z,{value:"module",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="todo-item.module.ts" {18-19}',children:"import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemInputDTO } from './dto/todo-item-input.dto';\nimport { TodoItemUpdateDTO } from './dto/todo-item-update.dto';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n      resolvers: [\n        {\n          DTOClass: TodoItemDTO,\n          EntityClass: TodoItemEntity,\n          CreateDTOClass: TodoItemInputDTO,\n          UpdateDTOClass: TodoItemUpdateDTO,\n          enableSubscriptions: true,\n          update: { many: { enableSubscriptions: false } },\n          delete: { many: { enableSubscriptions: false } },\n        },\n      ],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n\n"})})}),(0,r.jsx)(i.Z,{value:"resolver",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="todo-item.resolver.ts" {14-15}',children:"import { QueryService, InjectQueryService } from '@ptc-org/nestjs-query-core';\nimport { CRUDResolver, InjectPubSub } from '@ptc-org/nestjs-query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { PubSub } from 'graphql-subscriptions';\nimport { TodoItemInputDTO } from './todo-item.input';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Resolver()\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO, {\n  CreateDTOClass: TodoItemInputDTO,\n  UpdateDTOClass: TodoItemInputDTO,\n  enableSubscriptions: true,\n  update: { many: { enableSubscriptions: false } },\n  delete: { many: { enableSubscriptions: false } },\n}) {\n  constructor(\n      @InjectQueryService(TodoItemEntity) readonly service: QueryService<TodoItemEntity>,\n      @InjectPubSub() readonly pubSub: PubSub\n  ) {\n    super(service);\n  }\n}\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"filtering-subscriptions",children:"Filtering Subscriptions"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"created"}),", ",(0,r.jsx)(t.code,{children:"updatedOne"})," and ",(0,r.jsx)(t.code,{children:"deletedOne"})," subscriptions all for a ",(0,r.jsx)(t.code,{children:"Filter"})," to be passed in filter for events that match the criteria"]}),"\n",(0,r.jsx)(t.p,{children:"The filter your provide is the same type that is used when querying for records."}),"\n",(0,r.jsxs)(t.p,{children:["For example to filter for all created ",(0,r.jsx)(t.code,{children:"TodoItems"})," where the like starts with ",(0,r.jsx)(t.code,{children:"Foo"})," and is completed, you could do the following."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:'subscription {\n  createdTodoItem(\n    input: { filter: { title: { like: "Foo%" }, completed: { is: true } } }\n  ) {\n    id\n    title\n    description\n    completed\n    created\n    updated\n  }\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"custom-pubsub-provider",children:"Custom PubSub Provider"}),"\n",(0,r.jsxs)(t.p,{children:["You can override the default ",(0,r.jsx)(t.code,{children:"PubSub"})," implementation by creating your own provider and providing it to ",(0,r.jsx)(t.code,{children:"nestjs-query"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Below is an example provider."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="redis-pub-sub.provider.ts"',children:"import { pubSubToken } from '@ptc-org/nestjs-query-graphql';\nimport { RedisPubSub } from 'graphql-redis-subscriptions';\nimport Redis from 'ioredis';\nimport { Provider } from '@nestjs/common';\n\nexport class RedisPubSubProvider {\n  static provider(): Provider {\n    return {\n      provide: pubSubToken(),\n      useValue: new RedisPubSub({\n        publisher: new Redis(),\n        subscriber: new Redis(),\n      }),\n    };\n  }\n}\n\n"})}),"\n",(0,r.jsxs)(t.p,{children:["In order to let ",(0,r.jsx)(t.code,{children:"nestjs-query"})," know about the provider you can set the ",(0,r.jsx)(t.code,{children:"pubSub"})," option."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="todo-item/todo-item.module.ts" {14}',children:"import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemInputDTO } from './dto/todo-item-input.dto';\nimport { TodoItemUpdateDTO } from './dto/todo-item-update.dto';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { RedisPubSubProvider } from '../redis-pub-sub.provider';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n      pubSub: RedisPubSubProvider.provider(),\n      resolvers: [\n        {\n          DTOClass: TodoItemDTO,\n          EntityClass: TodoItemEntity,\n          CreateDTOClass: TodoItemInputDTO,\n          UpdateDTOClass: TodoItemUpdateDTO,\n          enableSubscriptions: true,\n        },\n      ],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n"})})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var r=n(7294);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);