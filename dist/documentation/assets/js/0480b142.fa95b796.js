"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(y,i(i({ref:t},c),{},{components:n})):a.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7012:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"FAQ"},s=void 0,p={unversionedId:"faq",id:"faq",title:"FAQ",description:"The resolver is complaining about my QueryService",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/nestjs-query/docs/faq",draft:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/faq.md",tags:[],version:"current",frontMatter:{title:"FAQ"}},c={},u=[{value:"The resolver is complaining about my QueryService",id:"the-resolver-is-complaining-about-my-queryservice",level:2},{value:"Do I need a DTO and Entity?",id:"do-i-need-a-dto-and-entity",level:2},{value:"Can I use OFFSET paging instead of a cursor with connections?",id:"can-i-use-offset-paging-instead-of-a-cursor-with-connections",level:2},{value:"Can I use turn off paging?",id:"can-i-use-turn-off-paging",level:2},{value:"How can I filter on relations?",id:"how-can-i-filter-on-relations",level:2},{value:"Does nestjs-query support specifying complexity.",id:"does-nestjs-query-support-specifying-complexity",level:2}],d={toc:u},m="wrapper";function y(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"the-resolver-is-complaining-about-my-queryservice"},"The resolver is complaining about my QueryService"),(0,o.kt)("p",null,"If you see an error that contains the following "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"The types of 'service.query' are incompatible between these types.\n")),(0,o.kt)("p",null,"It means that your entity and DTO are not compatible. "),(0,o.kt)("p",null,"Typically this indicates that your DTO contains additional fields that your entity does not OR that you have different types for fields. "),(0,o.kt)("p",null,"To fix:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ensure that your entity has the same fields and field types as your DTO."),(0,o.kt)("li",{parentName:"ul"},"If you have fields that should be computed or derived from your entity try using an ",(0,o.kt)("a",{parentName:"li",href:"/nestjs-query/docs/concepts/advanced/assemblers"},"Assembler")," ")),(0,o.kt)("h2",{id:"do-i-need-a-dto-and-entity"},"Do I need a DTO and Entity?"),(0,o.kt)("p",null,"No, you do not! "),(0,o.kt)("p",null,"For a small project the overhead may not be worth managing both the Entity and DTO especially if they are copies of eachother."),(0,o.kt)("p",null,"In a larger, longer lived project the initial overhead of creating a DTO in the beginning can pay off if you need to make changes to your persistence layer while keeping changes in your API passive. "),(0,o.kt)("p",null,"DTOs also provide a clean separation between the fields and relationships that the persistence layer should not know or care about."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When combining your entity and DTO you should ",(0,o.kt)("strong",{parentName:"p"},"NOT")," decorate your relationships with ",(0,o.kt)("inlineCode",{parentName:"p"},"@Field")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"@FilterableField"),". Instead, add them to your CRUDResolver. ",(0,o.kt)("a",{parentName:"p",href:"/nestjs-query/docs/persistence/services#relations"},"Read More")," ")),(0,o.kt)("h2",{id:"can-i-use-offset-paging-instead-of-a-cursor-with-connections"},"Can I use OFFSET paging instead of a cursor with connections?"),(0,o.kt)("p",null,"Yes! You can specify a ",(0,o.kt)("inlineCode",{parentName:"p"},"pagingStrategy")," option to customize how paging is handled at the DTO or relation level. "),(0,o.kt)("p",null,"For more information and examples check out the following docs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/dtos#paging-strategy"},"DTO Paging Strategy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/relations#many-relation"},"Relations"))),(0,o.kt)("h2",{id:"can-i-use-turn-off-paging"},"Can I use turn off paging?"),(0,o.kt)("p",null,"Yes! You can specify a ",(0,o.kt)("inlineCode",{parentName:"p"},"pagingStrategy")," option to customize how paging is handled at the resolver or relation level. "),(0,o.kt)("p",null,"For more information and examples check out the following docs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/dtos#paging-strategy"},"DTO Paging Strategy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/relations#many-relation"},"Relations"))),(0,o.kt)("h2",{id:"how-can-i-filter-on-relations"},"How can I filter on relations?"),(0,o.kt)("p",null,"You can filter based on relations if you use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@FilterableRelation")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"@FilterableConnection")," decorators when defining your relations."),(0,o.kt)("p",null,"To read more and see examples read the following docs."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/relations#filterablerelation-decorator"},(0,o.kt)("inlineCode",{parentName:"a"},"@FilterableRelation"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/relations#filterableconnection-decorator"},(0,o.kt)("inlineCode",{parentName:"a"},"@FilterableConnection")))),(0,o.kt)("h2",{id:"does-nestjs-query-support-specifying-complexity"},"Does nestjs-query support specifying complexity."),(0,o.kt)("p",null,"Yes! "),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@FilterableField")," decorator accepts the same arguments as the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Field")," decorator from ",(0,o.kt)("inlineCode",{parentName:"p"},"@nestjs/graphql")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@Relation")," ",(0,o.kt)("inlineCode",{parentName:"p"},"@FilterableRelation"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"@UnPagedRelation"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"@FilterableUnPagedRelation"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"@OffsetConnection"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"@FilterableOffsetConnection"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"@CursorConnection"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"@FilterableCursorConnection")," decorators also accept a complexity option."),(0,o.kt)("p",null,"To read more about complexity ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/graphql/complexity"},"see the nestjs docs")))}y.isMDXComponent=!0}}]);