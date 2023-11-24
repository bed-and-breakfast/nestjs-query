"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[9606],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),c=r,b=p["".concat(s,".").concat(c)]||p[c]||m[c]||o;return n?a.createElement(b,i(i({ref:t},d),{},{components:n})):a.createElement(b,i({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(4334);const o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(7462),r=n(7294),o=n(4334),i=n(2466),l=n(6550),s=n(1980),u=n(7392),d=n(12);function p(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function c(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function b(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,l.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function y(e){var t,n,a,o,i=e.defaultValue,l=e.queryString,s=void 0!==l&&l,u=e.groupId,p=m(e),y=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!c({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:p})})),g=y[0],f=y[1],T=b({queryString:s,groupId:u}),v=T[0],h=T[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,d.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),O=k[0],I=k[1],D=function(){var e=null!=v?v:O;return c({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){D&&f(D)}),[D]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!c({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);f(e),h(e),I(e)}),[h,I,p]),tabValues:p}}var g=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function T(e){var t=e.className,n=e.block,l=e.selectedValue,s=e.selectValue,u=e.tabValues,d=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==l&&(p(t),s(a))},c=function(e){var t,n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var a,r=d.indexOf(e.currentTarget)+1;n=null!=(a=d[r])?a:d[0];break;case"ArrowLeft":var o,i=d.indexOf(e.currentTarget)-1;n=null!=(o=d[i])?o:d[d.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return d.push(e)},onKeyDown:c,onClick:m},i,{className:(0,o.Z)("tabs__item",f.tabItem,null==i?void 0:i.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function v(e){var t=e.lazy,n=e.children,a=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=o.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function h(e){var t=y(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(T,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function k(e){var t=(0,g.Z)();return r.createElement(h,(0,a.Z)({key:String(t)},e))}},5725:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>g,frontMatter:()=>u,metadata:()=>p,toc:()=>c});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(4866),l=n(5162),s=["components"],u={title:"Relations"},d=void 0,p={unversionedId:"persistence/typegoose/relations",id:"persistence/typegoose/relations",title:"Relations",description:"Relations work a little differently in typegoose when compared to other relational ORMs such as sequelize or",source:"@site/docs/persistence/typegoose/relations.mdx",sourceDirName:"persistence/typegoose",slug:"/persistence/typegoose/relations",permalink:"/nestjs-query/docs/persistence/typegoose/relations",draft:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/persistence/typegoose/relations.mdx",tags:[],version:"current",frontMatter:{title:"Relations"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/nestjs-query/docs/persistence/typegoose/getting-started"},next:{title:"Custom Service",permalink:"/nestjs-query/docs/persistence/typegoose/custom-service"}},m={},c=[{value:"One to Many/Many To One Example",id:"one-to-manymany-to-one-example",level:2},{value:"Many To Many Example",id:"many-to-many-example",level:2}],b={toc:c},y="wrapper";function g(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)(y,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Relations work a little differently in ",(0,o.kt)("inlineCode",{parentName:"p"},"typegoose")," when compared to other relational ORMs such as ",(0,o.kt)("inlineCode",{parentName:"p"},"sequelize")," or\n",(0,o.kt)("inlineCode",{parentName:"p"},"typeorm"),". You can read more about relations (references) in ",(0,o.kt)("inlineCode",{parentName:"p"},"typegoose")," ","[here]","(",(0,o.kt)("a",{parentName:"p",href:"https://mongoosejs.com/docs/populate"},"https://mongoosejs.com/docs/populate"),"\n.html)"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"There are multiple ways to set of references in Typegoose. These are intended as a starting point.")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Filtering on references is not supported by Typegoose.")),(0,o.kt)("h2",{id:"one-to-manymany-to-one-example"},"One to Many/Many To One Example"),(0,o.kt)("p",null,"To set up a one to many/many to one relationship in Typegoose, you will store a reference in your document."),(0,o.kt)("p",null,"For example, lets add sub tasks to our todo items by storing a ",(0,o.kt)("inlineCode",{parentName:"p"},"todoItem")," ref on our ",(0,o.kt)("inlineCode",{parentName:"p"},"subTask")," and an array of sub-tasks on our ",(0,o.kt)("inlineCode",{parentName:"p"},"todoItem")," entity."),(0,o.kt)(i.Z,{defaultValue:"todoitem",values:[{label:"TodoItemEntity",value:"todoitem"},{label:"SubTaskEntity",value:"subtask"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"todoitem",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item/todo-item.entity.ts" {24-25}',title:'"todo-item/todo-item.entity.ts"',"{24-25}":!0},"import { Prop, modelOptions } from '@typegoose/typegoose';\nimport { Base } from '@typegoose/typegoose/lib/defaultClasses';\n\n@modelOptions({ schemaOptions: { timestamps: true } })\nexport class TodoItemEntity extends Base {\n  @Prop({ required: true })\n  title!: string;\n\n  @Prop()\n  description?: string;\n\n  @Prop({ required: true })\n  completed!: boolean;\n\n  @Prop({ default: Date.now })\n  createdAt!: Date;\n\n  @Prop({ default: Date.now })\n  updatedAt!: Date;\n\n  @Prop({ default: 0 })\n  priority!: number;\n\n  @Prop({ ref: () => SubTaskEntity })\n  subTasks: Ref<SubTaskEntity>[];\n\n  @Prop()\n  createdBy?: string;\n\n  @Prop()\n  updatedBy?: string;\n}\n"))),(0,o.kt)(l.Z,{value:"subtask",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="sub-task/sub-task.entity.ts" {15-16}',title:'"sub-task/sub-task.entity.ts"',"{15-16}":!0},"import { Prop, modelOptions, Ref } from '@typegoose/typegoose';\nimport { Base } from '@typegoose/typegoose/lib/defaultClasses';\n\n@modelOptions({ schemaOptions: { timestamps: true } })\nexport class SubTaskEntity extends Base {\n  @Prop({ required: true })\n  title!: string;\n\n  @Prop()\n  description?: string;\n\n  @Prop({ required: true })\n  completed!: boolean;\n\n  @Prop({ ref: () => TodoItemEntity, required: true })\n  todoItem!: Ref<TodoItemEntity>;\n\n  @Prop()\n  createdAt!: Date;\n\n  @Prop()\n  updatedAt!: Date;\n\n  @Prop()\n  createdBy?: string;\n\n  @Prop()\n  updatedBy?: string;\n}\n")))),(0,o.kt)("p",null,"Now that we have the relationships defined, we can add the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Relation")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@Connection")," to our DTOs"),(0,o.kt)(i.Z,{defaultValue:"todoitem",values:[{label:"TodoItemDTO",value:"todoitem"},{label:"SubTaskDTO",value:"subtask"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"todoitem",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item/todo-item.dto.ts"',title:'"todo-item/todo-item.dto.ts"'},"import { FilterableField, IDField, KeySet, Connection } from '@ptc-org/nestjs-query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime, Field } from '@nestjs/graphql';\nimport { SubTaskDTO } from '../../sub-task/dto/sub-task.dto';\n\n@ObjectType('TodoItem')\n@KeySet(['id'])\n// disable the remove because mongoose does not support removing a virtual\n@Connection('subTasks', () => SubTaskDTO, { update: { enabled: true } })\nexport class TodoItemDTO {\n  @IDField(() => ID)\n  id!: string;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField({ nullable: true })\n  description?: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  createdAt!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updatedAt!: Date;\n\n  @Field()\n  age!: number;\n\n  @FilterableField()\n  priority!: number;\n\n  @FilterableField({ nullable: true })\n  createdBy?: string;\n\n  @FilterableField({ nullable: true })\n  updatedBy?: string;\n}\n"))),(0,o.kt)(l.Z,{value:"subtask",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="sub-task/sub-task.dto.ts"',title:'"sub-task/sub-task.dto.ts"'},"import { FilterableField, IDField, KeySet, Relation } from '@ptc-org/nestjs-query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\nimport { TodoItemDTO } from '../../todo-item/dto/todo-item.dto';\n\n@ObjectType('SubTask')\n@KeySet(['id'])\n// disable the remove because a sub task cannot exist without a todoitem\n@Relation('todoItem', () => TodoItemDTO, { update: { enabled: true } })\nexport class SubTaskDTO {\n  @IDField(() => ID)\n  id!: string;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField({ nullable: true })\n  description?: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  createdAt!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updatedAt!: Date;\n\n  @FilterableField({ nullable: true })\n  createdBy?: string;\n\n  @FilterableField({ nullable: true })\n  updatedBy?: string;\n}\n")))),(0,o.kt)("h2",{id:"many-to-many-example"},"Many To Many Example"),(0,o.kt)("p",null,"In this example, we'll add ",(0,o.kt)("inlineCode",{parentName:"p"},"tags")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"todoItems")," by storing an array of ",(0,o.kt)("inlineCode",{parentName:"p"},"tag")," references on the ",(0,o.kt)("inlineCode",{parentName:"p"},"todoItems"),"."),(0,o.kt)(i.Z,{defaultValue:"todoitem",values:[{label:"TodoItemEntity",value:"todoitem"},{label:"TagEntity",value:"tag"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"todoitem",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item/todo-item.entity.ts" {21-23}',title:'"todo-item/todo-item.entity.ts"',"{21-23}":!0},"import { Prop, modelOption, Ref } from '@typegoose/typegoose';\nimport { Base } from '@typegoose/typegoose/lib/defaultClasses';\n\n@modelOptions({ schemaOptions: { timestamps: true } })\nexport class TodoItemEntity extends Base {\n  @Prop({ required: true })\n  title!: string;\n\n  @Prop()\n  description?: string;\n\n  @Prop({ required: true })\n  completed!: boolean;\n\n  @Prop({ default: Date.now })\n  createdAt!: Date;\n\n  @Prop({ default: Date.now })\n  updatedAt!: Date;\n\n  @Prop({ ref: () => TagEntity })\n  tags!: Ref<TagEntity>[];\n\n  @Prop({ default: 0 })\n  priority!: number;\n\n  @Prop()\n  createdBy?: string;\n\n  @Prop()\n  updatedBy?: string;\n\n  public get id(): string {\n    // eslint-disable-next-line no-underscore-dangle\n    return this._id.toHexString();\n  }\n}\n\n"))),(0,o.kt)(l.Z,{value:"tag",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="tag/tag.entity.ts" {33-38}',title:'"tag/tag.entity.ts"',"{33-38}":!0},"import { Base } from '@typegoose/typegoose/lib/defaultClasses';\nimport { Prop, modelOptions, Ref } from '@typegoose/typegoose';\nimport { Types } from 'mongoose';\nimport { TodoItemEntity } from '../todo-item/todo-item.entity';\n\n@modelOptions({\n  schemaOptions: {\n    timestamps: true,\n    collection: 'tags',\n    toObject: { virtuals: true },\n  },\n})\nexport class TagEntity implements Base {\n  _id!: Types.ObjectId;\n\n  id!: string;\n\n  @Prop({ required: true })\n  name!: string;\n\n  @Prop()\n  createdAt!: Date;\n\n  @Prop()\n  updatedAt!: Date;\n\n  @Prop()\n  createdBy?: string;\n\n  @Prop()\n  updatedBy?: string;\n\n  @Prop({\n    ref: 'TodoItemEntity',\n    localField: '_id',\n    foreignField: 'tags',\n  })\n  todoItems?: Ref<TodoItemEntity>[];\n}\n")))),(0,o.kt)("p",null,"Now that we have the relationship defined, we can add the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Connection")," to our DTOS"),(0,o.kt)(i.Z,{defaultValue:"todoitem",values:[{label:"TodoItemDTO",value:"todoitem"},{label:"TagDTO",value:"tag"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"todoitem",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item/todo-item.dto.ts"',title:'"todo-item/todo-item.dto.ts"'},"import { FilterableField, IDField, KeySet, Connection } from '@ptc-org/nestjs-query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime, Field } from '@nestjs/graphql';\nimport { TagDTO } from '../../tag/dto/tag.dto';\n\n@ObjectType('TodoItem')\n@KeySet(['id'])\n@Connection('tags', () => TagDTO)\nexport class TodoItemDTO {\n  @IDField(() => ID)\n  id!: string;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField({ nullable: true })\n  description?: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  createdAt!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updatedAt!: Date;\n\n  @Field()\n  age!: number;\n\n  @FilterableField()\n  priority!: number;\n\n  @FilterableField({ nullable: true })\n  createdBy?: string;\n\n  @FilterableField({ nullable: true })\n  updatedBy?: string;\n}\n"))),(0,o.kt)(l.Z,{value:"tag",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="tag/tag.dto.ts"',title:'"tag/tag.dto.ts"'},"import { FilterableField, IDField, KeySet, Connection } from '@ptc-org/nestjs-query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\nimport { TodoItemDTO } from '../../todo-item/dto/todo-item.dto';\n\n@ObjectType('Tag')\n@KeySet(['id'])\n// disable update and remove since it is a virtual in the entity\n@Connection('todoItems', () => TodoItemDTO)\nexport class TagDTO {\n  @IDField(() => ID)\n  id!: string;\n\n  @FilterableField()\n  name!: string;\n\n  @FilterableField(() => GraphQLISODateTime)\n  createdAt!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updatedAt!: Date;\n\n  @FilterableField({ nullable: true })\n  createdBy?: string;\n\n  @FilterableField({ nullable: true })\n  updatedBy?: string;\n}\n")))))}g.isMDXComponent=!0}}]);