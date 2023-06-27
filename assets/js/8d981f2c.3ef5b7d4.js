"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[6889],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=d(n),c=o,y=m["".concat(s,".").concat(c)]||m[c]||p[c]||r;return n?a.createElement(y,l(l({ref:t},u),{},{components:n})):a.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),o=n(6010);const r={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(7462),o=n(7294),r=n(6010),l=n(2466),i=n(6550),s=n(1980),d=n(7392),u=n(12);function m(e){return function(e){var t,n;return null!=(t=null==(n=o.Children.map(e,(function(e){if(!e||(0,o.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,o.useMemo)((function(){var e=null!=t?t:m(n);return function(e){var t=(0,d.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function c(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function y(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,r=(0,i.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(l),(0,o.useCallback)((function(e){if(l){var t=new URLSearchParams(r.location.search);t.set(l,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}}),[l,r])]}function g(e){var t,n,a,r,l=e.defaultValue,i=e.queryString,s=void 0!==i&&i,d=e.groupId,m=p(e),g=(0,o.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!c({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var o=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:l,tabValues:m})})),k=g[0],v=g[1],h=y({queryString:s,groupId:d}),f=h[0],b=h[1],T=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),a=n[0],r=n[1],[a,(0,o.useCallback)((function(e){t&&r.set(e)}),[t,r])]),I=T[0],N=T[1],C=function(){var e=null!=f?f:I;return c({value:e,tabValues:m})?e:null}();return(0,o.useLayoutEffect)((function(){C&&v(C)}),[C]),{selectedValue:k,selectValue:(0,o.useCallback)((function(e){if(!c({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);v(e),b(e),N(e)}),[b,N,m]),tabValues:m}}var k=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){var t=e.className,n=e.block,i=e.selectedValue,s=e.selectValue,d=e.tabValues,u=[],m=(0,l.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=u.indexOf(t),a=d[n].value;a!==i&&(m(t),s(a))},c=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var a,o=u.indexOf(e.currentTarget)+1;n=null!=(a=u[o])?a:u[0];break;case"ArrowLeft":var r,l=u.indexOf(e.currentTarget)-1;n=null!=(r=u[l])?r:u[u.length-1]}null==(t=n)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},d.map((function(e){var t=e.value,n=e.label,l=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return u.push(e)},onKeyDown:c,onClick:p},l,{className:(0,r.Z)("tabs__item",v.tabItem,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function f(e){var t=e.lazy,n=e.children,a=e.selectedValue,r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=r.find((function(e){return e.props.value===a}));return l?(0,o.cloneElement)(l,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function b(e){var t=g(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",v.tabList)},o.createElement(h,(0,a.Z)({},e,t)),o.createElement(f,(0,a.Z)({},e,t)))}function T(e){var t=(0,k.Z)();return o.createElement(b,(0,a.Z)({key:String(t)},e))}},4461:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>m,toc:()=>c});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),l=n(4866),i=n(5162),s=["components"],d={title:"Services"},u=void 0,m={unversionedId:"persistence/services",id:"persistence/services",title:"Services",description:"@nestjs-query provides a common interface to use difference ORMs inorder to query and mutate your data.",source:"@site/docs/persistence/services.mdx",sourceDirName:"persistence",slug:"/persistence/services",permalink:"/nestjs-query/docs/persistence/services",draft:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/persistence/services.mdx",tags:[],version:"current",frontMatter:{title:"Services"},sidebar:"docs",previous:{title:"Assemblers",permalink:"/nestjs-query/docs/concepts/advanced/assemblers"},next:{title:"Getting Started",permalink:"/nestjs-query/docs/persistence/typeorm/getting-started"}},p={},c=[{value:"Creating a Service",id:"creating-a-service",level:2},{value:"Module",id:"module",level:3},{value:"Decorator",id:"decorator",level:3},{value:"Querying",id:"querying",level:2},{value:"Example",id:"example",level:4},{value:"Filtering",id:"filtering",level:3},{value:"Example",id:"example-1",level:4},{value:"Sorting",id:"sorting",level:3},{value:"Example",id:"example-2",level:4},{value:"Paging",id:"paging",level:3},{value:"Example",id:"example-3",level:4},{value:"Find By Id",id:"find-by-id",level:3},{value:"Example",id:"example-4",level:4},{value:"Get By Id",id:"get-by-id",level:3},{value:"Example",id:"example-5",level:4},{value:"Aggregating",id:"aggregating",level:3},{value:"Creating",id:"creating",level:2},{value:"Create One",id:"create-one",level:3},{value:"Example",id:"example-6",level:4},{value:"Create Many",id:"create-many",level:3},{value:"Example",id:"example-7",level:4},{value:"Updating",id:"updating",level:2},{value:"Update One",id:"update-one",level:3},{value:"Example",id:"example-8",level:4},{value:"Update Many",id:"update-many",level:3},{value:"Example",id:"example-9",level:4},{value:"Deleting",id:"deleting",level:2},{value:"Delete One",id:"delete-one",level:3},{value:"Example",id:"example-10",level:4},{value:"Delete Many",id:"delete-many",level:3},{value:"Example",id:"example-11",level:4},{value:"Foreign Keys",id:"foreign-keys",level:2},{value:"Example",id:"example-12",level:3},{value:"Relations",id:"relations",level:2},{value:"Example",id:"example-13",level:3}],y={toc:c},g="wrapper";function k(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)(g,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@nestjs-query")," provides a common interface to use difference ORMs inorder to query and mutate your data."),(0,r.kt)("p",null,"The following ORMs are supported out of the box."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/nestjs-query/docs/persistence/typeorm/getting-started"},"TypeOrm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/nestjs-query/docs/persistence/sequelize/getting-started"},"Sequelize")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/nestjs-query/docs/persistence/mongoose/getting-started"},"Mongoose")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/nestjs-query/docs/persistence/typegoose/getting-started"},"Typegoose"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@ptc-org/nestjs-query-core")," also provides a number of base ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryService"),"s that can be used to create custom query services.\n",(0,r.kt)("a",{parentName:"p",href:"/nestjs-query/docs/concepts/services#service-helpers"},"See the Services docs")),(0,r.kt)("p",null,"All examples assume the following entity."),(0,r.kt)(l.Z,{defaultValue:"typeorm",groupId:"orm",values:[{label:"TypeOrm",value:"typeorm"},{label:"Sequelize",value:"sequelize"},{label:"Mongoose",value:"mongoose"},{label:"Typegoose",value:"typegoose"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"typeorm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.entity.ts"',title:'"todo-item.entity.ts"'},"import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';\n\n@Entity()\nexport class TodoItemEntity {\n  @PrimaryGeneratedColumn()\n  id!: string;\n\n  @Column()\n  title!: string;\n\n  @Column()\n  completed!: boolean;\n\n  @CreateDateColumn()\n  created!: Date;\n\n  @UpdateDateColumn()\n  updated!: Date;\n}\n"))),(0,r.kt)(i.Z,{value:"sequelize",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.entity.ts"',title:'"todo-item.entity.ts"'},"import {\n  Table,\n  Column,\n  Model,\n  AllowNull,\n  CreatedAt,\n  UpdatedAt,\n  PrimaryKey,\n  AutoIncrement,\n} from 'sequelize-typescript';\n\n@Table\nexport class TodoItemEntity extends Model<TodoItemEntity, Partial<TodoItemEntity>> {\n  @PrimaryKey\n  @AutoIncrement\n  @Column\n  id!: number;\n\n  @Column\n  title!: string;\n\n  @AllowNull\n  @Column\n  description?: string;\n\n  @Column\n  completed!: boolean;\n\n  @CreatedAt\n  created!: Date;\n\n  @UpdatedAt\n  updated!: Date;\n}\n"))),(0,r.kt)(i.Z,{value:"mongoose",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.entity.ts"',title:'"todo-item.entity.ts"'},"import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';\nimport { Document } from 'mongoose';\n\n@Schema({ timestamps: { createdAt: 'created', updatedAt: 'updated' } })\nexport class TodoItemEntity extends Document {\n  @Prop({ required: true })\n  title!: string;\n\n  @Prop()\n  description?: string;\n\n  @Prop({ required: true })\n  completed!: boolean;\n\n  @Prop({ default: Date.now })\n  created!: Date;\n\n  @Prop({ default: Date.now })\n  updated!: Date;\n}\n\nexport const TodoItemEntitySchema = SchemaFactory.createForClass(TodoItemEntity);\n"))),(0,r.kt)(i.Z,{value:"typegoose",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.entity.ts"',title:'"todo-item.entity.ts"'},"import { ObjectId } from '@ptc-org/nestjs-query-graphql'\nimport { Base } from '@typegoose/typegoose/lib/defaultClasses';\nimport { Prop, modelOptions, Ref } from '@typegoose/typegoose';\nimport { Types } from 'mongoose';\nimport { SubTaskEntity } from '../sub-task/sub-task.entity';\nimport { TagEntity } from '../tag/tag.entity';\n\n@modelOptions({\n  schemaOptions: {\n    timestamps: { createdAt: 'created', updatedAt: 'updated' },\n    collection: 'todo-items',\n    toObject: { virtuals: true },\n  },\n})\nexport class TodoItemEntity implements Base {\n  @ObjectId()\n  _id!: Types.ObjectId\n\n  id!: string  \n\n  @Prop({ required: true })\n  title!: string;\n\n  @Prop()\n  description?: string;\n\n  @Prop({ required: true })\n  completed!: boolean;\n\n  @Prop({ default: Date.now })\n  created!: Date;\n\n  @Prop({ default: Date.now })\n  updated!: Date;\n}\n\n")))),(0,r.kt)("h2",{id:"creating-a-service"},"Creating a Service"),(0,r.kt)("h3",{id:"module"},"Module"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"nestjs-query")," ",(0,r.kt)("inlineCode",{parentName:"p"},"typeorm"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sequelize"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"mongoose"),", and 'typegoose' packages provide a module that will add providers\nto inject auto-created ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryServices")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"@InjectQueryService")," decorator."),(0,r.kt)("p",null,"In order to use the decorator you will need to use the module that comes with the ",(0,r.kt)("inlineCode",{parentName:"p"},"nestjs-query")," orm module providing it your entities that you want the services created for."),(0,r.kt)(l.Z,{defaultValue:"typeorm",groupId:"orm",values:[{label:"TypeOrm",value:"typeorm"},{label:"Sequelize",value:"sequelize"},{label:"Mongoose",value:"mongoose"},{label:"Typegoose",value:"typegoose"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"typeorm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.module.ts" {8}',title:'"todo-item.module.ts"',"{8}":!0},"import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { TodoItemResolver } from './todo-item.resolver';\n\n@Module({\n  providers: [TodoItemResolver],\n  imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n})\nexport class TodoItemModule {}\n\n"))),(0,r.kt)(i.Z,{value:"sequelize",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.module.ts" {8}',title:'"todo-item.module.ts"',"{8}":!0},"import { NestjsQuerySequelizeModule } from '@ptc-org/nestjs-query-sequelize';\nimport { Module } from '@nestjs/common';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { TodoItemResolver } from './todo-item.resolver';\n\n@Module({\n  providers: [TodoItemResolver],\n  imports: [NestjsQuerySequelizeModule.forFeature([TodoItemEntity])],\n})\nexport class TodoItemModule {}\n"))),(0,r.kt)(i.Z,{value:"mongoose",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.module.ts" {9-11}',title:'"todo-item.module.ts"',"{9-11}":!0},"import { NestjsQueryMongooseModule } from '@ptc-org/nestjs-query-mongoose';\nimport { Module } from '@nestjs/common';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { TodoItemResolver } from './todo-item.resolver';\n\n@Module({\n  providers: [TodoItemResolver],\n  imports: [\n    NestjsQueryMongooseModule.forFeature([\n      { document: TodoItemEntity, name: TodoItemEntity.name, schema: TodoItemEntitySchema },\n    ]),\n  ],\n})\nexport class TodoItemModule {}\n"))),(0,r.kt)(i.Z,{value:"typegoose",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.module.ts" {8}',title:'"todo-item.module.ts"',"{8}":!0},"import { NestjsQueryTypegooseModule } from '@ptc-org/nestjs-query-typegoose';\nimport { Module } from '@nestjs/common';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { TodoItemResolver } from './todo-item.resolver';\n\n@Module({\n  providers: [TodoItemResolver],\n  imports: [NestjsQueryTypegooseModule.forFeature([TodoItemEntity])],\n})\nexport class TodoItemModule {}\n")))),(0,r.kt)("h3",{id:"decorator"},"Decorator"),(0,r.kt)("p",null,"Once you have imported the correct module, use ",(0,r.kt)("inlineCode",{parentName:"p"},"@InjectQueryService")," decorator to inject a ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryService")," into your class or resolver."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.resolver.ts" {10}',title:'"todo-item.resolver.ts"',"{10}":!0},"import { QueryService, InjectQueryService } from '@ptc-org/nestjs-query-core';\nimport { CRUDResolver } from '@ptc-org/nestjs-query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO) {\n  constructor(\n    @InjectQueryService(TodoItemEntity) readonly service: QueryService<TodoItemEntity>\n  ) {\n    super(service);\n  }\n}\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The above resolver is an example of manually defining the resolver, if you use the ",(0,r.kt)("inlineCode",{parentName:"p"},"NestjsQueryGraphQLModule")," you do not need to define a resolver.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In the above example the DTO and entity are the same shape, if you have a case where they are different or have\ncomputed fields check out ",(0,r.kt)("a",{parentName:"p",href:"/nestjs-query/docs/concepts/advanced/assemblers"},"Assemblers")," to understand how to convert to and from\nthe\nDTO/Entity.")),(0,r.kt)("h2",{id:"querying"},"Querying"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"nestjs-query")," QueryService uses a common ",(0,r.kt)("inlineCode",{parentName:"p"},"Query")," interface that allows you use a common type regardless of the persistence library in use."),(0,r.kt)("p",null," To query for records from your service you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," method which will return a ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," of an array of\nentities. To read more about querying take a look at the ",(0,r.kt)("a",{parentName:"p",href:"/nestjs-query/docs/concepts/queries"},"Queries Doc"),"."),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("p",null,"Get all records"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const records = await this.service.query({});\n")),(0,r.kt)("h3",{id:"filtering"},"Filtering"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"filter")," option is translated to a ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE")," clause."),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("p",null,"To find all completed ",(0,r.kt)("inlineCode",{parentName:"p"},"TodoItems")," by use can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"is")," operator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const records = await this.service.query({\n   filter : {\n     completed: { is: true },\n   },\n});\n")),(0,r.kt)("h3",{id:"sorting"},"Sorting"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"sorting")," option is translated to a ",(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY"),"."),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)("p",null,"Sorting records by ",(0,r.kt)("inlineCode",{parentName:"p"},"completed")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"title"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const records = await this.service.query({\n  sorting: [\n    {field: 'completed', direction: SortDirection.ASC},\n    {field: 'title', direction: SortDirection.DESC},\n  ],\n});\n")),(0,r.kt)("h3",{id:"paging"},"Paging"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"paging")," option is translated to ",(0,r.kt)("inlineCode",{parentName:"p"},"LIMIT")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"OFFSET"),"."),(0,r.kt)("h4",{id:"example-3"},"Example"),(0,r.kt)("p",null,"Skip the first 20 records and return the next 10."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const records = await this.service.query({\n  paging: {limit: 10, offset: 20},\n});\n")),(0,r.kt)("h3",{id:"find-by-id"},"Find By Id"),(0,r.kt)("p",null,"To find a single record you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"findById")," method."),(0,r.kt)("h4",{id:"example-4"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const records = await this.service.findById(1);\n")),(0,r.kt)("h3",{id:"get-by-id"},"Get By Id"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"getById")," method is the same as the ",(0,r.kt)("inlineCode",{parentName:"p"},"findById")," with one key difference, it will throw an exception if the record is not found."),(0,r.kt)("h4",{id:"example-5"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"try {\n  const records = await this.service.getById(1);\n} catch (e) {\n  console.error('Unable to get record with id = 1');\n}\n")),(0,r.kt)("h3",{id:"aggregating"},"Aggregating"),(0,r.kt)("p",null,"To perform an ",(0,r.kt)("inlineCode",{parentName:"p"},"aggregate")," query you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"aggregate")," method which accepts a ",(0,r.kt)("inlineCode",{parentName:"p"},"Filter")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"AggregateQuery"),"."),(0,r.kt)("p",null,"Supported aggregates are ",(0,r.kt)("inlineCode",{parentName:"p"},"count"),", 'sum', 'avg', ",(0,r.kt)("inlineCode",{parentName:"p"},"min")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"max"),"."),(0,r.kt)("p",null,"In this example we'll aggregate on all records."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const aggregateResponse = await this.service.aggregate({}, {\n    count: ['id'],\n    min: ['title'],\n    max: ['title']\n});\n")),(0,r.kt)("p",null,"The response will look like the following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"[\n  {\n    count: {\n      id: 10\n    },\n    min: {\n      title: 'Aggregate Todo Items'\n    },\n    min: {\n      title: 'Query Todo Items'\n    },\n  }\n]\n")),(0,r.kt)("p",null,"In this example we'll aggregate on all completed TodoItems"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const aggregateResponse = await this.service.aggregate({ completed: { is: true } }, {\n    count: ['id'],\n    min: ['title'],\n    max: ['title']\n});\n")),(0,r.kt)("h2",{id:"creating"},"Creating"),(0,r.kt)("h3",{id:"create-one"},"Create One"),(0,r.kt)("p",null,"To create a single record use the ",(0,r.kt)("inlineCode",{parentName:"p"},"createOne")," method."),(0,r.kt)("h4",{id:"example-6"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const createdRecord = await this.service.createOne({\n  title: 'Foo',\n  completed: false,\n});\n")),(0,r.kt)("h3",{id:"create-many"},"Create Many"),(0,r.kt)("p",null,"To create multiple records use the ",(0,r.kt)("inlineCode",{parentName:"p"},"createMany")," method."),(0,r.kt)("h4",{id:"example-7"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const createdRecords = await this.service.createMany([\n  { title: 'Foo', completed: false },\n  { title: 'Bar', completed: true },\n]);\n")),(0,r.kt)("h2",{id:"updating"},"Updating"),(0,r.kt)("h3",{id:"update-one"},"Update One"),(0,r.kt)("p",null,"To update a single record use the ",(0,r.kt)("inlineCode",{parentName:"p"},"updateOne")," method."),(0,r.kt)("h4",{id:"example-8"},"Example"),(0,r.kt)("p",null,"Updates the record with an id equal to 1 to completed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const updatedRecord = await this.service.updateOne(1, { completed: true });\n")),(0,r.kt)("h3",{id:"update-many"},"Update Many"),(0,r.kt)("p",null,"To update multiple records use the ",(0,r.kt)("inlineCode",{parentName:"p"},"updateMany")," method."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE")," This method returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateManyResponse")," which contains the updated record count."),(0,r.kt)("h4",{id:"example-9"},"Example"),(0,r.kt)("p",null,"Updates all ",(0,r.kt)("inlineCode",{parentName:"p"},"TodoItemEntities")," to completed if their title ends in ",(0,r.kt)("inlineCode",{parentName:"p"},"Bar")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { updatedCount } = await this.service.updateMany(\n  {completed: true}, // update\n  {completed: {is: false}, title: {like: '%Bar'}} // filter\n);\n")),(0,r.kt)("h2",{id:"deleting"},"Deleting"),(0,r.kt)("h3",{id:"delete-one"},"Delete One"),(0,r.kt)("p",null,"To delete a single record use the ",(0,r.kt)("inlineCode",{parentName:"p"},"deleteOne")," method."),(0,r.kt)("h4",{id:"example-10"},"Example"),(0,r.kt)("p",null,"Delete the record with an id equal to 1."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const deletedRecord = await this.service.deleteOne(1);\n")),(0,r.kt)("h3",{id:"delete-many"},"Delete Many"),(0,r.kt)("p",null,"To delete multiple records use the ",(0,r.kt)("inlineCode",{parentName:"p"},"deleteMany")," method."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE")," This method returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"DeleteManyResponse")," which contains the deleted record count."),(0,r.kt)("h4",{id:"example-11"},"Example"),(0,r.kt)("p",null,"Delete all ",(0,r.kt)("inlineCode",{parentName:"p"},"TodoItemEntities")," older than ",(0,r.kt)("inlineCode",{parentName:"p"},"Jan 1, 2019"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { deletedCount } = await this.service.deleteMany(\n  { created: { lte: new Date('2019-1-1') } } // filter\n);\n")),(0,r.kt)("h2",{id:"foreign-keys"},"Foreign Keys"),(0,r.kt)("p",null,"It is a common use case to include a foreign key from your entity in your DTO."),(0,r.kt)("p",null,"To do this you should add the foreign key to your entity as well as your DTO."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This section only applies when using typeorm and sequelize with relations")),(0,r.kt)("h3",{id:"example-12"},"Example"),(0,r.kt)("p",null,"Assume TodoItems can have SubTasks we would set up our SubTaskEntity using the following"),(0,r.kt)(l.Z,{defaultValue:"typeorm",groupId:"orm",values:[{label:"TypeOrm",value:"typeorm"},{label:"Sequelize",value:"sequelize"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"typeorm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="sub-task.entity.ts"',title:'"sub-task.entity.ts"'},"import {\n  Entity,\n  PrimaryGeneratedColumn,\n  Column,\n  CreateDateColumn,\n  UpdateDateColumn,\n  ObjectType,\n  ManyToOne,\n  JoinColumn,\n} from 'typeorm';\nimport { TodoItemEntity } from '../todo-item/todo-item.entity';\n\n@Entity({ name: 'sub_task' })\nexport class SubTaskEntity {\n  @PrimaryGeneratedColumn()\n  id!: number;\n\n  @Column()\n  title!: string;\n\n  @Column({ nullable: true })\n  description?: string;\n\n  @Column()\n  completed!: boolean;\n\n  // add the todoItemId to the model\n  @Column({ nullable: false, name: 'todo_item_id' })\n  todoItemId!: string;\n\n  @ManyToOne((): ObjectType<TodoItemEntity> => TodoItemEntity, (td) => td.subTasks, {\n    onDelete: 'CASCADE',\n    nullable: false,\n  })\n  // specify the join column we want to use.\n  @JoinColumn({ name: 'todo_item_id' })\n  todoItem!: TodoItemEntity;\n\n  @CreateDateColumn()\n  created!: Date;\n\n  @UpdateDateColumn()\n  updated!: Date;\n}\n"))),(0,r.kt)(i.Z,{value:"sequelize",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="sub-task.entity.ts"',title:'"sub-task.entity.ts"'},"import {\n  Table,\n  AllowNull,\n  Column,\n  ForeignKey,\n  BelongsTo,\n  CreatedAt,\n  UpdatedAt,\n  Model,\n  AutoIncrement,\n  PrimaryKey,\n} from 'sequelize-typescript';\nimport { TodoItemEntity } from '../todo-item/entity/todo-item.entity';\n\n@Table({})\nexport class SubTaskEntity extends Model<SubTaskEntity, Partial<SubTaskEntity>> {\n  @PrimaryKey\n  @AutoIncrement\n  @Column\n  id!: number;\n\n  @Column\n  title!: string;\n\n  @AllowNull\n  @Column\n  description?: string;\n\n  @Column\n  completed!: boolean;\n\n  @Column\n  @ForeignKey(() => TodoItemEntity)\n  todoItemId!: number;\n\n  @BelongsTo(() => TodoItemEntity)\n  todoItem!: TodoItemEntity;\n\n  @CreatedAt\n  created!: Date;\n\n  @UpdatedAt\n  updated!: Date;\n}\n")))),(0,r.kt)("p",null,"Then we could add the ",(0,r.kt)("inlineCode",{parentName:"p"},"todoItemId")," to the SubTaskDTO."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="sub-task.dto.ts" {24-26}',title:'"sub-task.dto.ts"',"{24-26}":!0},"import { FilterableField, IDField } from '@ptc-org/nestjs-query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\n\n@ObjectType('SubTask')\nexport class SubTaskDTO {\n  @IDField(() => ID)\n  id!: number;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField({ nullable: true })\n  description?: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n\n  // expose the todoItemId as a filterable field.\n  @FilterableField()\n  todoItemId!: string;\n}\n")),(0,r.kt)("h2",{id:"relations"},"Relations"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This section only applies when you combine your DTO and entity and are using Typeorm or Sequelize")),(0,r.kt)("p",null,"When your DTO and entity are the same class and you have relations defined, you should not decorate your the relations in the DTO with ",(0,r.kt)("inlineCode",{parentName:"p"},"@Field")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"@FilterableField"),"."),(0,r.kt)("p",null,"Instead decorate the class with ",(0,r.kt)("inlineCode",{parentName:"p"},"@CursorConnection"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@OffsetConnection"),", '@UnPagedRelation' or ",(0,r.kt)("inlineCode",{parentName:"p"},"@Relation"),"."),(0,r.kt)("h3",{id:"example-13"},"Example"),(0,r.kt)("p",null,"Assume you have the following subtask definition."),(0,r.kt)(l.Z,{defaultValue:"typeorm",groupId:"orm",values:[{label:"TypeOrm",value:"typeorm"},{label:"Sequelize",value:"sequelize"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"typeorm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="sub-task.ts"  {15,38-44}',title:'"sub-task.ts"',"":!0,"{15,38-44}":!0},"import {\n  Entity,\n  PrimaryGeneratedColumn,\n  Column,\n  CreateDateColumn,\n  UpdateDateColumn,\n  ManyToOne,\n  JoinColumn,\n} from 'typeorm';\nimport { ObjectType, ID } from '@nestjs/graphql';\nimport { FilterableField, IDField, Relation } from '@ptc-org/nestjs-query-graphql';\nimport { TodoItem } from '../todo-item/todo-item';\n\n@ObjectType()\n@Relation('todoItem', () => TodoItem, { update: { enabled: true } })\n@Entity({ name: 'sub_task' })\nexport class SubTask {\n  @IDField(() => ID)\n  @PrimaryGeneratedColumn()\n  id!: number;\n\n  @FilterableField()\n  @Column()\n  title!: string;\n\n  @FilterableField()\n  @Column({ nullable: true })\n  description?: string;\n\n  @FilterableField()\n  @Column()\n  completed!: boolean;\n\n  @FilterableField()\n  @Column({ nullable: false, name: 'todo_item_id' })\n  todoItemId!: string;\n\n  // do not decorate with @Field\n  @ManyToOne(() => TodoItem, (td) => td.subTasks, {\n    onDelete: 'CASCADE',\n    nullable: false,\n  })\n  @JoinColumn({ name: 'todo_item_id' })\n  todoItem!: TodoItem;\n\n  @FilterableField()\n  @CreateDateColumn()\n  created!: Date;\n\n  @FilterableField()\n  @UpdateDateColumn()\n  updated!: Date;\n}\n"))),(0,r.kt)(i.Z,{value:"sequelize",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="sub-task.ts" {18,45-47}',title:'"sub-task.ts"',"{18,45-47}":!0},"import {\n  Table,\n  AllowNull,\n  Column,\n  ForeignKey,\n  BelongsTo,\n  CreatedAt,\n  UpdatedAt,\n  Model,\n  AutoIncrement,\n  PrimaryKey,\n} from 'sequelize-typescript';\nimport { FilterableField, IDField } from '@ptc-org/nestjs-query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\nimport { TodoItem } from '../todo-item/entity/todo-item';\n\n@ObjectType()\n@Relation('todoItem', () => TodoItem, { update: { enabled: true } })\n@Table\nexport class SubTaskEntity extends Model<SubTaskEntity, Partial<SubTaskEntity>> {\n  @IDField(() => ID)\n  @PrimaryKey\n  @AutoIncrement\n  @Column\n  id!: number;\n\n  @FilterableField()\n  @Column\n  title!: string;\n\n  @FilterableField({ nullable: true })\n  @AllowNull\n  @Column\n  description?: string;\n\n  @FilterableField()\n  @Column\n  completed!: boolean;\n\n  @FilterableField()\n  @Column\n  @ForeignKey(() => TodoItemEntity)\n  todoItemId!: number;\n\n  // do not decorate with @Field\n  @BelongsTo(() => TodoItem)\n  todoItem!: TodoItem;\n\n  @FilterableField(() => GraphQLISODateTime)\n  @CreatedAt\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  @UpdatedAt\n  updated!: Date;\n}\n")))),(0,r.kt)("p",null,"Notice how the ",(0,r.kt)("inlineCode",{parentName:"p"},"todoItem")," is not decorated with a field decorator, instead it is exposed through the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Relation")," decorator."))}k.isMDXComponent=!0}}]);