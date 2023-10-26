import { CacheModule } from '@nestjs/cache-manager'
import { Global, Module } from '@nestjs/common'
import { AnyObject } from 'mongoose'

import { ReferenceCacheService } from './services/reference-cache.service'

@Global()
@Module({
  imports: [
    CacheModule.register({
      ttl: 0,
      // max: 10 * 1000 * 1000 /* 10 MB */,
      // maxSize: 10 * 1000 * 1000, // 10 MB
      maxSize: 2 * 1073741824, // 2 GB
      sizeCalculation: (obj: AnyObject) => JSON.stringify(obj).length * 2
    })
  ],
  providers: [ReferenceCacheService],
  exports: [ReferenceCacheService]
})
export class NestjsQueryTypegooseCacheModule {}
