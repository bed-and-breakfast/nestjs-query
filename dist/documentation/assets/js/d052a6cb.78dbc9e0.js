"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[7096],{6993:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=t(4848),a=t(8453);t(1470),t(9365);const i={title:"v0.15.x to v0.16.x"},o=void 0,s={id:"migration-guides/v0.15.x-to-v0.16.x",title:"v0.15.x to v0.16.x",description:"Filter on Relations",source:"@site/docs/migration-guides/v0.15.x-to-v0.16.x.mdx",sourceDirName:"migration-guides",slug:"/migration-guides/v0.15.x-to-v0.16.x",permalink:"/nestjs-query/docs/migration-guides/v0.15.x-to-v0.16.x",draft:!1,unlisted:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/migration-guides/v0.15.x-to-v0.16.x.mdx",tags:[],version:"current",frontMatter:{title:"v0.15.x to v0.16.x"},sidebar:"docs",previous:{title:"v0.22.x to v0.23.x",permalink:"/nestjs-query/docs/migration-guides/v0.22.x-to-v0.23.x"},next:{title:"v0.14.x to v0.15.x",permalink:"/nestjs-query/docs/migration-guides/v0.14.x-to-v0.15.x"}},l={},u=[{value:"Filter on Relations",id:"filter-on-relations",level:2},{value:"Filter Definitions",id:"filter-definitions",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"filter-on-relations",children:"Filter on Relations"}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.code,{children:"v0.16.x"})," we made a big step forward in the functionality of relations by allowing for filtering on their properties. While making this change it was aso decided to unify the way that relations are defined."]}),"\n",(0,r.jsxs)(n.p,{children:["In previous versions of ",(0,r.jsx)(n.code,{children:"nestjs-query"})," you could define relations using the ",(0,r.jsx)(n.code,{children:"@Relation"})," or ",(0,r.jsx)(n.code,{children:"@Connection"})," decorator as well as manually defining them when creating your resolvers, this leads to an in consistent experience while using ",(0,r.jsx)(n.code,{children:"nestjs-query"}),". In the latest version all relations ",(0,r.jsx)(n.strong,{children:"MUST"})," be defined using the decorators."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.code,{children:"v0.16.x"})," there are two new decorators (",(0,r.jsx)(n.code,{children:"@FilterableRelation"}),", ",(0,r.jsx)(n.code,{children:"@FilterableConnection"}),") exposed to allow you to decide if end users should be able to filter on the relation."]}),"\n",(0,r.jsxs)(n.p,{children:["To read more about the new decorators as well as defining relations you can read the ",(0,r.jsx)(n.a,{href:"/nestjs-query/docs/graphql/relations",children:(0,r.jsx)(n.code,{children:"relations docs"})})]}),"\n",(0,r.jsx)(n.h2,{id:"filter-definitions",children:"Filter Definitions"}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.code,{children:"v0.16.x"})," filters are defined based on the operation (read, update, delete). In previous versions of ",(0,r.jsx)(n.code,{children:"nestjs-query"})," all filters for a type in graphql were the same. In ",(0,r.jsx)(n.code,{children:"v0.16.x"})," this behavior needed to change in order to support filtering on relations."]}),"\n",(0,r.jsx)(n.p,{children:"This should be a passive change for most, however the generated graphql schema will contain new types for each filter operation."})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var r=t(4164);const a={tabItem:"tabItem_Ymn6"};var i=t(4848);function o(e){var n=e.children,t=e.hidden,o=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(6540),a=t(4164),i=t(3104),o=t(2195),s=t(205),l=t(7485),u=t(1682),c=t(8760);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function f(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,u.XI)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function v(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,i=(0,o.W6)(),s=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,l.aZ)(s),(0,r.useCallback)((function(e){if(s){var n=new URLSearchParams(i.location.search);n.set(s,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[s,i])]}function p(e){var n,t,a,i,o=e.defaultValue,l=e.queryString,u=void 0!==l&&l,d=e.groupId,p=f(e),m=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:p})})),b=m[0],x=m[1],g=v({queryString:u,groupId:d}),j=g[0],y=g[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,c.Dv)(n),a=t[0],i=t[1],[a,(0,r.useCallback)((function(e){n&&i.set(e)}),[n,i])]),I=w[0],q=w[1],V=function(){var e=null!=j?j:I;return h({value:e,tabValues:p})?e:null}();return(0,s.A)((function(){V&&x(V)}),[V]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!h({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);x(e),y(e),q(e)}),[y,q,p]),tabValues:p}}var m=t(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(4848);function g(e){var n=e.className,t=e.block,r=e.selectedValue,o=e.selectValue,s=e.tabValues,l=[],u=(0,i.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,t=l.indexOf(n),a=s[t].value;a!==r&&(u(n),o(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;t=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var i,o=l.indexOf(e.currentTarget)-1;t=null!=(i=l[o])?i:l[l.length-1]}null==(n=t)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:s.map((function(e){var n=e.value,t=e.label,i=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return l.push(e)},onKeyDown:d,onClick:c},i,{className:(0,a.A)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function j(e){var n=e.lazy,t=e.children,i=e.selectedValue,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var s=o.find((function(e){return e.props.value===i}));return s?(0,r.cloneElement)(s,{className:(0,a.A)("margin-top--md",s.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})}))})}function y(e){var n=p(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,x.jsx)(g,Object.assign({},n,e)),(0,x.jsx)(j,Object.assign({},n,e))]})}function w(e){var n=(0,m.A)();return(0,x.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var r=t(6540);const a={},i=r.createContext(a);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);