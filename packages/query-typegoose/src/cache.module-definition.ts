import { ConfigurableModuleBuilder } from '@nestjs/common'

import { ReferenceCacheService } from './services'

export interface CacheModuleOptions {
  cacheManager: ReferenceCacheService['cacheManager']
  relationsCacheManagers?: ReferenceCacheService['relationsCacheManagers']
  disablePreloading?: boolean
  disablePreloadingLog?: boolean
}

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } = new ConfigurableModuleBuilder<CacheModuleOptions>().build()
