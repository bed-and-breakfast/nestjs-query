import { Global, Module } from '@nestjs/common'

import { ConfigurableModuleClass } from './cache.module-definition'
import { ReferenceCacheService } from './services/reference-cache.service'

@Global()
@Module({
  // imports: [CacheModule.register({ ttl: 0, max: 10 * 1000 * 1000 /* 10 MB */ })],
  providers: [ReferenceCacheService],
  exports: [ReferenceCacheService]
})
export class NestjsQueryTypegooseCacheModule extends ConfigurableModuleClass {}
