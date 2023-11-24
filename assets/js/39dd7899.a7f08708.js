"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[8583],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(r),v=a,m=p["".concat(l,".").concat(v)]||p[v]||d[v]||o;return r?n.createElement(m,u(u({ref:t},s),{},{components:r})):n.createElement(m,u({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=v;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,u[1]=i;for(var c=2;c<o;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(7294),a=r(4334);const o={tabItem:"tabItem_Ymn6"};function u(e){var t=e.children,r=e.hidden,u=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,u),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>x});var n=r(7462),a=r(7294),o=r(4334),u=r(2466),i=r(6550),l=r(1980),c=r(7392),s=r(12);function p(e){return function(e){var t,r;return null!=(t=null==(r=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(r);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function v(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId,o=(0,i.k6)(),u=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,l._X)(u),(0,a.useCallback)((function(e){if(u){var t=new URLSearchParams(o.location.search);t.set(u,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[u,o])]}function f(e){var t,r,n,o,u=e.defaultValue,i=e.queryString,l=void 0!==i&&i,c=e.groupId,p=d(e),f=(0,a.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!v({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:u,tabValues:p})})),y=f[0],b=f[1],g=m({queryString:l,groupId:c}),h=g[0],k=g[1],x=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),r=(0,s.Nk)(t),n=r[0],o=r[1],[n,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),j=x[0],w=x[1],I=function(){var e=null!=h?h:j;return v({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){I&&b(I)}),[I]),{selectedValue:y,selectValue:(0,a.useCallback)((function(e){if(!v({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);b(e),k(e),w(e)}),[k,w,p]),tabValues:p}}var y=r(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var t=e.className,r=e.block,i=e.selectedValue,l=e.selectValue,c=e.tabValues,s=[],p=(0,u.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,r=s.indexOf(t),n=c[r].value;n!==i&&(p(t),l(n))},v=function(e){var t,r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,a=s.indexOf(e.currentTarget)+1;r=null!=(n=s[a])?n:s[0];break;case"ArrowLeft":var o,u=s.indexOf(e.currentTarget)-1;r=null!=(o=s[u])?o:s[s.length-1]}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((function(e){var t=e.value,r=e.label,u=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return s.push(e)},onKeyDown:v,onClick:d},u,{className:(0,o.Z)("tabs__item",b.tabItem,null==u?void 0:u.className,{"tabs__item--active":i===t})}),null!=r?r:t)})))}function h(e){var t=e.lazy,r=e.children,n=e.selectedValue,o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var u=o.find((function(e){return e.props.value===n}));return u?(0,a.cloneElement)(u,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function k(e){var t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},a.createElement(g,(0,n.Z)({},e,t)),a.createElement(h,(0,n.Z)({},e,t)))}function x(e){var t=(0,y.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},262:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),u=(r(4866),r(5162),["components"]),i={title:"v0.10.x to v0.11.x"},l=void 0,c={unversionedId:"migration-guides/v0.10.x-to-v0.11.x",id:"migration-guides/v0.10.x-to-v0.11.x",title:"v0.10.x to v0.11.x",description:"@InjectQueryService",source:"@site/docs/migration-guides/v0.10.x-to-v0.11.x.mdx",sourceDirName:"migration-guides",slug:"/migration-guides/v0.10.x-to-v0.11.x",permalink:"/nestjs-query/docs/migration-guides/v0.10.x-to-v0.11.x",draft:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/migration-guides/v0.10.x-to-v0.11.x.mdx",tags:[],version:"current",frontMatter:{title:"v0.10.x to v0.11.x"},sidebar:"docs",previous:{title:"v0.12.x to v0.13.x",permalink:"/nestjs-query/docs/migration-guides/v0.12.x-to-v0.13.x"},next:{title:"v0.5.x to v0.6.x",permalink:"/nestjs-query/docs/migration-guides/v0.5.x-to-v0.6.x"}},s={},p=[{value:"<code>@InjectQueryService</code>",id:"injectqueryservice",level:3},{value:"New Features",id:"new-features",level:2}],d={toc:p},v="wrapper";function m(e){var t=e.components,r=(0,a.Z)(e,u);return(0,o.kt)(v,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"injectqueryservice"},(0,o.kt)("inlineCode",{parentName:"h3"},"@InjectQueryService")),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"v0.11.x")," an new decorator was added ",(0,o.kt)("inlineCode",{parentName:"p"},"@InjectQueryService"),", this decorator replaces the ORM specific decorators:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@InjectTypeOrmQueryService")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@InjectSequelizeQueryService"))),(0,o.kt)("p",null,"To migrate replace all ",(0,o.kt)("inlineCode",{parentName:"p"},"@InjectTypeOrmQueryService")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@InjectSequelizeQueryService")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"@InjectQueryService"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You still need to import the ",(0,o.kt)("inlineCode",{parentName:"p"},"NestjsQueryTypeOrmModule")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"NestjsQuerySequelizeModule")," to use ",(0,o.kt)("inlineCode",{parentName:"p"},"@InjectQueryService"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { QueryService, InjectQueryService } from '@ptc-org/nestjs-query-core';\nimport { CRUDResolver } from '@ptc-org/nestjs-query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO) {\n  constructor(@InjectQueryService(TodoItemEntity) readonly service: QueryService<TodoItemEntity>) {\n    super(service);\n  }\n}\n")),(0,o.kt)("h2",{id:"new-features"},"New Features"),(0,o.kt)("p",null,"To see other non-breaking features checkout to ",(0,o.kt)("a",{parentName:"p",href:"/blog/2020/05/07/v0.11.0"},"v0.11.0 blog post")))}m.isMDXComponent=!0}}]);