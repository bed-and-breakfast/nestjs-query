"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[7255],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,y=d["".concat(i,".").concat(c)]||d[c]||m[c]||o;return n?a.createElement(y,l(l({ref:t},s),{},{components:n})):a.createElement(y,l({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:r,l[1]=p;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(4334);const o={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7462),r=n(7294),o=n(4334),l=n(2466),p=n(6550),i=n(1980),u=n(7392),s=n(12);function d(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function c(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function y(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,p.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,i._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function g(e){var t,n,a,o,l=e.defaultValue,p=e.queryString,i=void 0!==p&&p,u=e.groupId,d=m(e),g=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!c({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:d})})),T=g[0],k=g[1],f=y({queryString:i,groupId:u}),h=f[0],I=f[1],v=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,s.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=v[0],b=v[1],C=function(){var e=null!=h?h:N;return c({value:e,tabValues:d})?e:null}();return(0,r.useLayoutEffect)((function(){C&&k(C)}),[C]),{selectedValue:T,selectValue:(0,r.useCallback)((function(e){if(!c({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);k(e),I(e),b(e)}),[I,b,d]),tabValues:d}}var T=n(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){var t=e.className,n=e.block,p=e.selectedValue,i=e.selectValue,u=e.tabValues,s=[],d=(0,l.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,n=s.indexOf(t),a=u[n].value;a!==p&&(d(t),i(a))},c=function(e){var t,n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var a,r=s.indexOf(e.currentTarget)+1;n=null!=(a=s[r])?a:s[0];break;case"ArrowLeft":var o,l=s.indexOf(e.currentTarget)-1;n=null!=(o=s[l])?o:s[s.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:p===t?0:-1,"aria-selected":p===t,key:t,ref:function(e){return s.push(e)},onKeyDown:c,onClick:m},l,{className:(0,o.Z)("tabs__item",k.tabItem,null==l?void 0:l.className,{"tabs__item--active":p===t})}),null!=n?n:t)})))}function h(e){var t=e.lazy,n=e.children,a=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=o.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function I(e){var t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},r.createElement(f,(0,a.Z)({},e,t)),r.createElement(h,(0,a.Z)({},e,t)))}function v(e){var t=(0,T.Z)();return r.createElement(I,(0,a.Z)({key:String(t)},e))}},9198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>T,frontMatter:()=>u,metadata:()=>d,toc:()=>c});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=n(4866),p=n(5162),i=["components"],u={title:"Types"},s=void 0,d={unversionedId:"graphql/types",id:"graphql/types",title:"Types",description:"@ptc-org/nestjs-query-graphql provides a number of types. Most will be automatically generated for you when you create a",source:"@site/docs/graphql/types.mdx",sourceDirName:"graphql",slug:"/graphql/types",permalink:"/nestjs-query/docs/graphql/types",draft:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/graphql/types.mdx",tags:[],version:"current",frontMatter:{title:"Types"},sidebar:"docs",previous:{title:"Relations",permalink:"/nestjs-query/docs/graphql/relations"},next:{title:"Federation",permalink:"/nestjs-query/docs/graphql/federation"}},m={},c=[{value:"ArgsTypes",id:"argstypes",level:2},{value:"QueryArgsType",id:"queryargstype",level:3},{value:"Usage",id:"usage",level:4},{value:"ObjectTypes",id:"objecttypes",level:2},{value:"ConnectionType",id:"connectiontype",level:3},{value:"Usage",id:"usage-1",level:4},{value:"UpdateManyResponseType",id:"updatemanyresponsetype",level:3},{value:"Usage",id:"usage-2",level:4},{value:"DeleteManyResponseType",id:"deletemanyresponsetype",level:3},{value:"Usage",id:"usage-3",level:4},{value:"InputTypes",id:"inputtypes",level:2},{value:"FilterType",id:"filtertype",level:3},{value:"SortType",id:"sorttype",level:3},{value:"Fields",id:"fields",level:4},{value:"CreateOneInputType",id:"createoneinputtype",level:3},{value:"Usage",id:"usage-4",level:4},{value:"CreateManyInputType",id:"createmanyinputtype",level:3},{value:"Usage",id:"usage-5",level:4},{value:"UpdateOneInputType",id:"updateoneinputtype",level:3},{value:"Usage",id:"usage-6",level:4},{value:"UpdateManyInputType",id:"updatemanyinputtype",level:3},{value:"Usage",id:"usage-7",level:4},{value:"DeleteOneInputType",id:"deleteoneinputtype",level:3},{value:"Usage",id:"usage-8",level:4},{value:"DeleteManyInputType",id:"deletemanyinputtype",level:3},{value:"Usage",id:"usage-9",level:4}],y={toc:c},g="wrapper";function T(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(g,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@ptc-org/nestjs-query-graphql")," provides a number of types. Most will be automatically generated for you when you create a\nresolver. However, you can use many of the types in your own code for custom endpoints."),(0,o.kt)("p",null,"The following examples are based on the following ",(0,o.kt)("inlineCode",{parentName:"p"},"TodoItemDTO")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { FilterableField, IDField } from '@ptc-org/nestjs-query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\n\n@ObjectType('TodoItem')\nexport class TodoItemDTO {\n  @IDField(() => ID)\n  id!: string;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n}\n\n")),(0,o.kt)("h2",{id:"argstypes"},"ArgsTypes"),(0,o.kt)("h3",{id:"queryargstype"},"QueryArgsType"),(0,o.kt)("p",null,"Args type used in ",(0,o.kt)("inlineCode",{parentName:"p"},"read")," endpoints to allow ",(0,o.kt)("inlineCode",{parentName:"p"},"filtering"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"paging"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"sorting"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryArgsType")," will generate an ",(0,o.kt)("inlineCode",{parentName:"p"},"ArgsType")," that will require the user to provide three arguments."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"filter?")," - A filter that should be used to find records to update. See ",(0,o.kt)("a",{parentName:"li",href:"#filtertype"},"FilterType")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"paging?")," - Options to page of result."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sorting?")," - Optional array to allow sorting of results. See ",(0,o.kt)("a",{parentName:"li",href:"#sorttype"},"SortType"),".")),(0,o.kt)("h4",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { QueryArgsType } from '@ptc-org/nestjs-query-graphql';\nimport { ArgsType } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\n@ArgsType()\nexport class TodoItemQuery extends QueryArgsType(TodoItemDTO) {}\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"objecttypes"},"ObjectTypes"),(0,o.kt)("h3",{id:"connectiontype"},"ConnectionType"),(0,o.kt)("p",null,"Implementation of ",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/relay/graphql/connections.htm"},"connections"),". Useful for large result sets\nwhere the end user should be able to page through the results."),(0,o.kt)("h4",{id:"usage-1"},"Usage"),(0,o.kt)(l.Z,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Schema",value:"schema"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"code",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { QueryArgsType } from '@ptc-org/nestjs-query-graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\nexport const TodoItemQueryArgs = QueryArgsType(TodoItemDTO)\nexport const TodoItemConnection = TodoItemQueryArgs.ConnectionType;\n"))),(0,o.kt)(p.Z,{value:"schema",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar ConnectionCursor\n\ntype TodoItemConnection {\n  pageInfo: PageInfo!\n  edges: [TodoItemEdge!]!\n}\n\ntype TodoItemEdge {\n  node: TodoItem!\n  cursor: ConnectionCursor!\n}\n\ntype PageInfo {\n  hasNextPage: Boolean\n  hasPreviousPage: Boolean\n  startCursor: ConnectionCursor\n  endCursor: ConnectionCursor\n}\n")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"updatemanyresponsetype"},"UpdateManyResponseType"),(0,o.kt)("p",null,"Response from ",(0,o.kt)("inlineCode",{parentName:"p"},"updateMany")," mutations."),(0,o.kt)("h4",{id:"usage-2"},"Usage"),(0,o.kt)(l.Z,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Schema",value:"schema"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"code",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { UpdateManyResponseType } from '@ptc-org/nestjs-query-graphql';\n\nexport const UpdateManyResponse = UpdateManyResponseType()\n"))),(0,o.kt)(p.Z,{value:"schema",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type UpdateManyResponse {\n  updatedCount: Int!\n}\n")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"deletemanyresponsetype"},"DeleteManyResponseType"),(0,o.kt)("p",null,"Response from ",(0,o.kt)("inlineCode",{parentName:"p"},"deleteMany")," mutations."),(0,o.kt)("h4",{id:"usage-3"},"Usage"),(0,o.kt)(l.Z,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Schema",value:"schema"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"code",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { DeleteManyResponseType } from '@ptc-org/nestjs-query-graphql';\n\nexport const UpdateManyResponse = DeleteManyResponseType()\n"))),(0,o.kt)(p.Z,{value:"schema",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type DeleteManyResponse {\n  deletedCount: Int!\n}\n")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"inputtypes"},"InputTypes"),(0,o.kt)("h3",{id:"filtertype"},"FilterType"),(0,o.kt)("p",null,"GraphQL implementation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"@ptc-org/nestjs-query-core")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Filter")," type."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"FilterType")," is dynamically created based on the fields in the ",(0,o.kt)("inlineCode",{parentName:"p"},"DTO")," annotated with ",(0,o.kt)("a",{parentName:"p",href:"/nestjs-query/docs/graphql/dtos#filterablefield"},"@FilterableField"),"."),(0,o.kt)("p",null,"Along with the dynamically create fields filter also has the following static fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"and")," - Allows for joining multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"Filters")," with using an ",(0,o.kt)("inlineCode",{parentName:"p"},"AND")," condition."),(0,o.kt)("p",{parentName:"li"},"For example, find all todo items that ",(0,o.kt)("inlineCode",{parentName:"p"},"start with 'Foo' AND end in 'Bar'"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'todoItems(filter: {\n  and: [\n    {title: {like: "Foo%"}},\n    {title: {like: "%Bar"}},\n  ]\n}) {\n  #...select your fields\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"or")," - Allows for joining multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"Filters")," using an ",(0,o.kt)("inlineCode",{parentName:"p"},"OR")," condition."),(0,o.kt)("p",{parentName:"li"},"  For example, find all todo items that ",(0,o.kt)("inlineCode",{parentName:"p"},"(are completed AND start with 'Foo') OR (are not completed and end in 'Bar')"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'todoItems(filter: {\n  or: [\n    {title: {eq: "Foo"}, completed: {is: true}},\n    {title: {eq: "Bar"}, completed: {is: false}},\n  ]\n}) {\n  #...select your fields\n}\n')))),(0,o.kt)(l.Z,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Schema",value:"schema"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"code",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { FilterType } from '@ptc-org/nestjs-query-graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\nexport const TodoItemFilter = FilterType(TodoItemDTO)\n"))),(0,o.kt)(p.Z,{value:"schema",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input TodoItemFilter {\n  and: [TodoItemFilter!]\n  or: [TodoItemFilter!]\n  id: IDFilterComparison\n  title: StringFieldComparison\n  completed: BooleanFieldComparison\n  created: DateFieldComparison\n  updated: DateFieldComparison\n}\n\ninput IDFilterComparison {\n  is: Boolean\n  isNot: Boolean\n  eq: ID\n  neq: ID\n  gt: ID\n  gte: ID\n  lt: ID\n  lte: ID\n  like: ID\n  notLike: ID\n  iLike: ID\n  notILike: ID\n  in: [ID!]\n  notIn: [ID!]\n}\n\ninput StringFieldComparison {\n  is: Boolean\n  isNot: Boolean\n  eq: String\n  neq: String\n  gt: String\n  gte: String\n  lt: String\n  lte: String\n  like: String\n  notLike: String\n  iLike: String\n  notILike: String\n  in: [String!]\n  notIn: [String!]\n}\n\ninput BooleanFieldComparison {\n  is: Boolean\n  isNot: Boolean\n}\n\ninput DateFieldComparison {\n  is: Boolean\n  isNot: Boolean\n  eq: DateTime\n  neq: DateTime\n  gt: DateTime\n  gte: DateTime\n  lt: DateTime\n  lte: DateTime\n  in: [DateTime!]\n  notIn: [DateTime!]\n}\n")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"sorttype"},"SortType"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"SortType")," allows you to sort results."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE")," This type is automatically created when using ",(0,o.kt)("a",{parentName:"p",href:"#queryargstype"},"QueryArgsType"),"."),(0,o.kt)("p",null,"For more comprehensive examples take a look at the ",(0,o.kt)("a",{parentName:"p",href:"./queries/sorting"},"Sorting Docs")),(0,o.kt)("h4",{id:"fields"},"Fields"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"field")," - The field to sort on. The is an ENUM of ",(0,o.kt)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/dtos#filterablefield"},"@FilterableFields")," defined in the DTO."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"direction")," - The direction to sort the field ",(0,o.kt)("inlineCode",{parentName:"li"},"ASC")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"DESC"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nulls?")," - On supported storage engines you can specify the null sort order ",(0,o.kt)("inlineCode",{parentName:"li"},"NULLS_FIRST"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"NULLS_LAST"))),(0,o.kt)(l.Z,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Schema",value:"schema"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"code",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { QueryArgsType } from '@ptc-org/nestjs-query-graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\nexport const TodoItemQueryArgs = QueryArgsType(TodoItemDTO)\nexport const TodoItemSort = TodoItemQueryArgs.SortType;\n"))),(0,o.kt)(p.Z,{value:"schema",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input TodoItemSort {\n  field: TodoItemSortFields!\n  direction: SortDirection!\n  nulls: SortNulls\n}\n\nenum TodoItemSortFields {\n  id\n  title\n  completed\n  created\n  updated\n}\n\nenum SortDirection {\n  ASC\n  DESC\n}\n\nenum SortNulls {\n  NULLS_FIRST\n  NULLS_LAST\n}\n\n")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"createoneinputtype"},"CreateOneInputType"),(0,o.kt)("p",null,"Input type for ",(0,o.kt)("inlineCode",{parentName:"p"},"createOne")," mutations."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE")," Dont forget to annotate your DTO with ",(0,o.kt)("inlineCode",{parentName:"p"},"@InputType()")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"@nestjs/graphql"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE")," Your DTO should be one that you want to use for input. For example you may not want to let the end user to\nspecify the ",(0,o.kt)("inlineCode",{parentName:"p"},"created")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"updated")," fields so you would create a new DTO just for input."),(0,o.kt)("h4",{id:"usage-4"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { CreateOneInputType } from '@ptc-org/nestjs-query-graphql';\nimport { InputType } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\n@InputType('TodoItemInput')\nexport class TodoItemInputDTO {\n  @IsString()\n  @Field({nullable: true})\n  title?: string;\n\n  @IsBoolean()\n  @Field({nullable: true})\n  completed?: string;\n}\n\n@InputType()\nexport class CreateOneTodoItemInput extends CreateOneInputType('todoItem', TodoItemInputDTO) {}\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"createmanyinputtype"},"CreateManyInputType"),(0,o.kt)("p",null,"Input type for ",(0,o.kt)("inlineCode",{parentName:"p"},"createMany")," mutations."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE")," Dont forget to annotate your DTO with ",(0,o.kt)("inlineCode",{parentName:"p"},"@InputType()")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"@nestjs/graphql"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE")," Your DTO should be one that you want to use for input. For example you may not want to let the end user to\nspecify the ",(0,o.kt)("inlineCode",{parentName:"p"},"created")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"updated")," fields so you would create a new DTO just for input."),(0,o.kt)("h4",{id:"usage-5"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { CreateManyInputType } from '@ptc-org/nestjs-query-graphql';\nimport { InputType } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\n@InputType('TodoItemInput')\nexport class TodoItemInputDTO {\n  @IsString()\n  @Field({nullable: true})\n  title?: string;\n\n  @IsBoolean()\n  @Field({nullable: true})\n  completed?: string;\n}\n\n@InputType()\nexport class CreateManyTodoItemsInput extends CreateManyInputType('todoItems', TodoItemInputDTO) {}\n")),(0,o.kt)("h3",{id:"updateoneinputtype"},"UpdateOneInputType"),(0,o.kt)("p",null,"InputType type for ",(0,o.kt)("inlineCode",{parentName:"p"},"updateOne")," mutations."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"UpdateOneInputType")," will generate an ",(0,o.kt)("inlineCode",{parentName:"p"},"InputType")," that will require the user to provide two fields."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id")," - The id of the record to update"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"update")," - A record with fields to update.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Dont forget to annotate your DTO with ",(0,o.kt)("inlineCode",{parentName:"p"},"@InputType()")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"@nestjs/graphql"),".")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Your DTO should be one that you want to use for updates. For example you may not want to let the end user to\nupdate the ",(0,o.kt)("inlineCode",{parentName:"p"},"created")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"updated")," fields so you would create a new DTO just for updates.")),(0,o.kt)("h4",{id:"usage-6"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { UpdateOneInputType } from '@ptc-org/nestjs-query-graphql';\nimport { InputType } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\n@InputType('TodoItemUpdateInput')\nexport class TodoItemUpdateDTO {\n  @IsOptional()\n  @IsString()\n  @Field({ nullable: true })\n  title?: string;\n\n  @IsOptional()\n  @IsBoolean()\n  @Field({ nullable: true })\n  completed?: boolean;\n}\n\n@InputType()\nexport class UpdateOneTodoItemInput extends UpdateOneInputType(TodoItemDTO, TodoItemUpdateDTO) {}\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"updatemanyinputtype"},"UpdateManyInputType"),(0,o.kt)("p",null,"Input type for ",(0,o.kt)("inlineCode",{parentName:"p"},"updateMany")," mutations."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"UpdateOneInputType")," will generate an ",(0,o.kt)("inlineCode",{parentName:"p"},"InputType")," that will require the user to provide two arguments."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"filter")," - The filter that should be used to find records to update. See ",(0,o.kt)("a",{parentName:"li",href:"#filtertype"},"FilterType")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"update")," - The update to apply to each record found.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE")," Dont forget to annotate your DTO with ",(0,o.kt)("inlineCode",{parentName:"p"},"@InputType()")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"@nestjs/graphql"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE")," Your DTO should be one that you want to use for input. For example you may not want to let the end user to\nspecify the ",(0,o.kt)("inlineCode",{parentName:"p"},"created")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"updated")," fields so you would create a new DTO just for input."),(0,o.kt)("h4",{id:"usage-7"},"Usage"),(0,o.kt)("p",null,"In this example we use the read DTO for the FilterType, and a different update DTO."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { CreateOneInputType, FilterType } from '@ptc-org/nestjs-query-graphql';\nimport { InputType } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\n@InputType('TodoItemUpdate')\nexport class TodoItemUpdateDTO {\n  @IsOptional()\n  @IsString()\n  @Field({ nullable: true })\n  title?: string;\n\n  @IsOptional()\n  @IsBoolean()\n  @Field({ nullable: true })\n  completed?: boolean;\n}\n\n@InputType()\nexport class UpdateManyTodoItemsInput extends UpdateManyInputType(\n  TodoItemDTO, // filter\n  TodoItemUpdateDTO // update DTO\n) {}\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"deleteoneinputtype"},"DeleteOneInputType"),(0,o.kt)("p",null,"InputType type for ",(0,o.kt)("inlineCode",{parentName:"p"},"deleteOne")," mutations."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"DeleteOneInputType")," will generate an ",(0,o.kt)("inlineCode",{parentName:"p"},"InputType")," that will require the user to provide the id of the record to delete."),(0,o.kt)("h4",{id:"usage-8"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { DeleteOneInputType } from '@ptc-org/nestjs-query-graphql';\nimport { InputType } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\n@InputType()\nexport class DeleteOneTodoItemInput extends DeleteOneInputType(TodoItemDTO) {}\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"deletemanyinputtype"},"DeleteManyInputType"),(0,o.kt)("p",null,"Input type type for ",(0,o.kt)("inlineCode",{parentName:"p"},"deleteMany")," mutations."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"DeleteManyInputType")," will generate an ",(0,o.kt)("inlineCode",{parentName:"p"},"InputType")," that will require the user to provide:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"filter")," - A filter used to find records to delete. See ",(0,o.kt)("a",{parentName:"li",href:"#filtertype"},"FilterType"))),(0,o.kt)("h4",{id:"usage-9"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { CreateOneInputType, FilterType } from '@ptc-org/nestjs-query-graphql';\nimport { InputType } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\n@InputType()\nexport class DeleteManyTodoItemsInput extends DeleteManyInputType(TodoItemDTO) {}\n")))}T.isMDXComponent=!0}}]);