"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[1788],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(7462),a=n(7294),o=n(6010),l=n(2466),i=n(6550),u=n(1980),s=n(7392),c=n(12);function d(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function b(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,i.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,u._X)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function f(e){var t,n,r,o,l=e.defaultValue,i=e.queryString,u=void 0!==i&&i,s=e.groupId,d=p(e),f=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:d})})),v=f[0],g=f[1],y=b({queryString:u,groupId:s}),h=y[0],T=y[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),x=k[0],I=k[1],w=function(){var e=null!=h?h:x;return m({value:e,tabValues:d})?e:null}();return(0,a.useLayoutEffect)((function(){w&&g(w)}),[w]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);g(e),T(e),I(e)}),[T,I,d]),tabValues:d}}var v=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){var t=e.className,n=e.block,i=e.selectedValue,u=e.selectValue,s=e.tabValues,c=[],d=(0,l.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==i&&(d(t),u(r))},m=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var o,l=c.indexOf(e.currentTarget)-1;n=null!=(o=c[l])?o:c[c.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",g.tabItem,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function h(e){var t=e.lazy,n=e.children,r=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=o.find((function(e){return e.props.value===r}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function T(e){var t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(h,(0,r.Z)({},e,t)))}function k(e){var t=(0,v.Z)();return a.createElement(T,(0,r.Z)({key:String(t)},e))}},7501:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>v,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=n(4866),i=n(5162),u=["components"],s={title:"v0.14.x to v0.15.x"},c=void 0,d={unversionedId:"migration-guides/v0.14.x-to-v0.15.x",id:"migration-guides/v0.14.x-to-v0.15.x",title:"v0.14.x to v0.15.x",description:"In the v0.15.x the cursor connection type was updated to allow for enabling a totalCount field. When enabling this field nestjs-query needed to explicitly name each connection type to allow each relation connection to independently enable the totalCount field.",source:"@site/docs/migration-guides/v0.14.x-to-v0.15.x.mdx",sourceDirName:"migration-guides",slug:"/migration-guides/v0.14.x-to-v0.15.x",permalink:"/nestjs-query/docs/migration-guides/v0.14.x-to-v0.15.x",draft:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/migration-guides/v0.14.x-to-v0.15.x.mdx",tags:[],version:"current",frontMatter:{title:"v0.14.x to v0.15.x"},sidebar:"docs",previous:{title:"v0.15.x to v0.16.x",permalink:"/nestjs-query/docs/migration-guides/v0.15.x-to-v0.16.x"},next:{title:"v0.13.x to v0.14.x",permalink:"/nestjs-query/docs/migration-guides/v0.13.x-to-v0.14.x"}},p={},m=[],b={toc:m},f="wrapper";function v(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)(f,(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"v0.15.x")," the cursor connection type was updated to allow for enabling a ",(0,o.kt)("inlineCode",{parentName:"p"},"totalCount")," field. When enabling this field ",(0,o.kt)("inlineCode",{parentName:"p"},"nestjs-query")," needed to explicitly name each connection type to allow each relation connection to independently enable the ",(0,o.kt)("inlineCode",{parentName:"p"},"totalCount")," field."),(0,o.kt)("p",null,"In previous versions of ",(0,o.kt)("inlineCode",{parentName:"p"},"nestjs-query")," the connection type was shared between all instances which caused the totalCount field to not always be exposed. In ",(0,o.kt)("inlineCode",{parentName:"p"},"v0.15.x")," all instances of a connection are uniquely named."),(0,o.kt)("p",null,"For example, suppose the following DTOS."),(0,o.kt)(l.Z,{defaultValue:"todoitem",values:[{label:"todo-item.dto.ts",value:"todoitem"},{label:"sub-task.dto.ts",value:"subtask"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"todoitem",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.dto.ts"',title:'"todo-item.dto.ts"'},"import { FilterableField, Connection } from '@ptc-org/nestjs-query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\nimport { SubTaskDTO } from '../../sub-task/dto/sub-task.dto';\n\n@ObjectType('TodoItem')\n@Connection('subTasks', () => SubTaskDTO, { enableTotalCount: true })\nexport class TodoItemDTO {\n  @FilterableField(() => ID)\n  id!: number;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField({ nullable: true })\n  description?: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n\n  @FilterableField()\n  priority!: number;\n}\n\n"))),(0,o.kt)(i.Z,{value:"subtask",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="sub-task.dto.ts"',title:'"sub-task.dto.ts"'},"import { FilterableField, Relation } from '@ptc-org/nestjs-query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\nimport { TodoItemDTO } from '../../todo-item/dto/todo-item.dto';\n\n@ObjectType('SubTask')\n@Relation('todoItem', () => TodoItemDTO, { disableRemove: true })\nexport class SubTaskDTO {\n  @FilterableField(() => ID)\n  id!: number;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField({ nullable: true })\n  description?: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n\n  @FilterableField()\n  todoItemId!: string;\n}\n\n")))),(0,o.kt)("p",null,"In previous versions the generated graphql would have been"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type TodoItem {\n  id: ID!\n  title: String!\n  description: String\n  completed: Boolean!\n  created: DateTime!\n  updated: DateTime!\n  age: Float!\n  priority: Float!\n  subTasks(\n    paging: CursorPaging = { first: 10 }\n\n    filter: SubTaskFilter = {}\n\n    sorting: [SubTaskSort!] = []\n  ): SubTaskConnection!\n}\n\ntype SubTaskConnection {\n  pageInfo: PageInfo!\n  edges: [SubTaskEdge!]!\n}\n")),(0,o.kt)("p",null,"In the latest version the relation gets its own connection type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type TodoItem {\n  id: ID!\n  title: String!\n  description: String\n  completed: Boolean!\n  created: DateTime!\n  updated: DateTime!\n  age: Float!\n  priority: Float!\n  subTasks(\n    paging: CursorPaging = { first: 10 }\n\n    filter: SubTaskFilter = {}\n\n    sorting: [SubTaskSort!] = []\n  ): TodoItemSubTasksConnection!\n}\n\ntype TodoItemSubTasksConnection {\n  pageInfo: PageInfo!\n  edges: [SubTaskEdge!]!\n  totalCount: Int!\n}\n")))}v.isMDXComponent=!0}}]);