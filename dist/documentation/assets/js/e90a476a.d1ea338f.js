"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[9465],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>y});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=u(o),c=n,y=p["".concat(s,".").concat(c)]||p[c]||d[c]||a;return o?r.createElement(y,l(l({ref:t},m),{},{components:o})):r.createElement(y,l({ref:t},m))}));function y(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<a;u++)l[u]=o[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},3314:(e,t,o)=>{o.d(t,{Z:()=>l});var r=o(7294),n=o(6010);const a={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,o=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,l),hidden:o},t)}},1291:(e,t,o)=>{o.d(t,{Z:()=>d});var r=o(7462),n=o(7294),a=o(6010),l=o(2389),i=o(7392),s=o(7094),u=o(2466);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){var t,o,l=e.lazy,p=e.block,d=e.defaultValue,c=e.values,y=e.groupId,v=e.className,f=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),T=null!=c?c:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.l)(T,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===d?d:null!=(t=null!=d?d:null==(o=f.find((function(e){return e.props.default})))?void 0:o.props.value)?t:f[0].props.value;if(null!==h&&!T.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+T.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,s.U)(),k=b.tabGroupChoices,I=b.setTabGroupChoices,j=(0,n.useState)(h),N=j[0],O=j[1],q=[],D=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var C=k[y];null!=C&&C!==N&&T.some((function(e){return e.value===C}))&&O(C)}var Q=function(e){var t=e.currentTarget,o=q.indexOf(t),r=T[o].value;r!==N&&(D(t),O(r),null!=y&&I(y,String(r)))},M=function(e){var t,o=null;switch(e.key){case"Enter":Q(e);break;case"ArrowRight":var r,n=q.indexOf(e.currentTarget)+1;o=null!=(r=q[n])?r:q[0];break;case"ArrowLeft":var a,l=q.indexOf(e.currentTarget)-1;o=null!=(a=q[l])?a:q[q.length-1]}null==(t=o)||t.focus()};return n.createElement("div",{className:(0,a.Z)("tabs-container",m.tabList)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},v)},T.map((function(e){var t=e.value,o=e.label,l=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return q.push(e)},onKeyDown:M,onClick:Q},l,{className:(0,a.Z)("tabs__item",m.tabItem,null==l?void 0:l.className,{"tabs__item--active":N===t})}),null!=o?o:t)}))),l?(0,n.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function d(e){var t=(0,l.Z)();return n.createElement(p,(0,r.Z)({key:String(t)},e))}},2322:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>f,frontMatter:()=>u,metadata:()=>p,toc:()=>c});var r=o(7462),n=o(3366),a=(o(7294),o(3905)),l=o(1291),i=o(3314),s=["components"],u={title:"v0.11.0",author:"Doug Martin",author_title:"Creator",author_url:"https://github.com/tripss",author_image_url:"https://avatars1.githubusercontent.com/u/361261?v=4",tags:["releases","minor"]},m=void 0,p={permalink:"/nestjs-query/blog/2020/05/07/v0.11.0",editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/blog/blog/2020-05-07-v0.11.0.mdx",source:"@site/blog/2020-05-07-v0.11.0.mdx",title:"v0.11.0",description:"@InjectQueryService",date:"2020-05-07T00:00:00.000Z",formattedDate:"May 7, 2020",tags:[{label:"releases",permalink:"/nestjs-query/blog/tags/releases"},{label:"minor",permalink:"/nestjs-query/blog/tags/minor"}],readingTime:4.055,hasTruncateMarker:!1,authors:[{name:"Doug Martin",title:"Creator",url:"https://github.com/tripss",imageURL:"https://avatars1.githubusercontent.com/u/361261?v=4"}],frontMatter:{title:"v0.11.0",author:"Doug Martin",author_title:"Creator",author_url:"https://github.com/tripss",author_image_url:"https://avatars1.githubusercontent.com/u/361261?v=4",tags:["releases","minor"]},prevItem:{title:"v0.11.2",permalink:"/nestjs-query/blog/2020/05/13/v0.11.2"},nextItem:{title:"v0.8.6",permalink:"/nestjs-query/blog/2020/04/22/v0.8.6"}},d={authorsImageUrls:[void 0]},c=[{value:"<code>@InjectQueryService</code>",id:"injectqueryservice",level:3},{value:"Relation Decorators",id:"relation-decorators",level:2},{value:"@Relation",id:"relation",level:3},{value:"@Connection",id:"connection",level:3},{value:"Auto Generated Resolvers",id:"auto-generated-resolvers",level:2},{value:"Example",id:"example",level:3},{value:"Previously",id:"previously",level:4},{value:"New",id:"new",level:4}],y={toc:c},v="wrapper";function f(e){var t=e.components,o=(0,n.Z)(e,s);return(0,a.kt)(v,(0,r.Z)({},y,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"injectqueryservice"},(0,a.kt)("inlineCode",{parentName:"h3"},"@InjectQueryService")),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.11.x")," an new decorator was added ",(0,a.kt)("inlineCode",{parentName:"p"},"@InjectQueryService"),", this decorator replaces the ORM specific decorators:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@InjectTypeOrmQueryService")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@InjectSequelizeQueryService"))),(0,a.kt)("p",null,"To migrate replace all ",(0,a.kt)("inlineCode",{parentName:"p"},"@InjectTypeOrmQueryService")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@InjectSequelizeQueryService")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"@InjectQueryService"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You still need to import the ",(0,a.kt)("inlineCode",{parentName:"p"},"NestjsQueryTypeOrmModule")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"NestjsQuerySequelizeModule")," to use ",(0,a.kt)("inlineCode",{parentName:"p"},"@InjectQueryService"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { QueryService, InjectQueryService } from '@ptc-org/nestjs-query-core';\nimport { CRUDResolver } from '@ptc-org/nestjs-query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO) {\n  constructor(@InjectQueryService(TodoItemEntity) readonly service: QueryService<TodoItemEntity>) {\n    super(service);\n  }\n}\n")),(0,a.kt)("h2",{id:"relation-decorators"},"Relation Decorators"),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.11.x")," two new decorators were introduced from the ",(0,a.kt)("inlineCode",{parentName:"p"},"@ptc-org/nestjs-query-graphql")," package. The ",(0,a.kt)("inlineCode",{parentName:"p"},"@Relation")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@Connection")," allow specifying relations on the DTO rather than passing them in as options to the ",(0,a.kt)("inlineCode",{parentName:"p"},"CRUDResolver"),"."),(0,a.kt)("h3",{id:"relation"},"@Relation"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@Relation")," decorator allow specifying a single relation (e.g. one-to-one, many-to-one)."),(0,a.kt)("p",null,"In this example we add a relation for a ",(0,a.kt)("inlineCode",{parentName:"p"},"todoItem"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{6}","{6}":!0},"import { FilterableField, Relation } from '@ptc-org/nestjs-query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\nimport { TodoItemDTO } from '../todo-item/todo-item.dto.ts';\n\n@ObjectType('SubTask')\n@Relation('todoItem', () => TodoItemDTO, { disableRemove: true })\nexport class SubTaskDTO {\n  @FilterableField(() => ID)\n  id!: string;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n\n  @FilterableField()\n  todoItemId!: string;\n}\n")),(0,a.kt)("h3",{id:"connection"},"@Connection"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@Connection")," decorator allow specifying a connection relation (e.g. many-to-many, one-to-many)."),(0,a.kt)("p",null,"In this example we add a connection for ",(0,a.kt)("inlineCode",{parentName:"p"},"subTasks"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{6}","{6}":!0},"import { FilterableField, Connection } from '@ptc-org/nestjs-query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\nimport { SubTaskDTO } from '../sub-task/sub-task.dto'\n\n@ObjectType('TodoItem')\n@Connection('subTasks', () => SubTaskDTO, { disableRemove: true })\nexport class TodoItemDTO {\n  @FilterableField(() => ID)\n  id!: string;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n}\n")),(0,a.kt)("h2",{id:"auto-generated-resolvers"},"Auto Generated Resolvers"),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.11.x")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"@nestjs-query/query-graph")," package is now able to automatically create your resolvers."),(0,a.kt)("p",null,"To start using this feature update your module to import the ",(0,a.kt)("inlineCode",{parentName:"p"},"NestjsQueryGraphQLModule")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"When used with the new relation decorators, you can remove a lot of boiler plate.")),(0,a.kt)(l.Z,{defaultValue:"typeorm",groupId:"orm",values:[{label:"TypeOrm",value:"typeorm"},{label:"Sequelize",value:"sequelize"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"typeorm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.module.ts"',title:'"todo-item.module.ts"'},"import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n      resolvers: [{ DTOClass: TodoItemDTO, EntityClass: TodoItemEntity }],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n"))),(0,a.kt)(i.Z,{value:"sequelize",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.module.ts"',title:'"todo-item.module.ts"'},"import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';\nimport { NestjsQuerySequelizeModule } from '@ptc-org/nestjs-query-sequelize';\nimport { Module } from '@nestjs/common';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQuerySequelizeModule.forFeature([TodoItemEntity])],\n      resolvers: [{ DTOClass: TodoItemDTO, EntityClass: TodoItemEntity }],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n")))),(0,a.kt)("p",null,"Once you have updated your module you can remove the old resolver."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Be sure to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"NestjsQueryTypeOrmModule")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"NestjsQuerySequelizeModule")," to the imports in ",(0,a.kt)("inlineCode",{parentName:"p"},"NestjsQueryGraphQLModule"),".")),(0,a.kt)("p",null,"To read more about the auto-generated resolvers check out the ",(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/resolvers"},"resolvers docs")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("h4",{id:"previously"},"Previously"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.resolver.ts"',title:'"todo-item.resolver.ts"'},"import { QueryService, InjectQueryService } from '@ptc-org/nestjs-query-core';\nimport { CRUDResolver } from '@ptc-org/nestjs-query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { TodoItemInputDTO } from './todo-item.input';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Resolver()\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO) {\n  constructor(\n      @InjectQueryService(TodoItemEntity) readonly service: QueryService<TodoItemEntity>\n  ) {\n    super(service);\n  }\n}\n")),(0,a.kt)(l.Z,{defaultValue:"typeorm",groupId:"orm",values:[{label:"TypeOrm",value:"typeorm"},{label:"Sequelize",value:"sequelize"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"typeorm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.module.ts"',title:'"todo-item.module.ts"'},"import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { TodoItemResolver } from './todo-item.resolver';\n\n@Module({\n  providers: [TodoItemResolver],\n  imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n})\nexport class TodoItemModule {}\n\n"))),(0,a.kt)(i.Z,{value:"sequelize",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.module.ts"',title:'"todo-item.module.ts"'},"import { NestjsQuerySequelizeModule } from '@ptc-org/nestjs-query-sequelize';\nimport { Module } from '@nestjs/common';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { TodoItemResolver } from './todo-item.resolver';\n\n@Module({\n  providers: [TodoItemResolver],\n  imports: [NestjsQuerySequelizeModule.forFeature([TodoItemEntity])],\n})\nexport class TodoItemModule {}\n\n")))),(0,a.kt)("h4",{id:"new"},"New"),(0,a.kt)(l.Z,{defaultValue:"typeorm",groupId:"orm",values:[{label:"TypeOrm",value:"typeorm"},{label:"Sequelize",value:"sequelize"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"typeorm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.module.ts"',title:'"todo-item.module.ts"'},"import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n      resolvers: [{ DTOClass: TodoItemDTO, EntityClass: TodoItemEntity }],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n"))),(0,a.kt)(i.Z,{value:"sequelize",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.module.ts"',title:'"todo-item.module.ts"'},"import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';\nimport { NestjsQuerySequelizeModule } from '@ptc-org/nestjs-query-sequelize';\nimport { Module } from '@nestjs/common';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQuerySequelizeModule.forFeature([TodoItemEntity])],\n      resolvers: [{ DTOClass: TodoItemDTO, EntityClass: TodoItemEntity }],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n")))))}f.isMDXComponent=!0}}]);