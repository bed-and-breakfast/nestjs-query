"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[8021],{5892:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=r(5893),s=r(1151);const i={title:"Query Helpers"},l=void 0,a={id:"utilities/query-helpers",title:"Query Helpers",description:"The @ptc-org/nestjs-query-core package provides a number of helper functions to transform or apply queries to a list of items.",source:"@site/docs/utilities/query-helpers.mdx",sourceDirName:"utilities",slug:"/utilities/query-helpers",permalink:"/nestjs-query/docs/utilities/query-helpers",draft:!1,unlisted:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/utilities/query-helpers.mdx",tags:[],version:"current",frontMatter:{title:"Query Helpers"},sidebar:"docs",previous:{title:"Federation",permalink:"/nestjs-query/docs/graphql/federation"},next:{title:"v2.x.x to v3.x.x",permalink:"/nestjs-query/docs/migration-guides/v2.x.x-to-v3.x.x"}},o={},d=[{value:"applyFilter",id:"applyfilter",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Example",id:"example",level:3},{value:"applySort",id:"applysort",level:2},{value:"Arguments",id:"arguments-1",level:3},{value:"Example",id:"example-1",level:3},{value:"applyPaging",id:"applypaging",level:2},{value:"Arguments",id:"arguments-2",level:3},{value:"Example",id:"example-2",level:3},{value:"applyQuery",id:"applyquery",level:2},{value:"Arguments",id:"arguments-3",level:3},{value:"Example",id:"example-3",level:3},{value:"transformFilter",id:"transformfilter",level:2},{value:"Arguments",id:"arguments-4",level:3},{value:"Example",id:"example-4",level:3},{value:"transformSort",id:"transformsort",level:2},{value:"Arguments",id:"arguments-5",level:3},{value:"Example",id:"example-5",level:3},{value:"transformQuery",id:"transformquery",level:2},{value:"Arguments",id:"arguments-6",level:3},{value:"Example",id:"example-6",level:3},{value:"getFilterComparisons",id:"getfiltercomparisons",level:2},{value:"Arguments",id:"arguments-7",level:3},{value:"Example",id:"example-7",level:3},{value:"getFilterOmitting",id:"getfilteromitting",level:2},{value:"Arguments",id:"arguments-8",level:3},{value:"Example",id:"example-8",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"@ptc-org/nestjs-query-core"})," package provides a number of helper functions to transform or apply queries to a list of items."]}),"\n",(0,t.jsxs)(n.p,{children:["An example use case for these helpers would be to write a ",(0,t.jsx)(n.code,{children:"QueryService"})," that wraps a store that does not support the\nquery options natively (e.g. An in memory collection of objects such as a static array of objects)."]}),"\n",(0,t.jsx)(n.p,{children:"All examples will be based on the following DTO definition."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface TestDTO {\n  first?: string | null;\n\n  last?: string | null;\n\n  age?: number | null;\n\n  isVerified?: boolean | null;\n\n  created?: Date | null;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"applyfilter",children:"applyFilter"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"applyFilter"})," helper applies a ",(0,t.jsx)(n.code,{children:"Filter"})," to a single object or an array of objects."]}),"\n",(0,t.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"dto: DTO|DTO[]"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If a single object a function that will test the dto against the filter, returning ",(0,t.jsx)(n.code,{children:"true"})," when if it matches the\nfilter."]}),"\n",(0,t.jsx)(n.li,{children:"If an array of objects is provided the array will be filtered returning a new array with all elements that match\nthe filter."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"filter: Filter<DTO>"})," - The filter to check the object[s] against. See ",(0,t.jsx)(n.a,{href:"/nestjs-query/docs/concepts/queries#filtering",children:(0,t.jsx)(n.code,{children:"Filtering"})})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { applyFilter } from `@ptc-org/nestjs-query-core`;\n\nconst dtos: TestDTO[] = [\n  {first: 'Bob', last: 'Yukon'}\n  {first: 'Alice', last: 'Yukon'}\n  {first: 'Sally', last: 'Yukon'}\n  {first: 'Zane', last: 'Yukon'}\n]\nconst filtered = applyFilter(dtos, {first: {in: ['Bob', 'Sally']})\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const dto: TestDTO = {first: 'Bob', last: 'Yukon'};\napplyFilter<TestDTO>(dto, {first: {in: ['Bob', 'Sally']}) // true\napplyFilter<TestDTO>(dto, {first: {eq: ['Alice', 'Zane']}) // false\n"})}),"\n",(0,t.jsx)(n.h2,{id:"applysort",children:"applySort"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"applySort"})," will sort an array of dtos."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Because ",(0,t.jsx)(n.code,{children:"applySort"})," uses the native ",(0,t.jsx)(n.code,{children:"Array#sort"})," method it may not exactly match the ordering you would expect from a\ndatabase."]})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"It is expected that your data types all match. For example if you have a number field that also has some numbers\nrepresented as strings the applySort method may not work as expected."})}),"\n",(0,t.jsx)(n.h3,{id:"arguments-1",children:"Arguments"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"dto: DTO[]"})," - The array of DTOs to sort."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"sortFields: SortField<DTO>[]"})," - The sorting criteria. See ",(0,t.jsx)(n.a,{href:"/nestjs-query/docs/concepts/queries#sorting",children:(0,t.jsx)(n.code,{children:"Sorting"})})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { applySort, SortDirection, SortNulls } from `@ptc-org/nestjs-query-core`;\n\nconst dtos: TestDTO[] = [\n  {first: 'Bob', last: 'Yukon'}\n  {first: 'Alice', last: 'Yukon'}\n  {first: null, last: 'Yukon'}\n  {first: 'Sally', last: 'Yukon'}\n  {last: 'Yukon'}\n  {first: 'Zane', last: 'Yukon'}\n]\nconst sorted = applySort(dtos, [\n   { field: 'first', direction: SortDirection.DESC, nulls: SortNulls.NULLS_LAST },\n])\n"})}),"\n",(0,t.jsx)(n.p,{children:"The resulting sorted array would be."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"[\n  {first: 'Zane', last: 'Yukon'}\n  {first: 'Sally', last: 'Yukon'}\n  {first: 'Bob', last: 'Yukon'}\n  {first: 'Alice', last: 'Yukon'}\n  {first: null, last: 'Yukon'}\n  {last: 'Yukon'}\n]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"applypaging",children:"applyPaging"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"applyPaging"})," method will apply a ",(0,t.jsx)(n.code,{children:"limit"})," and/or ",(0,t.jsx)(n.code,{children:"offset"})," to an array of dtos."]}),"\n",(0,t.jsx)(n.h3,{id:"arguments-2",children:"Arguments"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"dto: DTO[]"})," - The array of DTOs to page."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"paging: Paging"})," - The paging arguments to apply. See ",(0,t.jsx)(n.a,{href:"/nestjs-query/docs/concepts/queries#paging",children:(0,t.jsx)(n.code,{children:"Paging"})})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example-2",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { applyPaging } from `@ptc-org/nestjs-query-core`;\nconst dtos: TestDTO[] = [\n  {first: 'Bob', last: 'Yukon'}\n  {first: 'Alice', last: 'Yukon'}\n  {first: 'Sally', last: 'Yukon'}\n  {first: 'Zane', last: 'Yukon'}\n]\nconst paged = applyPaging(dtos, {offset: 1, limit: 2})\n"})}),"\n",(0,t.jsx)(n.p,{children:"The resulting paged dtos would be."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"[\n  {first: 'Alice', last: 'Yukon'}\n  {first: 'Sally', last: 'Yukon'}\n]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"applyquery",children:"applyQuery"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"applyQuery"})," uses the ",(0,t.jsx)(n.code,{children:"applyFilter"}),", ",(0,t.jsx)(n.code,{children:"applySorting"}),", and ",(0,t.jsx)(n.code,{children:"applyPaging"})," methods to apply a ",(0,t.jsx)(n.code,{children:"Query"})," to an array of\nDTOs."]}),"\n",(0,t.jsx)(n.h3,{id:"arguments-3",children:"Arguments"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"dto: DTO[]"})," - The array of DTOs to page."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"query: Query<DTO>"})," - The query to apply to the array of dtos. See ",(0,t.jsx)(n.a,{href:"/nestjs-query/docs/concepts/queries",children:(0,t.jsx)(n.code,{children:"Queries"})})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example-3",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { applyQuery, SortDirection } from `@ptc-org/nestjs-query-core`;\n\nconst dtos: TestDTO[] = [\n  {first: 'Bob', last: 'Yukon', isVerified: true}\n  {first: 'Alice', last: 'Yukon', isVerified: false}\n  {first: 'Sally', last: 'Yukon', isVerified: true}\n  {first: 'Zane', last: 'Yukon', isVerified: true}\n]\nconst queryResult = applyQuery(dtos, {\n  filter: { isVerified: { is: true } },\n  sorting: [{ field: 'first', direction: SortDirection.DESC }],\n  paging: { offset: 1, limit: 2 }\n})\n"})}),"\n",(0,t.jsx)(n.p,{children:"The resulting array of dtos would be."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"[\n  {first: 'Sally', last: 'Yukon', isVerified: true}\n  {first: 'Bob', last: 'Yukon', isVerified: true}\n]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"transformfilter",children:"transformFilter"}),"\n",(0,t.jsxs)(n.p,{children:["The transformFilter is used to remap fields in a ",(0,t.jsx)(n.code,{children:"Filter"}),". This method is commonly used when defining a custom\n",(0,t.jsx)(n.a,{href:"/nestjs-query/docs/concepts/advanced/assemblers",children:"Assembler"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"arguments-4",children:"Arguments"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"filter: Filter<From>"})," - The filter you want to transform."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"fieldMap: QueryFieldMap<From, To>"})," - A map of fields where the key is a key in the From type, and the value is a\nkey in the to type."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example-4",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { transformFilter, QueryFieldMap, Filter } from `@ptc-org/nestjs-query-core`;\n\nclass TestEntity {\n  firstName!: string;\n\n  lastName!: string;\n}\n\nconst fieldMap: QueryFieldMap<TestDTO, TestEntity> = {\n  first: 'firstName',\n  last: 'lastName',\n};\n\nconst dtoFilter: Filter<TestDTO> = {\n  first: { eq: 'foo' },\n  last: { neq: 'bar' },\n};\n\nconst transformed = transformFilter(dtoFilter, fieldMap);\n"})}),"\n",(0,t.jsx)(n.p,{children:"The new filter would be"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"{\n  firstName: { eq: 'foo' },\n  lastName: { neq: 'bar' },\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"transformsort",children:"transformSort"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"transformSort"})," is used to remap fields in an array of ",(0,t.jsx)(n.code,{children:"SortField<DTO>[]"}),". This method is commonly used when\ndefining a custom ",(0,t.jsx)(n.a,{href:"/nestjs-query/docs/concepts/advanced/assemblers",children:"Assembler"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"arguments-5",children:"Arguments"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"sortFields: SortField<From>[]"})," - The array of sorting criteria to transform."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"fieldMap: QueryFieldMap<From, To>"})," - A map of fields where the key is a key in the From type, and the value is a key in the to type."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example-5",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { transformSort, QueryFieldMap, SortField, SortDirection } from `@ptc-org/nestjs-query-core`;\n\nclass TestEntity {\n  firstName!: string;\n\n  lastName!: string;\n}\n\nconst fieldMap: QueryFieldMap<TestDTO, TestEntity> = {\n  first: 'firstName',\n  last: 'lastName',\n};\nconst dtoSort: SortField<TestDTO>[] = [\n  { field: 'first', direction: SortDirection.DESC },\n  { field: 'last', direction: SortDirection.ASC },\n];\n\nconst transformed = transformSort(dtoSort, fieldMap);\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"[\n  { field: 'firstName', direction: SortDirection.DESC },\n  { field: 'lastName', direction: SortDirection.ASC },\n];\n"})}),"\n",(0,t.jsx)(n.h2,{id:"transformquery",children:"transformQuery"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"transformQuery"})," method uses the ",(0,t.jsx)(n.code,{children:"transformFilter"})," and ",(0,t.jsx)(n.code,{children:"transformSort"})," methods to remap a ",(0,t.jsx)(n.code,{children:"Query"}),". This method is\ncommonly used when defining a custom ",(0,t.jsx)(n.a,{href:"/nestjs-query/docs/concepts/advanced/assemblers",children:"Assembler"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"arguments-6",children:"Arguments"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"sortFields: Query<From>"})," - The query to transform."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"fieldMap: QueryFieldMap<From, To>"})," - A map of fields where the key is a key in the From type, and the value is a key in the to type."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example-6",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { transformQuery, QueryFieldMap, Query, SortDirection } from `@ptc-org/nestjs-query-core`;\n\nclass TestEntity {\n  firstName!: string;\n\n  lastName!: string;\n}\n\nconst fieldMap: QueryFieldMap<TestDTO, TestEntity> = {\n  first: 'firstName',\n  last: 'lastName',\n};\nconst dtoQuery: Query<TestDTO> = {\n  filter: { first: { eq: 'foo' }, last: { neq: 'bar' } }\n  sorting: [\n    { field: 'first', direction: SortDirection.DESC },\n    { field: 'last', direction: SortDirection.ASC },\n  ]\n};\n\nconst transformed =  transformQuery(dtoQuery, fieldMap);\n"})}),"\n",(0,t.jsx)(n.p,{children:"The resulting query would be."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"{\n  filter: { firstName: { eq: 'foo' }, lastName: { neq: 'bar' } }\n  sorting: [\n    { field: 'firstName', direction: SortDirection.DESC },\n    { field: 'lastName', direction: SortDirection.ASC },\n  ]\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"getfiltercomparisons",children:"getFilterComparisons"}),"\n",(0,t.jsx)(n.p,{children:"Used to search a filter get a list of comparison objects for a given key."}),"\n",(0,t.jsx)(n.h3,{id:"arguments-7",children:"Arguments"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"filter: Filter<DTO>"})," - The filter to search."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"key: keyof DTO"})," - The key in the DTO object to search for in the filter object."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example-7",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { Filter, getFilterComparisons } from `@ptc-org/nestjs-query-core`;\n\nclass TestDTO {\n  age!: number;\n\n  title!: string;\n}\n\nconst filter: Filter<TestDTO> = {\n  age: { gte: 10 },\n  or: [{ title: { like: '%bar' } }, { title: { eq: 'foobar' } }],\n};\n\nconst comparisons = getFilterComparisons(filter, 'title');\n"})}),"\n",(0,t.jsx)(n.p,{children:"The resulting array would be"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"[{ like: '%bar' }, { eq: 'foobar' }];\n"})}),"\n",(0,t.jsx)(n.h2,{id:"getfilteromitting",children:"getFilterOmitting"}),"\n",(0,t.jsx)(n.p,{children:"Used to get a filter with a given key removed."}),"\n",(0,t.jsx)(n.h3,{id:"arguments-8",children:"Arguments"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"filter: Filter<DTO>"})," - The filter containing the unwanted key."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"key: keyof DTO"})," - The key in the DTO object to remove in the filter object."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example-8",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { Filter, getFilterOmitting } from `@ptc-org/nestjs-query-core`;\n\nclass TestDTO {\n  age!: number;\n\n  title!: string;\n}\n\nconst filter: Filter<TestDTO> = {\n  age: { gte: 10 },\n  or: [{ title: { like: '%bar' } }, { title: { eq: 'foobar' } }],\n};\n\nconst filterWithoutTitle = getFilterOmitting(filter, 'title');\n"})}),"\n",(0,t.jsx)(n.p,{children:"The resulting filter would be"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"{\n  age: { gte: 10 },\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>l});var t=r(7294);const s={},i=t.createContext(s);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);