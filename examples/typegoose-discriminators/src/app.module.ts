import { TypegooseModule } from '@m8a/nestjs-typegoose'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'

import { NestjsQueryTypegooseCacheModule } from '@bed-and-breakfast/nestjs-query-typegoose'
import { CACHE_MANAGER, CacheModule } from '@nestjs/cache-manager'
import { Cache } from 'cache-manager'
import { formatGraphqlError, mongooseConfig } from '../../helpers'
import { GqlContext } from './auth.guard'
import { TodoItemModule } from './todo-item/todo-item.module'

const { uri, ...options } = mongooseConfig('typegoose', {})

@Module({
  imports: [
    NestjsQueryTypegooseCacheModule.registerAsync({
      imports: [CacheModule.register()],
      inject: [CACHE_MANAGER],
      useFactory: (cache: Cache) => ({
        cacheManager: cache,
        disablePreloading: true
      })
    }),
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    TypegooseModule.forRoot(uri, options),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'examples/typegoose-discriminators/schema.gql',
      context: ({ req }: { req: { headers: Record<string, string> } }): GqlContext => ({ request: req }),
      formatError: formatGraphqlError
    }),
    TodoItemModule
  ]
})
export class AppModule {}
