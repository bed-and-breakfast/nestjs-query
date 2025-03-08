import { ReferenceCacheService } from './services';
export interface CacheModuleOptions {
    cacheManager: ReferenceCacheService['cacheManager'];
    relationsCacheManagers?: ReferenceCacheService['relationsCacheManagers'];
    disablePreloading?: boolean;
    disablePreloadingLog?: boolean;
}
export declare const ConfigurableModuleClass: import("@nestjs/common").ConfigurableModuleCls<CacheModuleOptions, "register", "create", {}>, MODULE_OPTIONS_TOKEN: string | symbol;
