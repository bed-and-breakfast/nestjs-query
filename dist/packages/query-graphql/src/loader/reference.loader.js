"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceLoader = void 0;
const common_1 = require("@nestjs/common");
class ReferenceLoader {
    constructor(DTOClass) {
        this.DTOClass = DTOClass;
        this.logger = new common_1.Logger(ReferenceLoader.name);
    }
    createLoader(service, key = 'id') {
        return async (args) => {
            // Deduplicate IDs while preserving original order mapping
            const uniqueIds = [...new Set(args.map((arg) => arg[key]))];
            try {
                const filter = { [key]: { in: uniqueIds } };
                const entities = await service.query({ filter });
                // Create entity map for efficient lookup
                // Use string keys because representation.id from federation may differ in type from entity.id
                const entityMap = new Map();
                entities?.forEach((entity) => {
                    const id = entity[key];
                    entityMap.set(String(id), entity);
                });
                // Return results in the same order as requested
                const results = args.map((arg) => {
                    const entity = entityMap.get(String(arg[key]));
                    if (!entity) {
                        this.logger.warn(`Entity not found for ${key}: ${arg[key]} in ${this.DTOClass.name}`);
                    }
                    return entity || undefined;
                });
                return results;
            }
            catch (error) {
                this.logger.error(`Batch query failed for ${this.DTOClass.name} with key ${key}:`, error);
                // Return error for each request, let DataLoader handle it
                return args.map(() => (error instanceof Error ? error : new Error(String(error))));
            }
        };
    }
}
exports.ReferenceLoader = ReferenceLoader;
//# sourceMappingURL=reference.loader.js.map