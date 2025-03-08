"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[6833],{1347:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var r=t(4164);const a={tabItem:"tabItem_Ymn6"};var s=t(4848);function l(e){var n=e.children,t=e.hidden,l=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:t,children:n})}},3384:(e,n,t)=>{t.d(n,{A:()=>T});var r=t(6540),a=t(4164),s=t(5236),l=t(6347),o=t(8385),u=t(5793),i=t(7422),d=t(2152);function c(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function p(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return c(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,i.XI)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,s=(0,l.W6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,u.aZ)(o),(0,r.useCallback)((function(e){if(o){var n=new URLSearchParams(s.location.search);n.set(o,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[o,s])]}function m(e){var n,t,a,s,l=e.defaultValue,u=e.queryString,i=void 0!==u&&u,c=e.groupId,m=p(e),g=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:m})})),b=g[0],v=g[1],j=f({queryString:i,groupId:c}),y=j[0],x=j[1],T=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),t=(0,d.Dv)(n),a=t[0],s=t[1],[a,(0,r.useCallback)((function(e){n&&s.set(e)}),[n,s])]),q=T[0],I=T[1],N=function(){var e=null!=y?y:q;return h({value:e,tabValues:m})?e:null}();return(0,o.A)((function(){N&&v(N)}),[N]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!h({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);v(e),x(e),I(e)}),[x,I,m]),tabValues:m}}var g=t(195);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(4848);function j(e){var n=e.className,t=e.block,r=e.selectedValue,l=e.selectValue,o=e.tabValues,u=[],i=(0,s.a_)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=u.indexOf(n),a=o[t].value;a!==r&&(i(n),l(a))},c=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=u.indexOf(e.currentTarget)+1;t=null!=(r=u[a])?r:u[0];break;case"ArrowLeft":var s,l=u.indexOf(e.currentTarget)-1;t=null!=(s=u[l])?s:u[u.length-1]}null==(n=t)||n.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return u.push(e)},onKeyDown:c,onClick:d},s,{className:(0,a.A)("tabs__item",b.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function y(e){var n=e.lazy,t=e.children,s=e.selectedValue,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var o=l.find((function(e){return e.props.value===s}));return o?(0,r.cloneElement)(o,{className:(0,a.A)("margin-top--md",o.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})}))})}function x(e){var n=m(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,v.jsx)(j,Object.assign({},n,e)),(0,v.jsx)(y,Object.assign({},n,e))]})}function T(e){var n=(0,g.A)();return(0,v.jsx)(x,Object.assign({},e,{children:c(e.children)}),String(n))}},5853:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(4848),a=t(8453),s=t(3384),l=t(1347);const o={title:"Sorting"},u=void 0,i={id:"graphql/queries/sorting",title:"Sorting",description:"You can sort by one or more fields by using the sorting parameter.",source:"@site/docs/graphql/queries/sorting.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/sorting",permalink:"/nestjs-query/docs/graphql/queries/sorting",draft:!1,unlisted:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/graphql/queries/sorting.mdx",tags:[],version:"current",frontMatter:{title:"Sorting"},sidebar:"docs",previous:{title:"Paging",permalink:"/nestjs-query/docs/graphql/queries/paging"},next:{title:"Mutations",permalink:"/nestjs-query/docs/graphql/mutations"}},d={},c=[{value:"Setting a default sort",id:"setting-a-default-sort",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["You can sort by one or more fields by using the ",(0,r.jsx)(n.code,{children:"sorting"})," parameter."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"sorting"})," parameter is an array where each item has the following options."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"field!"})," - The name of the field to sort by."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"direction!"})," - The direction to sort either ",(0,r.jsx)(n.code,{children:"ASC"})," or ",(0,r.jsx)(n.code,{children:"DESC"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nulls?"})," - Optional field to set nulls sort order ",(0,r.jsx)(n.code,{children:"NULLS_FIRST"})," or ",(0,r.jsx)(n.code,{children:"NULLS_last"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"In this example we sort by title descending."}),"\n",(0,r.jsxs)(s.A,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],children:[(0,r.jsx)(l.A,{value:"graphql",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"{\n  todoItems(sorting: [{ field: title, direction: DESC }]) {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        id\n        title\n        completed\n        created\n        updated\n      }\n      cursor\n    }\n  }\n}\n\n"})})}),(0,r.jsx)(l.A,{value:"response",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "todoItems": {\n      "pageInfo": {\n        "hasNextPage": false,\n        "hasPreviousPage": false,\n        "startCursor": "YXJyYXljb25uZWN0aW9uOjA=",\n        "endCursor": "YXJyYXljb25uZWN0aW9uOjQ="\n      },\n      "edges": [\n        {\n          "node": {\n            "id": "1",\n            "title": "Create One Todo Item",\n            "completed": false,\n            "created": "2020-01-14T07:00:31.763Z",\n            "updated": "2020-01-14T07:00:31.763Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjA="\n        },\n        {\n          "node": {\n            "id": "5",\n            "title": "Create Many Todo Items - 4",\n            "completed": true,\n            "created": "2020-01-14T07:01:27.805Z",\n            "updated": "2020-01-14T07:01:27.805Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjE="\n        },\n        {\n          "node": {\n            "id": "4",\n            "title": "Create Many Todo Items - 3",\n            "completed": false,\n            "created": "2020-01-14T07:01:27.805Z",\n            "updated": "2020-01-14T07:01:27.805Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjI="\n        },\n        {\n          "node": {\n            "id": "3",\n            "title": "Create Many Todo Items - 2",\n            "completed": true,\n            "created": "2020-01-14T07:00:34.111Z",\n            "updated": "2020-01-14T07:00:34.111Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjM="\n        },\n        {\n          "node": {\n            "id": "2",\n            "title": "Create Many Todo Items - 1",\n            "completed": false,\n            "created": "2020-01-14T07:00:34.111Z",\n            "updated": "2020-01-14T07:00:34.111Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjQ="\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"In this example we sort by completed and title."}),"\n",(0,r.jsxs)(s.A,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],children:[(0,r.jsx)(l.A,{value:"graphql",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"{\n  todoItems(\n    sorting: [\n      { field: completed, direction: ASC }\n      { field: title, direction: DESC }\n    ]\n  ) {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        id\n        title\n        completed\n        created\n        updated\n      }\n      cursor\n    }\n  }\n}\n"})})}),(0,r.jsx)(l.A,{value:"response",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "todoItems": {\n      "pageInfo": {\n        "hasNextPage": false,\n        "hasPreviousPage": false,\n        "startCursor": "YXJyYXljb25uZWN0aW9uOjA=",\n        "endCursor": "YXJyYXljb25uZWN0aW9uOjQ="\n      },\n      "edges": [\n        {\n          "node": {\n            "id": "1",\n            "title": "Create One Todo Item",\n            "completed": false,\n            "created": "2020-01-14T07:00:31.763Z",\n            "updated": "2020-01-14T07:00:31.763Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjA="\n        },\n        {\n          "node": {\n            "id": "4",\n            "title": "Create Many Todo Items - 3",\n            "completed": false,\n            "created": "2020-01-14T07:01:27.805Z",\n            "updated": "2020-01-14T07:01:27.805Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjE="\n        },\n        {\n          "node": {\n            "id": "2",\n            "title": "Create Many Todo Items - 1",\n            "completed": false,\n            "created": "2020-01-14T07:00:34.111Z",\n            "updated": "2020-01-14T07:00:34.111Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjI="\n        },\n        {\n          "node": {\n            "id": "5",\n            "title": "Create Many Todo Items - 4",\n            "completed": true,\n            "created": "2020-01-14T07:01:27.805Z",\n            "updated": "2020-01-14T07:01:27.805Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjM="\n        },\n        {\n          "node": {\n            "id": "3",\n            "title": "Create Many Todo Items - 2",\n            "completed": true,\n            "created": "2020-01-14T07:00:34.111Z",\n            "updated": "2020-01-14T07:00:34.111Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjQ="\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"setting-a-default-sort",children:"Setting a default sort"}),"\n",(0,r.jsx)(n.p,{children:"When querying the default is based on the persistence layer. You can override the default by using the QueryOptions decorator on your DTO."}),"\n",(0,r.jsxs)(n.p,{children:["You can find the documentation and an example in the ",(0,r.jsx)(n.a,{href:"/nestjs-query/docs/graphql/dtos#default-sort",children:"QueryOptions reference"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var r=t(6540);const a={},s=r.createContext(a);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);