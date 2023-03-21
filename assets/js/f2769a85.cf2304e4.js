"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[6578],{2342:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(6010);const r="tabItem_Ymn6";function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:a},t)}},7303:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7462),l=a(7294),r=a(6010),o=a(5730),p=a(636),i=a(6602),u=a(3735);const d="tabList__CuJ",s="tabItem_LNqP";function m(e){var t,a,o=e.lazy,m=e.block,c=e.defaultValue,h=e.values,k=e.groupId,v=e.className,T=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:T.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,p.l)(f,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(t=null!=c?c:null==(a=T.find((function(e){return e.props.default})))?void 0:a.props.value)?t:T[0].props.value;if(null!==y&&!f.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.U)(),N=b.tabGroupChoices,x=b.setTabGroupChoices,C=(0,l.useState)(y),O=C[0],I=C[1],w=[],q=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var D=N[k];null!=D&&D!==O&&f.some((function(e){return e.value===D}))&&I(D)}var Z=function(e){var t=e.currentTarget,a=w.indexOf(t),n=f[a].value;n!==O&&(q(t),I(n),null!=k&&x(k,String(n)))},j=function(e){var t,a=null;switch(e.key){case"Enter":Z(e);break;case"ArrowRight":var n,l=w.indexOf(e.currentTarget)+1;a=null!=(n=w[l])?n:w[0];break;case"ArrowLeft":var r,o=w.indexOf(e.currentTarget)-1;a=null!=(r=w[o])?r:w[w.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},v)},f.map((function(e){var t=e.value,a=e.label,o=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return w.push(e)},onKeyDown:j,onClick:Z},o,{className:(0,r.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=a?a:t)}))),o?(0,l.cloneElement)(T.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},T.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function c(e){var t=(0,o.Z)();return l.createElement(m,(0,n.Z)({key:String(t)},e))}},5579:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>k,frontMatter:()=>u,metadata:()=>s,toc:()=>c});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),o=a(7303),p=a(2342),i=["components"],u={title:"Mutations"},d=void 0,s={unversionedId:"graphql/mutations",id:"graphql/mutations",title:"Mutations",description:"The CRUDResolver automatically exposes six mutation endpoints. The endpoints names will be derived",source:"@site/docs/graphql/mutations.mdx",sourceDirName:"graphql",slug:"/graphql/mutations",permalink:"/nestjs-query/docs/graphql/mutations",draft:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/graphql/mutations.mdx",tags:[],version:"current",frontMatter:{title:"Mutations"},sidebar:"docs",previous:{title:"Queries",permalink:"/nestjs-query/docs/graphql/queries"},next:{title:"Paging",permalink:"/nestjs-query/docs/graphql/paging"}},m={},c=[{value:"Create One",id:"create-one",level:3},{value:"Create Many",id:"create-many",level:3},{value:"Examples",id:"examples",level:4},{value:"Update One",id:"update-one",level:3},{value:"Examples",id:"examples-1",level:4},{value:"Update Many",id:"update-many",level:3},{value:"Examples",id:"examples-2",level:4},{value:"Delete One",id:"delete-one",level:3},{value:"Examples",id:"examples-3",level:4},{value:"Delete Many",id:"delete-many",level:3},{value:"Examples",id:"examples-4",level:4}],h={toc:c};function k(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/nestjs-query/docs/graphql/resolvers"},"CRUDResolver")," automatically exposes six mutation endpoints. The endpoints names will be derived\nfrom name provided to ",(0,r.kt)("inlineCode",{parentName:"p"},"@ObjectType")," or the class name."),(0,r.kt)("p",null,"The following examples are based on the following ",(0,r.kt)("inlineCode",{parentName:"p"},"TodoItemDTO")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.dto.ts"',title:'"todo-item.dto.ts"'},"import { FilterableField, IDField } from '@ptc-org/nestjs-query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\n\n@ObjectType('TodoItem')\nexport class TodoItemDTO {\n  @IDField(() => ID)\n  id!: string;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n}\n\n")),(0,r.kt)("p",null,"In the following examples you will see the following endpoints referenced"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"createOneTodoItem")," - graphql endpoint to create a single record.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"createManyTodoItems")," - graphql endpoint to create multiple records,")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"updateOneTodoItem")," - graphql endpoint to update a single record by id.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"updateManyTodoItems")," - graphql endpoint update multiple records with a filter,")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"deleteOneTodoItem")," - graphql endpoint to delete one record by id.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"deleteManyTodoItems")," - graphql endpoint to delete multiple records with a filter."))),(0,r.kt)("h3",{id:"create-one"},"Create One"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CRUDResolver")," will by default expose a ",(0,r.kt)("inlineCode",{parentName:"p"},"createOne")," mutation using the name of the DTO to name the mutation."),(0,r.kt)("p",null,"In this example we create a single ",(0,r.kt)("inlineCode",{parentName:"p"},"TodoItem"),", the input by default will be a ",(0,r.kt)("inlineCode",{parentName:"p"},"Partial")," of the DTO."),(0,r.kt)(o.Z,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"graphql",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  createOneTodoItem(\n    input: { todoItem: { title: "Create One Todo Item", completed: false } }\n  ) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n'))),(0,r.kt)(p.Z,{value:"response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "createOneTodoItem": {\n      "id": "1",\n      "title": "Create One Todo Item",\n      "completed": false,\n      "created": "2020-01-14T09:01:35.834Z",\n      "updated": "2020-01-14T09:01:35.834Z"\n    }\n  }\n}\n')))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"create-many"},"Create Many"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CRUDResolver")," will by default expose a ",(0,r.kt)("inlineCode",{parentName:"p"},"createMany")," mutation using the name of the DTO to name the mutation."),(0,r.kt)("p",null,"In this example we create multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"TodoItems"),", the each record is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Partial")," of the DTO."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"The following example creates two ",(0,r.kt)("inlineCode",{parentName:"p"},"TodoItems"),"."),(0,r.kt)(o.Z,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"graphql",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  createManyTodoItems(\n    input: {\n      todoItems: [\n        { title: "Create Many Todo Items - 1", completed: false }\n        { title: "Create Many Todo Items - 2", completed: true }\n      ]\n    }\n  ) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n'))),(0,r.kt)(p.Z,{value:"response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "createManyTodoItems": [\n      {\n        "id": "2",\n        "title": "Create Many Todo Items - 1",\n        "completed": false,\n        "created": "2020-01-14T09:01:55.110Z",\n        "updated": "2020-01-14T09:01:55.110Z"\n      },\n      {\n        "id": "3",\n        "title": "Create Many Todo Items - 2",\n        "completed": true,\n        "created": "2020-01-14T09:01:55.110Z",\n        "updated": "2020-01-14T09:01:55.110Z"\n      }\n    ]\n  }\n}\n')))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"update-one"},"Update One"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CRUDResolver")," will by default expose an ",(0,r.kt)("inlineCode",{parentName:"p"},"updateOne")," mutation that takes two fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),": The id of the record to update."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"update"),": The values to update on the record. This is a partial so you only have to pass in the values you want to\nchange.")),(0,r.kt)("h4",{id:"examples-1"},"Examples"),(0,r.kt)("p",null,"The following example updates the record with ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"completed=true")),(0,r.kt)(o.Z,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"graphql",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  updateOneTodoItem(input: { id: 1, update: { completed: true } }) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n"))),(0,r.kt)(p.Z,{value:"response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "updateOneTodoItem": {\n      "id": "1",\n      "title": "Create One Todo Item",\n      "completed": true,\n      "created": "2020-01-14T07:00:31.763Z",\n      "updated": "2020-01-14T09:02:28.167Z"\n    }\n  }\n}\n')))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"update-many"},"Update Many"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CRUDResolver")," will by default expose an ",(0,r.kt)("inlineCode",{parentName:"p"},"updateMany")," mutation that takes two fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"filter"),": The filter to use to find the records to update.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NOTE")," The filter ",(0,r.kt)("strong",{parentName:"li"},"CANNOT")," be an empty object. This prevents accidental updating of all records."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"update"),": The values to update on the record. This is a partial so you only have to pass in the values you want to\nchange.")),(0,r.kt)("p",null,"The response contains the number of records updated."),(0,r.kt)("h4",{id:"examples-2"},"Examples"),(0,r.kt)("p",null,"The following example updates records with an ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," equal to 1 or 2 to ",(0,r.kt)("inlineCode",{parentName:"p"},"completed=true"),"."),(0,r.kt)(o.Z,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"graphql",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  updateManyTodoItems(\n    input: { filter: { id: { in: [1, 2] } }, update: { completed: true } }\n  ) {\n    updatedCount\n  }\n}\n"))),(0,r.kt)(p.Z,{value:"response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "updateManyTodoItems": {\n      "updatedCount": 2\n    }\n  }\n}\n')))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"delete-one"},"Delete One"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CRUDResolver")," will by default expose a ",(0,r.kt)("inlineCode",{parentName:"p"},"deleteOne")," mutation that allows you to delete a record by id:"),(0,r.kt)("h4",{id:"examples-3"},"Examples"),(0,r.kt)("p",null,"The following example deletes the record with an id equal to 1."),(0,r.kt)(o.Z,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"graphql",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  deleteOneTodoItem(input: { id: 1 }) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n"))),(0,r.kt)(p.Z,{value:"response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "deleteOneTodoItem": {\n      "title": "Create One Todo Item",\n      "completed": true,\n      "created": "2020-01-14T07:00:31.763Z",\n      "updated": "2020-01-14T09:02:51.429Z"\n    }\n  }\n}\n')))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"delete-many"},"Delete Many"),(0,r.kt)("p",null,"The CRUDResolver will by default expose a ",(0,r.kt)("inlineCode",{parentName:"p"},"deleteMany")," mutation that takes a ",(0,r.kt)("inlineCode",{parentName:"p"},"filter"),":"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE")," The filter ",(0,r.kt)("strong",{parentName:"p"},"CANNOT")," be an empty object. This prevents accidental deletion of all records."),(0,r.kt)("h4",{id:"examples-4"},"Examples"),(0,r.kt)("p",null,"The following example deletes all records that start with ",(0,r.kt)("inlineCode",{parentName:"p"},"Create Many Todo Items"),"."),(0,r.kt)(o.Z,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"graphql",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  deleteManyTodoItems(\n    input: { filter: { title: { like: "Create Many Todo Items%" } } }\n  ) {\n    deletedCount\n  }\n}\n'))),(0,r.kt)(p.Z,{value:"response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "deleteManyTodoItems": {\n      "deletedCount": 6\n    }\n  }\n}\n')))))}k.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=u(a),c=l,h=m["".concat(i,".").concat(c)]||m[c]||s[c]||r;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,o[1]=p;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);