"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[5763],{1347:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var o=t(8215);const r={tabItem:"tabItem_Ymn6"};var s=t(4848);function i(e){var n=e.children,t=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.A)(r.tabItem,i),hidden:t,children:n})}},3384:(e,n,t)=>{t.d(n,{A:()=>I});var o=t(6540),r=t(8215),s=t(5236),i=t(6347),a=t(8385),l=t(5793),c=t(7422),d=t(1038);function u(e){var n,t;return null!=(n=null==(t=o.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,o.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,o.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.X)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,s=(0,i.W6)(),a=function(e){var n=e.queryString,t=void 0!==n&&n,o=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=o?o:null}({queryString:t,groupId:r});return[(0,l.aZ)(a),(0,o.useCallback)((function(e){if(a){var n=new URLSearchParams(s.location.search);n.set(a,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[a,s])]}function g(e){var n,t,r,s,i=e.defaultValue,l=e.queryString,c=void 0!==l&&l,u=e.groupId,g=h(e),y=(0,o.useState)((function(){return function(e){var n,t=e.defaultValue,o=e.tabValues;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:o}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+o.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=o.find((function(e){return e.default})))?n:o[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:g})})),f=y[0],x=y[1],v=m({queryString:c,groupId:u}),j=v[0],T=v[1],I=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),t=(0,d.Dv)(n),r=t[0],s=t[1],[r,(0,o.useCallback)((function(e){n&&s.set(e)}),[n,s])]),b=I[0],C=I[1],w=function(){var e=null!=j?j:b;return p({value:e,tabValues:g})?e:null}();return(0,a.A)((function(){w&&x(w)}),[w]),{selectedValue:f,selectValue:(0,o.useCallback)((function(e){if(!p({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);x(e),T(e),C(e)}),[T,C,g]),tabValues:g}}var y=t(195);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(4848);function v(e){var n=e.className,t=e.block,o=e.selectedValue,i=e.selectValue,a=e.tabValues,l=[],c=(0,s.a_)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=l.indexOf(n),r=a[t].value;r!==o&&(c(n),i(r))},u=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var o,r=l.indexOf(e.currentTarget)+1;t=null!=(o=l[r])?o:l[0];break;case"ArrowLeft":var s,i=l.indexOf(e.currentTarget)-1;t=null!=(s=l[i])?s:l[l.length-1]}null==(n=t)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:a.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:function(e){return l.push(e)},onKeyDown:u,onClick:d},s,{className:(0,r.A)("tabs__item",f.tabItem,null==s?void 0:s.className,{"tabs__item--active":o===n}),children:null!=t?t:n}),n)}))})}function j(e){var n=e.lazy,t=e.children,r=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var i=s.find((function(e){return e.props.value===r}));return i?(0,o.cloneElement)(i,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function T(e){var n=g(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,x.jsx)(v,Object.assign({},e,n)),(0,x.jsx)(j,Object.assign({},e,n))]})}function I(e){var n=(0,y.A)();return(0,x.jsx)(T,Object.assign({},e,{children:u(e.children)}),String(n))}},2678:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=t(4848),r=t(8453);t(3384),t(1347);const s={title:"v0.22.x to v0.23.x"},i=void 0,a={id:"migration-guides/v0.22.x-to-v0.23.x",title:"v0.22.x to v0.23.x",description:"Offset Paging Strategy [BREAKING CHANGE]",source:"@site/docs/migration-guides/v0.22.x-to-v0.23.x.mdx",sourceDirName:"migration-guides",slug:"/migration-guides/v0.22.x-to-v0.23.x",permalink:"/nestjs-query/docs/migration-guides/v0.22.x-to-v0.23.x",draft:!1,unlisted:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/migration-guides/v0.22.x-to-v0.23.x.mdx",tags:[],version:"current",frontMatter:{title:"v0.22.x to v0.23.x"},sidebar:"docs",previous:{title:"v0.23.x to v0.24.x",permalink:"/nestjs-query/docs/migration-guides/v0.23.x-to-v0.24.x"},next:{title:"v0.15.x to v0.16.x",permalink:"/nestjs-query/docs/migration-guides/v0.15.x-to-v0.16.x"}},l={},c=[{value:"Offset Paging Strategy [BREAKING CHANGE]",id:"offset-paging-strategy-breaking-change",level:2},{value:"Total Count with OFFSET Strategy",id:"total-count-with-offset-strategy",level:2},{value:"Relation Decorator Changes [BREAKING CHANGE]",id:"relation-decorator-changes-breaking-change",level:2},{value:"Authorizers",id:"authorizers",level:2},{value:"Hook Updates",id:"hook-updates",level:2},{value:"Registering DTOs When Using Custom Resolvers",id:"registering-dtos-when-using-custom-resolvers",level:2}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"offset-paging-strategy-breaking-change",children:"Offset Paging Strategy [BREAKING CHANGE]"}),"\n",(0,o.jsxs)(n.p,{children:["In previous versions of ",(0,o.jsx)(n.code,{children:"nestjs-query"})," the ",(0,o.jsx)(n.code,{children:"OFFSET"})," paging strategy returned an array of nodes, this proved to not be\nextensible, especially when wanting to expose other attributes such as ",(0,o.jsx)(n.code,{children:"totalCount"}),", or paging meta such has\n",(0,o.jsx)(n.code,{children:"hasNextPage"})," or ",(0,o.jsx)(n.code,{children:"hasPreviousPage"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.code,{children:"v0.23.0"})," the graphql response now returns an ",(0,o.jsx)(n.code,{children:"OffsetConnection"})," that looks like the following"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"type OffsetPageInfo {\n  hasNextPage: Boolean\n  hasPreviousPage: Boolean\n}\n\ntype TodoItemConnection {\n  pageInfo: OffsetPageInfo!\n  nodes: [TodoItem!]!\n}\n\ntype TodoItem {\n  id: ID!\n  title: String!\n  description: String\n  completed: Boolean!\n  created: DateTime!\n  updated: DateTime!\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"total-count-with-offset-strategy",children:"Total Count with OFFSET Strategy"}),"\n",(0,o.jsxs)(n.p,{children:["In previous versions of the nestjs-query the ",(0,o.jsx)(n.code,{children:"enableTotalCount"})," option only worked with the ",(0,o.jsx)(n.code,{children:"CURSOR"})," paging strategy.\nIn ",(0,o.jsx)(n.code,{children:"v0.23.0"})," the ",(0,o.jsx)(n.code,{children:"enableTotalCount"})," option now also works with the ",(0,o.jsx)(n.code,{children:"OFFSET"})," paging strategy."]}),"\n",(0,o.jsxs)(n.p,{children:["When ",(0,o.jsx)(n.code,{children:"enableTotalCount"})," is set to true the following graphql schema will be generated"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"type OffsetPageInfo {\n  hasNextPage: Boolean\n  hasPreviousPage: Boolean\n}\n\ntype TodoItemConnection {\n  totalCount: Int!\n  pageInfo: OffsetPageInfo!\n  nodes: [TodoItem!]!\n}\n\ntype TodoItem {\n  id: ID!\n  title: String!\n  description: String\n  completed: Boolean!\n  created: DateTime!\n  updated: DateTime!\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"relation-decorator-changes-breaking-change",children:"Relation Decorator Changes [BREAKING CHANGE]"}),"\n",(0,o.jsxs)(n.p,{children:["In previous versions of ",(0,o.jsx)(n.code,{children:"nestjs-query"})," there were four relation decorators ",(0,o.jsx)(n.code,{children:"@Relation"}),", ",(0,o.jsx)(n.code,{children:"@FilterableRelation"}),",\n",(0,o.jsx)(n.code,{children:"@Connection"}),", and ",(0,o.jsx)(n.code,{children:"@FilterableConnection"})," all four of the decorators have been changed to be more explicit in naming\nto be clear in what they are doing."]}),"\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.code,{children:"v0.23.0"})," the decorators have been renamed to be more explicit."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@Relation"})," - A relation that is a single value (one-to-one, many-to-one)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@FilterableRelation"})," - A ",(0,o.jsx)(n.code,{children:"@Relation"})," that enables filtering the parent by fields of the relation ",(0,o.jsx)(n.code,{children:"DTO"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@UnPagedRelation"})," - An array of relations (e.g, many-to-many, one-to-many) that returns all the related records."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@FilterableUnPagedRelation"})," - An ",(0,o.jsx)(n.code,{children:"@UnPagedRelation"})," that enables filtering the parent by fields of the relation\n",(0,o.jsx)(n.code,{children:"DTO"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@OffsetConnection"})," - A connection that represents a collection (e.g, many-to-many, one-to-many) that uses ",(0,o.jsx)(n.code,{children:"offset"}),"\nbased pagination."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@FilterableOffsetConnection"})," - An ",(0,o.jsx)(n.code,{children:"@OffsetConnection"})," that enables filtering the parent by fields of the connection\n",(0,o.jsx)(n.code,{children:"DTO"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@CursorConnection"})," - A connection that represents a collection (e.g, many-to-many, one-to-many) that uses ",(0,o.jsx)(n.code,{children:"cursor"}),"\nbased pagination."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@FilterableCursorConnection"})," - A ",(0,o.jsx)(n.code,{children:"@CursorConnection"})," that enables filtering the parent by fields of the\nconnection ",(0,o.jsx)(n.code,{children:"DTO"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Below is a mapping of the old definition to the new one"}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:["In previous versions the ",(0,o.jsx)(n.code,{children:"OFFSET"})," paging strategy returned an array of relations, the new version returns an\n",(0,o.jsx)(n.code,{children:"OffsetConnection"})]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"//old\n@Relation('subTasks', () => [TodoItem])\n//new\n@OffsetConnection('subTasks', () => TodoItem)\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"//old\n@FilterableRelation('subTasks', () => [TodoItem])\n//new\n@FilterableOffsetConnection('subTasks', () => TodoItem)\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"//old\n@Relation('subTasks', () => [TodoItem], {pagingStrategy: PagingStrategies.NONE})\n//new\n@UnPagedRelation('subTasks', () => TodoItem)\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"//old\n@FilterableRelation('subTasks', () => [TodoItem], {pagingStrategy: PagingStrategies.NONE})\n//new\n@FilterableUnPagedRelation('subTasks', () => TodoItem)\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"//old\n@Connection('subTasks', () => TodoItem)\n//new\n@CursorConnection('subTasks', () => TodoItem)\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"//old\n@FilterableConnection('subTasks', () => TodoItem)\n//new\n@FilterableCursorConnection('subTasks', () => TodoItem)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"authorizers",children:"Authorizers"}),"\n",(0,o.jsxs)(n.p,{children:["In previous versions of ",(0,o.jsx)(n.code,{children:"nestjs-query"})," the resolvers relied on an AuthorizerService to be injected and the filters\nwere created manually within the resolver."]}),"\n",(0,o.jsx)(n.p,{children:"In the latest version, we have transitioned to a interceptor/param decorator pattern. This provides:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Better separation of concerns, auth filters are now just params passed to the resolver method."}),"\n",(0,o.jsx)(n.li,{children:"More flexibility when extending the resolvers to reuse the same logic that the auto-generated resolvers use\nwithout having to worry about internal implementation details."}),"\n",(0,o.jsxs)(n.li,{children:["Easier extension of the ",(0,o.jsx)(n.code,{children:"CRUDResolver"})," by not having to worry about injecting the authorizerService, it will\nautomatically add the interceptor and param decorators to auto generated methods, you just need to decorate your DTO."]}),"\n",(0,o.jsx)(n.li,{children:"Familiar patterns that are laid out in the core nestjs documentation."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Old way"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { QueryService, InjectQueryService } from '@ptc-org/nestjs-query-core';\nimport { CRUDResolver } from '@ptc-org/nestjs-query-graphql';\nimport { Resolver, Query, Args } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver {\n  constructor(\n    @InjectQueryService(TodoItemEntity) readonly service: QueryService<TodoItemEntity>,\n    @InjectAuthorizer(TodoItemDTO) readonly authorizer: Authorizer<TodoItemDTO>\n  ) {}\n\n  @Query(() => TodoItemConnection)\n   async uncompletedTodoItems(@Args() query: TodoItemQuery, @Context() context: unknown): Promise<ConnectionType<TodoItemDTO>> {\n     // add the completed filter the user provided filter\n     const authFilter = this.authorizer.authorize(context);\n     const filter: Filter<TodoItemDTO> = mergeFilter(query.filter ?? {}, { completed: { is: false } });\n     const uncompletedQuery = mergeQuery(query, { filter: mergeFilter(filter, authFilter) });\n     return TodoItemConnection.createFromPromise(\n       (q) => this.service.query(q),\n       uncompletedQuery,\n       (q) => this.service.count(q),\n     );\n   }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"New"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { Filter, InjectQueryService, mergeFilter, mergeQuery, QueryService } from '@ptc-org/nestjs-query-core';\nimport { AuthorizerInterceptor, AuthorizerFilter, ConnectionType } from '@ptc-org/nestjs-query-graphql';\nimport { Args, Query, Resolver } from '@nestjs/graphql';\nimport { UseInterceptors } from '@nestjs/common';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemConnection, TodoItemQuery } from './types';\n\n@Resolver(() => TodoItemDTO)\n@UseInterceptors(AuthorizerInterceptor(TodoItemDTO))\nexport class TodoItemResolver {\n  constructor(@InjectQueryService(TodoItemEntity) readonly service: QueryService<TodoItemEntity>) {}\n\n  // Set the return type to the TodoItemConnection\n  @Query(() => TodoItemConnection)\n  async uncompletedTodoItems(\n    @Args() query: TodoItemQuery,\n    @AuthorizerFilter() authFilter: Filter<TodoItemDTO>,\n  ): Promise<ConnectionType<TodoItemDTO>> {\n    // add the completed filter the user provided filter\n    const filter: Filter<TodoItemDTO> = mergeFilter(query.filter ?? {}, { completed: { is: false } });\n    const uncompletedQuery = mergeQuery(query, { filter: mergeFilter(filter, authFilter) });\n    return TodoItemConnection.createFromPromise(\n      (q) => this.service.query(q),\n      uncompletedQuery,\n      (q) => this.service.count(q),\n    );\n  }\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"hook-updates",children:"Hook Updates"}),"\n",(0,o.jsx)(n.p,{children:"In previous versions of nestjs-query hooks were not very flexible, and could not be used by custom resolver endpoints."}),"\n",(0,o.jsx)(n.p,{children:"In the latest version the hooks pipeline has been re-worked to enable the following:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Hook decorators now accept either a hook funciton OR a custom hook class that can use dependency injection."}),"\n",(0,o.jsx)(n.li,{children:"Reusing hooks in custom endpoints."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"As a demonstration of the flexibility of the new hooks implementation, lets use a hook in a custom endpoint (this\nwould not have been possible previously)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:"{14-15}",children:"import { InjectQueryService, mergeFilter, QueryService, UpdateManyResponse } from '@ptc-org/nestjs-query-core';\nimport { HookTypes, HookInterceptor, MutationHookArgs, UpdateManyResponseType } from '@ptc-org/nestjs-query-graphql';\nimport { UseInterceptors } from '@nestjs/common';\nimport { Mutation, Resolver } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { UpdateManyTodoItemsArgs } from './types';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver {\n  constructor(@InjectQueryService(TodoItemEntity) readonly service: QueryService<TodoItemDTO>) {}\n\n  @Mutation(() => UpdateManyResponseType())\n  @UseInterceptors(HookInterceptor(HookTypes.BEFORE_UPDATE_MANY, TodoItemDTO))\n  markTodoItemsAsCompleted(@MutationHookArgs() { input }: UpdateManyTodoItemsArgs): Promise<UpdateManyResponse> {\n    return this.service.updateMany(\n      { ...input.update, completed: false },\n      mergeFilter(input.filter, { completed: { is: false } }),\n    );\n  }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"The two important things are:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"HookInterceptor"})," in this example we reuse the ",(0,o.jsx)(n.code,{children:"BEFORE_UPDATE_MANY"})," hook on the ",(0,o.jsx)(n.code,{children:"TodoItemDTO"}),", the interceptor\nadds a DI hook instance to the context that can be used downstream by any guards or param decorators."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@MutationHookArgs"})," will apply the correct hook to the args and provide it to the resolver endpoint."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["In this next example we can demonstrate the DI capability, we'll keep the example simple, but with ",(0,o.jsx)(n.code,{children:"nestjs"}),"'s DI\nfunctionality you can inject other services to look up information and transform the incoming request as much as you\nneed."]}),"\n",(0,o.jsxs)(n.p,{children:["In this example we create a simple hook that will work for both ",(0,o.jsx)(n.code,{children:"createOne"})," and ",(0,o.jsx)(n.code,{children:"createMany"})," endpoints to set the\n",(0,o.jsx)(n.code,{children:"createdBy"})," attribute. In this example we look up the userEmail from the ",(0,o.jsx)(n.code,{children:"userService"})," and set ",(0,o.jsx)(n.code,{children:"createdBy"})," attribute\non the input."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"interface CreatedBy {\n  createdBy: string;\n}\n\n@Injectable()\nexport class CreatedByHook<T extends CreatedBy>\n  implements BeforeCreateOneHook<T, GqlContext>, BeforeCreateManyHook<T, GqlContext> {\n  constructor(readonly userService: UserService) {}\n\n  run(instance: CreateManyInputType<T>, context: GqlContext): Promise<CreateManyInputType<T>>;\n  run(instance: CreateOneInputType<T>, context: GqlContext): Promise<CreateOneInputType<T>>;\n  async run(\n    instance: CreateOneInputType<T> | CreateManyInputType<T>,\n    context: GqlContext,\n  ): Promise<CreateOneInputType<T> | CreateManyInputType<T>> {\n    const createdBy = await this.userService.getUserEmail(context.req.userId);\n    if (Array.isArray(instance.input)) {\n      // eslint-disable-next-line no-param-reassign\n      instance.input = instance.input.map((c) => ({ ...c, createdBy }));\n      return instance;\n    }\n    // eslint-disable-next-line no-param-reassign\n    instance.input.createdBy = createdBy;\n    return instance;\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Now we can use this generic hook on any DTO that has a ",(0,o.jsx)(n.code,{children:"createdBy"})," field"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"@InputType('TodoItemInput')\n@BeforeCreateOne(CreatedByHook)\n@BeforeCreateMany(CreatedByHook)\nexport class TodoItemInputDTO {\n  @IsString()\n  @MaxLength(20)\n  @Field()\n  title!: string;\n\n  @IsBoolean()\n  @Field()\n  completed!: boolean;\n\n  // don't annotate with field because its set by the hook\n  createdBy!: string;\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"registering-dtos-when-using-custom-resolvers",children:"Registering DTOs When Using Custom Resolvers"}),"\n",(0,o.jsxs)(n.p,{children:["In previous versions of ",(0,o.jsx)(n.code,{children:"nestjs-query"})," you could extend ",(0,o.jsx)(n.code,{children:"CRUDResolver"})," but there was not a way to set up the\nappropriate providers for many of the newer features (hooks, authorizers etc.)."]}),"\n",(0,o.jsxs)(n.p,{children:["In the latest version you now have the option to register your DTOs with ",(0,o.jsx)(n.code,{children:"@ptc-org/nestjs-query-graphql"})," without it\ngenerating a resolver automatically."]}),"\n",(0,o.jsxs)(n.p,{children:["In this example we create a custom resolver that extends ",(0,o.jsx)(n.code,{children:"CRUDResolver"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="todo-item.resolver.ts"',children:"import { QueryService, InjectQueryService } from '@ptc-org/nestjs-query-core';\nimport { CRUDResolver } from '@ptc-org/nestjs-query-graphql';\nimport { Resolver, Query, Args } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO) {\n  constructor(\n    @InjectQueryService(TodoItemEntity) readonly service: QueryService<TodoItemEntity>\n  ) {\n    super(service);\n  }\n}\n\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Because the ",(0,o.jsx)(n.code,{children:"TodoItemResolver"})," extends ",(0,o.jsx)(n.code,{children:"CRUDResolver"})," there is no need to have ",(0,o.jsx)(n.code,{children:"nestjs-query"})," also create a resolver,\ninstead you can specify the ",(0,o.jsx)(n.code,{children:"dtos"})," option which just takes in ",(0,o.jsx)(n.code,{children:"DTOClass"}),", ",(0,o.jsx)(n.code,{children:"CreateDTOClass"}),", and ",(0,o.jsx)(n.code,{children:"UpdateDTOClass"})," to\nset up all of additional providers to hooks, authorizers and other features."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="todo-item.module.ts" {9,13}',children:"import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { TodoItemResolver } from './todo-item.resolver'\n\n@Module({\n  providers: [TodoItemResolver],\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n      dtos: [{ DTOClass: TodoItemDTO }],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(6540);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);