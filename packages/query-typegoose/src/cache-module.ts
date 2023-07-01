import { Global, Module } from '@nestjs/common'

import { ReferenceCacheService } from './services/reference-cache.service'

@Global()
@Module({
  providers: [ReferenceCacheService],
  exports: [ReferenceCacheService]
})
export class NestjsQueryTypegooseCacheModule {}
