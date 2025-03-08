"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[1433],{4195:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var r=t(4848),o=t(8453),l=t(1470),s=t(9365);const a={title:"Types"},i=void 0,d={id:"graphql/types",title:"Types",description:"@ptc-org/nestjs-query-graphql provides a number of types. Most will be automatically generated for you when you create a",source:"@site/docs/graphql/types.mdx",sourceDirName:"graphql",slug:"/graphql/types",permalink:"/nestjs-query/docs/graphql/types",draft:!1,unlisted:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/graphql/types.mdx",tags:[],version:"current",frontMatter:{title:"Types"},sidebar:"docs",previous:{title:"Relations",permalink:"/nestjs-query/docs/graphql/relations"},next:{title:"Federation",permalink:"/nestjs-query/docs/graphql/federation"}},c={},u=[{value:"ArgsTypes",id:"argstypes",level:2},{value:"QueryArgsType",id:"queryargstype",level:3},{value:"Usage",id:"usage",level:4},{value:"ObjectTypes",id:"objecttypes",level:2},{value:"ConnectionType",id:"connectiontype",level:3},{value:"Usage",id:"usage-1",level:4},{value:"UpdateManyResponseType",id:"updatemanyresponsetype",level:3},{value:"Usage",id:"usage-2",level:4},{value:"DeleteManyResponseType",id:"deletemanyresponsetype",level:3},{value:"Usage",id:"usage-3",level:4},{value:"InputTypes",id:"inputtypes",level:2},{value:"FilterType",id:"filtertype",level:3},{value:"SortType",id:"sorttype",level:3},{value:"Fields",id:"fields",level:4},{value:"CreateOneInputType",id:"createoneinputtype",level:3},{value:"Usage",id:"usage-4",level:4},{value:"CreateManyInputType",id:"createmanyinputtype",level:3},{value:"Usage",id:"usage-5",level:4},{value:"UpdateOneInputType",id:"updateoneinputtype",level:3},{value:"Usage",id:"usage-6",level:4},{value:"UpdateManyInputType",id:"updatemanyinputtype",level:3},{value:"Usage",id:"usage-7",level:4},{value:"DeleteOneInputType",id:"deleteoneinputtype",level:3},{value:"Usage",id:"usage-8",level:4},{value:"DeleteManyInputType",id:"deletemanyinputtype",level:3},{value:"Usage",id:"usage-9",level:4}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@ptc-org/nestjs-query-graphql"})," provides a number of types. Most will be automatically generated for you when you create a\nresolver. However, you can use many of the types in your own code for custom endpoints."]}),"\n",(0,r.jsxs)(n.p,{children:["The following examples are based on the following ",(0,r.jsx)(n.code,{children:"TodoItemDTO"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { FilterableField, IDField } from '@ptc-org/nestjs-query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\n\n@ObjectType('TodoItem')\nexport class TodoItemDTO {\n  @IDField(() => ID)\n  id!: string;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n}\n\n"})}),"\n",(0,r.jsx)(n.h2,{id:"argstypes",children:"ArgsTypes"}),"\n",(0,r.jsx)(n.h3,{id:"queryargstype",children:"QueryArgsType"}),"\n",(0,r.jsxs)(n.p,{children:["Args type used in ",(0,r.jsx)(n.code,{children:"read"})," endpoints to allow ",(0,r.jsx)(n.code,{children:"filtering"}),", ",(0,r.jsx)(n.code,{children:"paging"}),", and ",(0,r.jsx)(n.code,{children:"sorting"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"QueryArgsType"})," will generate an ",(0,r.jsx)(n.code,{children:"ArgsType"})," that will require the user to provide three arguments."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"filter?"})," - A filter that should be used to find records to update. See ",(0,r.jsx)(n.a,{href:"#filtertype",children:"FilterType"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"paging?"})," - Options to page of result."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"sorting?"})," - Optional array to allow sorting of results. See ",(0,r.jsx)(n.a,{href:"#sorttype",children:"SortType"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { QueryArgsType } from '@ptc-org/nestjs-query-graphql';\nimport { ArgsType } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\n@ArgsType()\nexport class TodoItemQuery extends QueryArgsType(TodoItemDTO) {}\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"objecttypes",children:"ObjectTypes"}),"\n",(0,r.jsx)(n.h3,{id:"connectiontype",children:"ConnectionType"}),"\n",(0,r.jsxs)(n.p,{children:["Implementation of ",(0,r.jsx)(n.a,{href:"https://facebook.github.io/relay/graphql/connections.htm",children:"connections"}),". Useful for large result sets\nwhere the end user should be able to page through the results."]}),"\n",(0,r.jsx)(n.h4,{id:"usage-1",children:"Usage"}),"\n",(0,r.jsxs)(l.A,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Schema",value:"schema"}],children:[(0,r.jsx)(s.A,{value:"code",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { QueryArgsType } from '@ptc-org/nestjs-query-graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\nexport const TodoItemQueryArgs = QueryArgsType(TodoItemDTO)\nexport const TodoItemConnection = TodoItemQueryArgs.ConnectionType;\n"})})}),(0,r.jsx)(s.A,{value:"schema",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"scalar ConnectionCursor\n\ntype TodoItemConnection {\n  pageInfo: PageInfo!\n  edges: [TodoItemEdge!]!\n}\n\ntype TodoItemEdge {\n  node: TodoItem!\n  cursor: ConnectionCursor!\n}\n\ntype PageInfo {\n  hasNextPage: Boolean\n  hasPreviousPage: Boolean\n  startCursor: ConnectionCursor\n  endCursor: ConnectionCursor\n}\n"})})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"updatemanyresponsetype",children:"UpdateManyResponseType"}),"\n",(0,r.jsxs)(n.p,{children:["Response from ",(0,r.jsx)(n.code,{children:"updateMany"})," mutations."]}),"\n",(0,r.jsx)(n.h4,{id:"usage-2",children:"Usage"}),"\n",(0,r.jsxs)(l.A,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Schema",value:"schema"}],children:[(0,r.jsx)(s.A,{value:"code",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { UpdateManyResponseType } from '@ptc-org/nestjs-query-graphql';\n\nexport const UpdateManyResponse = UpdateManyResponseType()\n"})})}),(0,r.jsx)(s.A,{value:"schema",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"type UpdateManyResponse {\n  updatedCount: Int!\n}\n"})})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"deletemanyresponsetype",children:"DeleteManyResponseType"}),"\n",(0,r.jsxs)(n.p,{children:["Response from ",(0,r.jsx)(n.code,{children:"deleteMany"})," mutations."]}),"\n",(0,r.jsx)(n.h4,{id:"usage-3",children:"Usage"}),"\n",(0,r.jsxs)(l.A,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Schema",value:"schema"}],children:[(0,r.jsx)(s.A,{value:"code",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { DeleteManyResponseType } from '@ptc-org/nestjs-query-graphql';\n\nexport const UpdateManyResponse = DeleteManyResponseType()\n"})})}),(0,r.jsx)(s.A,{value:"schema",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"type DeleteManyResponse {\n  deletedCount: Int!\n}\n"})})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"inputtypes",children:"InputTypes"}),"\n",(0,r.jsx)(n.h3,{id:"filtertype",children:"FilterType"}),"\n",(0,r.jsxs)(n.p,{children:["GraphQL implementation of the ",(0,r.jsx)(n.code,{children:"@ptc-org/nestjs-query-core"})," ",(0,r.jsx)(n.code,{children:"Filter"})," type."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"FilterType"})," is dynamically created based on the fields in the ",(0,r.jsx)(n.code,{children:"DTO"})," annotated with ",(0,r.jsx)(n.a,{href:"/nestjs-query/docs/graphql/dtos#filterablefield",children:"@FilterableField"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Along with the dynamically create fields filter also has the following static fields:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"and"})," - Allows for joining multiple ",(0,r.jsx)(n.code,{children:"Filters"})," with using an ",(0,r.jsx)(n.code,{children:"AND"})," condition."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, find all todo items that ",(0,r.jsx)(n.code,{children:"start with 'Foo' AND end in 'Bar'"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:'todoItems(filter: {\n  and: [\n    {title: {like: "Foo%"}},\n    {title: {like: "%Bar"}},\n  ]\n}) {\n  #...select your fields\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"or"})," - Allows for joining multiple ",(0,r.jsx)(n.code,{children:"Filters"})," using an ",(0,r.jsx)(n.code,{children:"OR"})," condition."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, find all todo items that ",(0,r.jsx)(n.code,{children:"(are completed AND start with 'Foo') OR (are not completed and end in 'Bar')"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:'todoItems(filter: {\n  or: [\n    {title: {eq: "Foo"}, completed: {is: true}},\n    {title: {eq: "Bar"}, completed: {is: false}},\n  ]\n}) {\n  #...select your fields\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(l.A,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Schema",value:"schema"}],children:[(0,r.jsx)(s.A,{value:"code",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { FilterType } from '@ptc-org/nestjs-query-graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\nexport const TodoItemFilter = FilterType(TodoItemDTO)\n"})})}),(0,r.jsx)(s.A,{value:"schema",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"input TodoItemFilter {\n  and: [TodoItemFilter!]\n  or: [TodoItemFilter!]\n  id: IDFilterComparison\n  title: StringFieldComparison\n  completed: BooleanFieldComparison\n  created: DateFieldComparison\n  updated: DateFieldComparison\n}\n\ninput IDFilterComparison {\n  is: Boolean\n  isNot: Boolean\n  eq: ID\n  neq: ID\n  gt: ID\n  gte: ID\n  lt: ID\n  lte: ID\n  like: ID\n  notLike: ID\n  iLike: ID\n  notILike: ID\n  in: [ID!]\n  notIn: [ID!]\n}\n\ninput StringFieldComparison {\n  is: Boolean\n  isNot: Boolean\n  eq: String\n  neq: String\n  gt: String\n  gte: String\n  lt: String\n  lte: String\n  like: String\n  notLike: String\n  iLike: String\n  notILike: String\n  in: [String!]\n  notIn: [String!]\n}\n\ninput BooleanFieldComparison {\n  is: Boolean\n  isNot: Boolean\n}\n\ninput DateFieldComparison {\n  is: Boolean\n  isNot: Boolean\n  eq: DateTime\n  neq: DateTime\n  gt: DateTime\n  gte: DateTime\n  lt: DateTime\n  lte: DateTime\n  in: [DateTime!]\n  notIn: [DateTime!]\n}\n"})})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"sorttype",children:"SortType"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"SortType"})," allows you to sort results."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NOTE"})," This type is automatically created when using ",(0,r.jsx)(n.a,{href:"#queryargstype",children:"QueryArgsType"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["For more comprehensive examples take a look at the ",(0,r.jsx)(n.a,{href:"./queries/sorting",children:"Sorting Docs"})]}),"\n",(0,r.jsx)(n.h4,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"field"})," - The field to sort on. The is an ENUM of ",(0,r.jsx)(n.a,{href:"/nestjs-query/docs/graphql/dtos#filterablefield",children:"@FilterableFields"})," defined in the DTO."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"direction"})," - The direction to sort the field ",(0,r.jsx)(n.code,{children:"ASC"})," or ",(0,r.jsx)(n.code,{children:"DESC"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nulls?"})," - On supported storage engines you can specify the null sort order ",(0,r.jsx)(n.code,{children:"NULLS_FIRST"}),", ",(0,r.jsx)(n.code,{children:"NULLS_LAST"})]}),"\n"]}),"\n",(0,r.jsxs)(l.A,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Schema",value:"schema"}],children:[(0,r.jsx)(s.A,{value:"code",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { QueryArgsType } from '@ptc-org/nestjs-query-graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\nexport const TodoItemQueryArgs = QueryArgsType(TodoItemDTO)\nexport const TodoItemSort = TodoItemQueryArgs.SortType;\n"})})}),(0,r.jsx)(s.A,{value:"schema",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"input TodoItemSort {\n  field: TodoItemSortFields!\n  direction: SortDirection!\n  nulls: SortNulls\n}\n\nenum TodoItemSortFields {\n  id\n  title\n  completed\n  created\n  updated\n}\n\nenum SortDirection {\n  ASC\n  DESC\n}\n\nenum SortNulls {\n  NULLS_FIRST\n  NULLS_LAST\n}\n\n"})})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"createoneinputtype",children:"CreateOneInputType"}),"\n",(0,r.jsxs)(n.p,{children:["Input type for ",(0,r.jsx)(n.code,{children:"createOne"})," mutations."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NOTE"})," Dont forget to annotate your DTO with ",(0,r.jsx)(n.code,{children:"@InputType()"})," from ",(0,r.jsx)(n.code,{children:"@nestjs/graphql"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NOTE"})," Your DTO should be one that you want to use for input. For example you may not want to let the end user to\nspecify the ",(0,r.jsx)(n.code,{children:"created"})," or ",(0,r.jsx)(n.code,{children:"updated"})," fields so you would create a new DTO just for input."]}),"\n",(0,r.jsx)(n.h4,{id:"usage-4",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { CreateOneInputType } from '@ptc-org/nestjs-query-graphql';\nimport { InputType } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\n@InputType('TodoItemInput')\nexport class TodoItemInputDTO {\n  @IsString()\n  @Field({nullable: true})\n  title?: string;\n\n  @IsBoolean()\n  @Field({nullable: true})\n  completed?: string;\n}\n\n@InputType()\nexport class CreateOneTodoItemInput extends CreateOneInputType('todoItem', TodoItemInputDTO) {}\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"createmanyinputtype",children:"CreateManyInputType"}),"\n",(0,r.jsxs)(n.p,{children:["Input type for ",(0,r.jsx)(n.code,{children:"createMany"})," mutations."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NOTE"})," Dont forget to annotate your DTO with ",(0,r.jsx)(n.code,{children:"@InputType()"})," from ",(0,r.jsx)(n.code,{children:"@nestjs/graphql"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NOTE"})," Your DTO should be one that you want to use for input. For example you may not want to let the end user to\nspecify the ",(0,r.jsx)(n.code,{children:"created"})," or ",(0,r.jsx)(n.code,{children:"updated"})," fields so you would create a new DTO just for input."]}),"\n",(0,r.jsx)(n.h4,{id:"usage-5",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { CreateManyInputType } from '@ptc-org/nestjs-query-graphql';\nimport { InputType } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\n@InputType('TodoItemInput')\nexport class TodoItemInputDTO {\n  @IsString()\n  @Field({nullable: true})\n  title?: string;\n\n  @IsBoolean()\n  @Field({nullable: true})\n  completed?: string;\n}\n\n@InputType()\nexport class CreateManyTodoItemsInput extends CreateManyInputType('todoItems', TodoItemInputDTO) {}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"updateoneinputtype",children:"UpdateOneInputType"}),"\n",(0,r.jsxs)(n.p,{children:["InputType type for ",(0,r.jsx)(n.code,{children:"updateOne"})," mutations."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"UpdateOneInputType"})," will generate an ",(0,r.jsx)(n.code,{children:"InputType"})," that will require the user to provide two fields."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"id"})," - The id of the record to update"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"update"})," - A record with fields to update."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Dont forget to annotate your DTO with ",(0,r.jsx)(n.code,{children:"@InputType()"})," from ",(0,r.jsx)(n.code,{children:"@nestjs/graphql"}),"."]})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Your DTO should be one that you want to use for updates. For example you may not want to let the end user to\nupdate the ",(0,r.jsx)(n.code,{children:"created"})," or ",(0,r.jsx)(n.code,{children:"updated"})," fields so you would create a new DTO just for updates."]})}),"\n",(0,r.jsx)(n.h4,{id:"usage-6",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { UpdateOneInputType } from '@ptc-org/nestjs-query-graphql';\nimport { InputType } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\n@InputType('TodoItemUpdateInput')\nexport class TodoItemUpdateDTO {\n  @IsOptional()\n  @IsString()\n  @Field({ nullable: true })\n  title?: string;\n\n  @IsOptional()\n  @IsBoolean()\n  @Field({ nullable: true })\n  completed?: boolean;\n}\n\n@InputType()\nexport class UpdateOneTodoItemInput extends UpdateOneInputType(TodoItemDTO, TodoItemUpdateDTO) {}\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"updatemanyinputtype",children:"UpdateManyInputType"}),"\n",(0,r.jsxs)(n.p,{children:["Input type for ",(0,r.jsx)(n.code,{children:"updateMany"})," mutations."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"UpdateOneInputType"})," will generate an ",(0,r.jsx)(n.code,{children:"InputType"})," that will require the user to provide two arguments."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"filter"})," - The filter that should be used to find records to update. See ",(0,r.jsx)(n.a,{href:"#filtertype",children:"FilterType"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"update"})," - The update to apply to each record found."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NOTE"})," Dont forget to annotate your DTO with ",(0,r.jsx)(n.code,{children:"@InputType()"})," from ",(0,r.jsx)(n.code,{children:"@nestjs/graphql"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NOTE"})," Your DTO should be one that you want to use for input. For example you may not want to let the end user to\nspecify the ",(0,r.jsx)(n.code,{children:"created"})," or ",(0,r.jsx)(n.code,{children:"updated"})," fields so you would create a new DTO just for input."]}),"\n",(0,r.jsx)(n.h4,{id:"usage-7",children:"Usage"}),"\n",(0,r.jsx)(n.p,{children:"In this example we use the read DTO for the FilterType, and a different update DTO."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { CreateOneInputType, FilterType } from '@ptc-org/nestjs-query-graphql';\nimport { InputType } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\n@InputType('TodoItemUpdate')\nexport class TodoItemUpdateDTO {\n  @IsOptional()\n  @IsString()\n  @Field({ nullable: true })\n  title?: string;\n\n  @IsOptional()\n  @IsBoolean()\n  @Field({ nullable: true })\n  completed?: boolean;\n}\n\n@InputType()\nexport class UpdateManyTodoItemsInput extends UpdateManyInputType(\n  TodoItemDTO, // filter\n  TodoItemUpdateDTO // update DTO\n) {}\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"deleteoneinputtype",children:"DeleteOneInputType"}),"\n",(0,r.jsxs)(n.p,{children:["InputType type for ",(0,r.jsx)(n.code,{children:"deleteOne"})," mutations."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"DeleteOneInputType"})," will generate an ",(0,r.jsx)(n.code,{children:"InputType"})," that will require the user to provide the id of the record to delete."]}),"\n",(0,r.jsx)(n.h4,{id:"usage-8",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { DeleteOneInputType } from '@ptc-org/nestjs-query-graphql';\nimport { InputType } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\n@InputType()\nexport class DeleteOneTodoItemInput extends DeleteOneInputType(TodoItemDTO) {}\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"deletemanyinputtype",children:"DeleteManyInputType"}),"\n",(0,r.jsxs)(n.p,{children:["Input type type for ",(0,r.jsx)(n.code,{children:"deleteMany"})," mutations."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"DeleteManyInputType"})," will generate an ",(0,r.jsx)(n.code,{children:"InputType"})," that will require the user to provide:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"filter"})," - A filter used to find records to delete. See ",(0,r.jsx)(n.a,{href:"#filtertype",children:"FilterType"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"usage-9",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { CreateOneInputType, FilterType } from '@ptc-org/nestjs-query-graphql';\nimport { InputType } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\n@InputType()\nexport class DeleteManyTodoItemsInput extends DeleteManyInputType(TodoItemDTO) {}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var r=t(4164);const o={tabItem:"tabItem_Ymn6"};var l=t(4848);function s(e){var n=e.children,t=e.hidden,s=e.className;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,s),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>v});var r=t(6540),o=t(4164),l=t(3104),s=t(2195),a=t(205),i=t(7485),d=t(1682),c=t(8760);function u(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function p(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,d.XI)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,o=e.groupId,l=(0,s.W6)(),a=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:o});return[(0,i.aZ)(a),(0,r.useCallback)((function(e){if(a){var n=new URLSearchParams(l.location.search);n.set(a,e),l.replace(Object.assign({},l.location,{search:n.toString()}))}}),[a,l])]}function y(e){var n,t,o,l,s=e.defaultValue,i=e.queryString,d=void 0!==i&&i,u=e.groupId,y=p(e),j=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var o=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:s,tabValues:y})})),x=j[0],g=j[1],T=m({queryString:d,groupId:u}),f=T[0],I=T[1],v=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),t=(0,c.Dv)(n),o=t[0],l=t[1],[o,(0,r.useCallback)((function(e){n&&l.set(e)}),[n,l])]),b=v[0],D=v[1],O=function(){var e=null!=f?f:b;return h({value:e,tabValues:y})?e:null}();return(0,a.A)((function(){O&&g(O)}),[O]),{selectedValue:x,selectValue:(0,r.useCallback)((function(e){if(!h({value:e,tabValues:y}))throw new Error("Can't select invalid tab value="+e);g(e),I(e),D(e)}),[I,D,y]),tabValues:y}}var j=t(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function T(e){var n=e.className,t=e.block,r=e.selectedValue,s=e.selectValue,a=e.tabValues,i=[],d=(0,l.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,t=i.indexOf(n),o=a[t].value;o!==r&&(d(n),s(o))},u=function(e){var n,t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,o=i.indexOf(e.currentTarget)+1;t=null!=(r=i[o])?r:i[0];break;case"ArrowLeft":var l,s=i.indexOf(e.currentTarget)-1;t=null!=(l=i[s])?l:i[i.length-1]}null==(n=t)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:a.map((function(e){var n=e.value,t=e.label,l=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return i.push(e)},onKeyDown:u,onClick:c},l,{className:(0,o.A)("tabs__item",x.tabItem,null==l?void 0:l.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function f(e){var n=e.lazy,t=e.children,l=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var a=s.find((function(e){return e.props.value===l}));return a?(0,r.cloneElement)(a,{className:(0,o.A)("margin-top--md",a.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l})}))})}function I(e){var n=y(e);return(0,g.jsxs)("div",{className:(0,o.A)("tabs-container",x.tabList),children:[(0,g.jsx)(T,Object.assign({},n,e)),(0,g.jsx)(f,Object.assign({},n,e))]})}function v(e){var n=(0,j.A)();return(0,g.jsx)(I,Object.assign({},e,{children:u(e.children)}),String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(6540);const o={},l=r.createContext(o);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);