"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[6571],{1347:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var r=t(8215);const a={tabItem:"tabItem_Ymn6"};var s=t(4848);function l(e){var n=e.children,t=e.hidden,l=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:t,children:n})}},3384:(e,n,t)=>{t.d(n,{A:()=>T});var r=t(6540),a=t(8215),s=t(5236),l=t(6347),i=t(8385),o=t(5793),d=t(7422),c=t(1038);function u(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,d.X)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function g(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,s=(0,l.W6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,o.aZ)(i),(0,r.useCallback)((function(e){if(i){var n=new URLSearchParams(s.location.search);n.set(i,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[i,s])]}function j(e){var n,t,a,s,l=e.defaultValue,o=e.queryString,d=void 0!==o&&o,u=e.groupId,j=h(e),m=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:j})})),x=m[0],f=m[1],b=g({queryString:d,groupId:u}),y=b[0],v=b[1],T=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),t=(0,c.Dv)(n),a=t[0],s=t[1],[a,(0,r.useCallback)((function(e){n&&s.set(e)}),[n,s])]),I=T[0],q=T[1],w=function(){var e=null!=y?y:I;return p({value:e,tabValues:j})?e:null}();return(0,i.A)((function(){w&&f(w)}),[w]),{selectedValue:x,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:j}))throw new Error("Can't select invalid tab value="+e);f(e),v(e),q(e)}),[v,q,j]),tabValues:j}}var m=t(195);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(4848);function b(e){var n=e.className,t=e.block,r=e.selectedValue,l=e.selectValue,i=e.tabValues,o=[],d=(0,s.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,t=o.indexOf(n),a=i[t].value;a!==r&&(d(n),l(a))},u=function(e){var n,t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=o.indexOf(e.currentTarget)+1;t=null!=(r=o[a])?r:o[0];break;case"ArrowLeft":var s,l=o.indexOf(e.currentTarget)-1;t=null!=(s=o[l])?s:o[o.length-1]}null==(n=t)||n.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,f.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return o.push(e)},onKeyDown:u,onClick:c},s,{className:(0,a.A)("tabs__item",x.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function y(e){var n=e.lazy,t=e.children,a=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var l=s.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function v(e){var n=j(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,f.jsx)(b,Object.assign({},e,n)),(0,f.jsx)(y,Object.assign({},e,n))]})}function T(e){var n=(0,m.A)();return(0,f.jsx)(v,Object.assign({},e,{children:u(e.children)}),String(n))}},1958:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var r=t(4848),a=t(8453),s=t(3384),l=t(1347);const i={title:"Paging"},o=void 0,d={id:"graphql/queries/paging",title:"Paging",description:"nestjs-query supports multiple paging strategies that each have their own pros and cons. This documentation will",source:"@site/docs/graphql/queries/paging.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/paging",permalink:"/nestjs-query/docs/graphql/queries/paging",draft:!1,unlisted:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/graphql/queries/paging.mdx",tags:[],version:"current",frontMatter:{title:"Paging"},sidebar:"docs",previous:{title:"Filtering",permalink:"/nestjs-query/docs/graphql/queries/filtering"},next:{title:"Sorting",permalink:"/nestjs-query/docs/graphql/queries/sorting"}},c={},u=[{value:"Cursor Based Paging",id:"cursor-based-paging",level:2},{value:"Offset Based Cursor",id:"offset-based-cursor",level:3},{value:"Key Set Based Cursor",id:"key-set-based-cursor",level:3},{value:"Sorting and Key set cursors",id:"sorting-and-key-set-cursors",level:4},{value:"Relation Connections",id:"relation-connections",level:3},{value:"Paging",id:"paging",level:3},{value:"Offset Based Paging",id:"offset-based-paging",level:2},{value:"Disabling Paging",id:"disabling-paging",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"nestjs-query"})," supports multiple paging strategies that each have their own pros and cons. This documentation will\ncover the different paging strategies and their applicable use cases."]}),"\n",(0,r.jsxs)(n.p,{children:["The following examples are based on the following ",(0,r.jsx)(n.code,{children:"TodoItemDTO"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="todo-item.dto.ts"',children:"import { FilterableField, IDField } from '@ptc-org/nestjs-query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\n\n@ObjectType('TodoItem')\nexport class TodoItemDTO {\n  @IDField(() => ID)\n  id!: string;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n}\n\n"})}),"\n",(0,r.jsx)(n.h2,{id:"cursor-based-paging",children:"Cursor Based Paging"}),"\n",(0,r.jsxs)(n.p,{children:["By default ",(0,r.jsx)(n.code,{children:"nestjs-query"})," will expose all query many endpoints as cursor based ",(0,r.jsx)(n.a,{href:"https://relay.dev/graphql/connections.htm",children:(0,r.jsx)(n.code,{children:"connections"})})," that you can use to page through results."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"When using cursor based connections you are not tied to any particular implementation described below, because of the opaque\nnature of cursors you can start out with the default and switch to key set based cursors later on without changing\nyour clients."})}),"\n",(0,r.jsx)(n.p,{children:"All cursor connections, regardless of paging strategy, expose the following schema"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"scalar ConnectionCursor\n\ntype PageInfo {\n  hasNextPage: Boolean\n  hasPreviousPage: Boolean\n  startCursor: ConnectionCursor\n  endCursor: ConnectionCursor\n}\n\ntype TodoItemConnection {\n  pageInfo: PageInfo!\n  edges: [TodoItemEdge!]!\n}\n\ntype TodoItemEdge {\n  node: TodoItem!\n  cursor: ConnectionCursor!\n}\n\ntype TodoItem {\n  id: ID!\n  title: String!\n  description: String\n  completed: Boolean!\n  created: DateTime!\n  updated: DateTime!\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"offset-based-cursor",children:"Offset Based Cursor"}),"\n",(0,r.jsx)(n.p,{children:"By default all cursors will use a form of offset based paging to back cursors."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Pros"}),(0,r.jsx)(n.th,{children:"Cons"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Allow for recursive relation paging"}),(0,r.jsx)(n.td,{children:"Pages and nodes may change between queries"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Straight forward to implement"}),(0,r.jsx)(n.td,{children:"Inconsistent Sorting - natural sorting is used by default"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Queries grow more inefficient as you go through more pages"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"key-set-based-cursor",children:"Key Set Based Cursor"}),"\n",(0,r.jsxs)(n.p,{children:["You have the option to specify a key set on your DTO which will replace the ",(0,r.jsx)(n.code,{children:"offset"})," with a ",(0,r.jsx)(n.code,{children:"where"})," clause. A keyset\nis a set of fields that uniquely identify a record (e.g. ",(0,r.jsx)(n.code,{children:"id"}),")."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Pros"}),(0,r.jsx)(n.th,{children:"Cons"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Consistent Results - All cursors uniquely identify a record allowing for deterministic before/after pages"}),(0,r.jsx)(n.td,{children:"Unable to do recursive paging for relations"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Stable Sorting - All results will be deterministically sorted"}),(0,r.jsx)(n.td,{children:"A unique key set must be specified"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Consistent performance with correct indexes in place"}),(0,r.jsx)(n.td,{children:"Unable to jump to arbitrary page"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Suitable for datasets of any size"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["To enable key set based paging all you need to do is decorate your ",(0,r.jsx)(n.code,{children:"DTO"})," with the ",(0,r.jsx)(n.code,{children:"@KeySet"})," decorator."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { FilterableField, IDField, KeySet } from '@ptc-org/nestjs-query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\n\n@ObjectType('TodoItem')\n@KeySet(['id'])\nexport class TodoItemDTO {\n  @IDField(() => ID)\n  id!: number;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField({ nullable: true })\n  description?: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n}\n\n"})}),"\n",(0,r.jsx)(n.h4,{id:"sorting-and-key-set-cursors",children:"Sorting and Key set cursors"}),"\n",(0,r.jsx)(n.p,{children:"When using key set based cursors we must take into account any client provided sorting in order to uniquely identify\na record within the sorted set of nodes"}),"\n",(0,r.jsxs)(n.p,{children:["For example assume we're using the same DTO as above. If we added a sort by ",(0,r.jsx)(n.code,{children:"completed"})," a comparision on ",(0,r.jsx)(n.code,{children:"id"})," would\nno longer be sufficient"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"{\n  todoItems(sorting: [{ field: completed, direction: ASC }]) {\n    edges {\n      cursor\n      node {\n        id\n        title\n        completed\n      }\n    }\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If we only compared on the keyset ",(0,r.jsx)(n.code,{children:"[id]"})," our pages would no longer be sorted properly, if we only compared on\n",(0,r.jsx)(n.code,{children:"completed"})," you would not be able to page."]}),"\n",(0,r.jsx)(n.p,{children:"We solve this problem by encoding information about the each field in the sort as well as the key set fields into the\ncursor so we can page properly."}),"\n",(0,r.jsx)(n.p,{children:"In the above example the filter from the cursor (when paging forward) would be something like"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"WHERE (completed > ? OR (completed = ? AND id > ?))\n"})}),"\n",(0,r.jsx)(n.h3,{id:"relation-connections",children:"Relation Connections"}),"\n",(0,r.jsx)(n.p,{children:"Key set paging will not apply to relations because they are recursive by nature."}),"\n",(0,r.jsxs)(n.p,{children:["For example if you query for multiple ",(0,r.jsx)(n.code,{children:"TodoItems"})," and their ",(0,r.jsx)(n.code,{children:"subTasks"})," if key set paging was used for the ",(0,r.jsx)(n.code,{children:"subTasks"}),"\nconnection  the cursor from one ",(0,r.jsx)(n.code,{children:"todoItems"})," ",(0,r.jsx)(n.code,{children:"subTasks"})," may not be applicable to all ",(0,r.jsx)(n.code,{children:"todoItems"})]}),"\n",(0,r.jsx)(n.p,{children:"For example, assume you have the following todo items and subTasks"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "id": 1,\n    "title": "Todo 1"\n    "subTasks": [\n      {"id": 1, "title": "Todo 1 - Sub Tasks 1"}, // cursor: "abc"\n      {"id": 2, "title": "Todo 1 - Sub Tasks 2"}  // cursor: "def"\n    ]\n  },\n  {\n    "id": 2,\n    "title": "Todo 2"\n    "subTasks": [\n      {"id": 3, "title": "Todo 2 - Sub Tasks 1"},  // cursor: "ghi"\n      {"id": 4, "title": "Todo 2 - Sub Tasks 2"}  // cursor: "jkl"\n    ]\n  }\n]\n'})}),"\n",(0,r.jsx)(n.p,{children:"If you ran the following graphql query"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:'{\n  todoItems {\n    edges {\n      node {\n        title\n        subTasks(paging: {first: 2, after: "ghi"}){\n          title\n        }\n      }\n    }\n  }\n}\n\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The resulting query would look for all subTasks with an id > 3 breaking paging for ",(0,r.jsx)(n.code,{children:"Todo 1"}),", for this reason the\n",(0,r.jsx)(n.code,{children:"@KeySet"})," decorator is used for all relations."]}),"\n",(0,r.jsx)(n.h3,{id:"paging",children:"Paging"}),"\n",(0,r.jsx)(n.p,{children:"To page with cursors it works the same way for all strategies."}),"\n",(0,r.jsx)(n.p,{children:"In this example we'll fetch the first 2 records."}),"\n",(0,r.jsxs)(s.A,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],children:[(0,r.jsx)(l.A,{value:"graphql",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"{\n  todoItems(paging: {first: 2}) {\n    pageInfo{\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n    edges{\n      node{\n        id\n        title\n        completed\n        created\n        updated\n      }\n      cursor\n    }\n  }\n}\n"})})}),(0,r.jsx)(l.A,{value:"response",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "todoItems": {\n      "pageInfo": {\n        "hasNextPage": true,\n        "hasPreviousPage": false,\n        "startCursor": "YXJyYXljb25uZWN0aW9uOjA=",\n        "endCursor": "YXJyYXljb25uZWN0aW9uOjE="\n      },\n      "edges": [\n        {\n          "node": {\n            "id": "1",\n            "title": "Create One Todo Item",\n            "completed": false,\n            "created": "2020-01-14T07:00:31.763Z",\n            "updated": "2020-01-14T07:00:31.763Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjA="\n        },\n        {\n          "node": {\n            "id": "2",\n            "title": "Create Many Todo Items - 1",\n            "completed": false,\n            "created": "2020-01-14T07:00:34.111Z",\n            "updated": "2020-01-14T07:00:34.111Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjE="\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Lets take a look the ",(0,r.jsx)(n.code,{children:"pageInfo"})," from the previous example"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "pageInfo": {\n    "hasNextPage": true,\n    "hasPreviousPage": false,\n    "startCursor": "YXJyYXljb25uZWN0aW9uOjA=",\n    "endCursor": "YXJyYXljb25uZWN0aW9uOjE="\n  },\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Notice how ",(0,r.jsx)(n.code,{children:"hasNextPage"})," is ",(0,r.jsx)(n.code,{children:"true"})," and there is an ",(0,r.jsx)(n.code,{children:"endCursor"})," that can be used to fetch the next page."]}),"\n",(0,r.jsxs)(s.A,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],children:[(0,r.jsx)(l.A,{value:"graphql",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:'{\n  todoItems(paging: { after: "YXJyYXljb25uZWN0aW9uOjE=", first: 2 }) {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        id\n        title\n        completed\n        created\n        updated\n      }\n      cursor\n    }\n  }\n}\n'})})}),(0,r.jsx)(l.A,{value:"response",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "todoItems": {\n      "pageInfo": {\n        "hasNextPage": true,\n        "hasPreviousPage": false,\n        "startCursor": "YXJyYXljb25uZWN0aW9uOjI=",\n        "endCursor": "YXJyYXljb25uZWN0aW9uOjM="\n      },\n      "edges": [\n        {\n          "node": {\n            "id": "3",\n            "title": "Create Many Todo Items - 2",\n            "completed": true,\n            "created": "2020-01-14T07:00:34.111Z",\n            "updated": "2020-01-14T07:00:34.111Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjI="\n        },\n        {\n          "node": {\n            "id": "4",\n            "title": "Create Many Todo Items - 3",\n            "completed": false,\n            "created": "2020-01-14T07:01:27.805Z",\n            "updated": "2020-01-14T07:01:27.805Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjM="\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["We can also page backward by using ",(0,r.jsx)(n.code,{children:"before"})," and ",(0,r.jsx)(n.code,{children:"last"}),". In the following example we'll use the ",(0,r.jsx)(n.code,{children:"startCursor"})," from the\nprevious example and set ",(0,r.jsx)(n.code,{children:"last"})," to 2."]}),"\n",(0,r.jsxs)(s.A,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],children:[(0,r.jsx)(l.A,{value:"graphql",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:'{\n  todoItems(paging: { before: "YXJyYXljb25uZWN0aW9uOjI=", last: 2 }) {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        id\n        title\n        completed\n        created\n        updated\n      }\n      cursor\n    }\n  }\n}\n'})})}),(0,r.jsx)(l.A,{value:"response",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "todoItems": {\n      "pageInfo": {\n        "hasNextPage": false,\n        "hasPreviousPage": false,\n        "startCursor": "YXJyYXljb25uZWN0aW9uOjA=",\n        "endCursor": "YXJyYXljb25uZWN0aW9uOjE="\n      },\n      "edges": [\n        {\n          "node": {\n            "id": "1",\n            "title": "Create One Todo Item",\n            "completed": false,\n            "created": "2020-01-14T07:00:31.763Z",\n            "updated": "2020-01-14T07:00:31.763Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjA="\n        },\n        {\n          "node": {\n            "id": "2",\n            "title": "Create Many Todo Items - 1",\n            "completed": false,\n            "created": "2020-01-14T07:00:34.111Z",\n            "updated": "2020-01-14T07:00:34.111Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjE="\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"offset-based-paging",children:"Offset Based Paging"}),"\n",(0,r.jsxs)(n.p,{children:["An alternative to cursor based querying is to use the ",(0,r.jsx)(n.code,{children:"OFFSET"})," ",(0,r.jsx)(n.code,{children:"pagingStrategy"}),". When using the ",(0,r.jsx)(n.code,{children:"OFFSET"})," strategy\nqueries that return multiple records will return an ",(0,r.jsx)(n.code,{children:"OffsetConnection"})," that looks like the following."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"type OffsetPageInfo {\n  hasNextPage: Boolean\n  hasPreviousPage: Boolean\n}\n\ntype TodoItemConnection {\n  pageInfo: OffsetPageInfo!\n  nodes: [TodoItem!]!\n}\n\ntype TodoItem {\n  id: ID!\n  title: String!\n  description: String\n  completed: Boolean!\n  created: DateTime!\n  updated: DateTime!\n}\n"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Pros"}),(0,r.jsx)(n.th,{children:"Cons"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Easy to understand"}),(0,r.jsx)(n.td,{children:"unstable - pages and nodes may change between queries"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Able to jump to arbitrary pages"}),(0,r.jsx)(n.td,{children:"Inconsistent Sorting - natural sorting is used in the strategy"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Queries grow more inefficient as you go through more pages"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"State must be maintained in the client to know last limit and offset in order to page"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["To enable OFFSET based paging all you need to do is set the ",(0,r.jsx)(n.code,{children:"pagingStrategy"})," option using the ",(0,r.jsx)(n.code,{children:"@QueryOptions"})," decorator."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="todo-item.dto.ts" {5}',children:"import { FilterableField, IDField, QueryOptions } from '@ptc-org/nestjs-query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\n\n@ObjectType('TodoItem')\n@QueryOptions({ pagingStrategy: PagingStrategies.OFFSET })\nexport class TodoItemDTO {\n  @IDField(() => ID)\n  id!: number;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField({ nullable: true })\n  description?: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n}\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"In this example we'll fetch the first 2 records."}),"\n",(0,r.jsxs)(s.A,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],children:[(0,r.jsx)(l.A,{value:"graphql",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"{\n  todoItems(paging: { limit: 2 }) {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n    }\n    nodes {\n      id\n      title\n      completed\n      created\n      updated\n    }\n  }\n}\n"})})}),(0,r.jsx)(l.A,{value:"response",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "todoItems": {\n      "pageInfo": {\n        "hasNextPage": true,\n        "hasPreviousPage": false\n      },\n      "nodes": [\n        {\n          "id": "1",\n          "title": "Create Nest App",\n          "completed": true,\n          "created": "2021-02-14T12:56:01.106Z",\n          "updated": "2021-02-14T12:56:01.106Z"\n        },\n        {\n          "id": "2",\n          "title": "Create Entity",\n          "completed": false,\n          "created": "2021-02-14T12:56:01.106Z",\n          "updated": "2021-02-14T12:56:01.106Z"\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"In this example we'll also pass in an offset to fetch the next 2 records."}),"\n",(0,r.jsxs)(s.A,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],children:[(0,r.jsx)(l.A,{value:"graphql",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"{\n  todoItems(paging: { limit: 2, offset: 2 }) {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n    }\n    nodes {\n      id\n      title\n      completed\n      created\n      updated\n    }\n  }\n}\n\n\n"})})}),(0,r.jsx)(l.A,{value:"response",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "todoItems": {\n      "pageInfo": {\n        "hasNextPage": true,\n        "hasPreviousPage": true\n      },\n      "nodes": [\n        {\n          "id": "3",\n          "title": "Create Entity Service",\n          "completed": false,\n          "created": "2021-02-14T12:56:01.106Z",\n          "updated": "2021-02-14T12:56:01.106Z"\n        },\n        {\n          "id": "4",\n          "title": "Add Todo Item Resolver",\n          "completed": false,\n          "created": "2021-02-14T12:56:01.106Z",\n          "updated": "2021-02-14T12:56:01.106Z"\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"disabling-paging",children:"Disabling Paging"}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"This strategy is only recommended if you are sure your dataset is small."})}),"\n",(0,r.jsxs)(n.p,{children:["When using the ",(0,r.jsx)(n.code,{children:"NONE"})," paging strategy the ",(0,r.jsx)(n.code,{children:"paging"})," argument is removed and all methods will return an ",(0,r.jsx)(n.code,{children:"ArrayConnection"}),"."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Pros"}),(0,r.jsx)(n.th,{children:"Cons"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"All data is returned at once"}),(0,r.jsx)(n.td,{children:"Not suitable for large datasets"})]})})]}),"\n",(0,r.jsxs)(n.p,{children:["To disable paging all you can set the ",(0,r.jsx)(n.code,{children:"pagingStrategy"})," option using the ",(0,r.jsx)(n.code,{children:"@QueryOptions"})," decorator to\n",(0,r.jsx)(n.code,{children:"PagingStrategies.NONE"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="todo-item.dto.ts" {5}',children:"import { FilterableField, IDField, QueryOptions, PagingStrategies } from '@ptc-org/nestjs-query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\n\n@ObjectType('TodoItem')\n@QueryOptions({ pagingStrategy: PagingStrategies.NONE })\nexport class TodoItemDTO {\n  @IDField(() => ID)\n  id!: number;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField({ nullable: true })\n  description?: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n}\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"When using the strategy queries that return multiple records will return an array instead of a connection."}),"\n",(0,r.jsxs)(s.A,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],children:[(0,r.jsx)(l.A,{value:"graphql",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"{\n  todoItems {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n"})})}),(0,r.jsx)(l.A,{value:"response",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "todoItems": [\n      {\n        "id": "1",\n        "title": "Create Nest App",\n        "completed": true,\n        "created": "2020-06-12T08:15:18.876Z",\n        "updated": "2020-06-12T08:15:18.876Z"\n      },\n      {\n        "id": "2",\n        "title": "Create Entity",\n        "completed": false,\n        "created": "2020-06-12T08:15:18.876Z",\n        "updated": "2020-06-12T08:15:18.876Z"\n      },\n      {\n        "id": "3",\n        "title": "Create Entity Service",\n        "completed": false,\n        "created": "2020-06-12T08:15:18.876Z",\n        "updated": "2020-06-12T08:15:18.876Z"\n      },\n      {\n        "id": "4",\n        "title": "Add Todo Item Resolver",\n        "completed": false,\n        "created": "2020-06-12T08:15:18.876Z",\n        "updated": "2020-06-12T08:15:18.876Z"\n      },\n      {\n        "id": "5",\n        "title": "How to create item With Sub Tasks",\n        "completed": false,\n        "created": "2020-06-12T08:15:18.876Z",\n        "updated": "2020-06-12T08:15:18.876Z"\n      }\n    ]\n  }\n}\n'})})})]}),"\n",(0,r.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var r=t(6540);const a={},s=r.createContext(a);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);