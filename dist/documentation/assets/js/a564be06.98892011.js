"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[8677],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),y=a,f=p["".concat(u,".").concat(y)]||p[y]||m[y]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},148:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={title:"v0.3.1",author:"Doug Martin",author_title:"Creator",author_url:"https://github.com/tripss",author_image_url:"https://avatars1.githubusercontent.com/u/361261?v=4",tags:["releases","patch"]},u=void 0,s={permalink:"/nestjs-query/blog/2020/02/21/v0.3.1",editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/blog/blog/2020-02-21-v0.3.1.md",source:"@site/blog/2020-02-21-v0.3.1.md",title:"v0.3.1",description:"* Hardened TypeORM querying",date:"2020-02-21T00:00:00.000Z",formattedDate:"February 21, 2020",tags:[{label:"releases",permalink:"/nestjs-query/blog/tags/releases"},{label:"patch",permalink:"/nestjs-query/blog/tags/patch"}],readingTime:.155,hasTruncateMarker:!1,authors:[{name:"Doug Martin",title:"Creator",url:"https://github.com/tripss",imageURL:"https://avatars1.githubusercontent.com/u/361261?v=4"}],frontMatter:{title:"v0.3.1",author:"Doug Martin",author_title:"Creator",author_url:"https://github.com/tripss",author_image_url:"https://avatars1.githubusercontent.com/u/361261?v=4",tags:["releases","patch"]},prevItem:{title:"v0.3.0",permalink:"/nestjs-query/blog/2020/02/21/v0.3.0"},nextItem:{title:"v0.2.1",permalink:"/nestjs-query/blog/2020/02/18/v0.2.1"}},c={authorsImageUrls:[void 0]},p=[],m={toc:p},y="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(y,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Hardened TypeORM querying",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Added filter for entity ids on relations to prevent querying for too many rows."),(0,o.kt)("li",{parentName:"ul"},"Qualify all filter and sorting columns, to prevent column name collisions.")))))}f.isMDXComponent=!0}}]);