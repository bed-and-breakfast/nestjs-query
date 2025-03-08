"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountRelationsLoader = void 0;
class CountRelationsLoader {
    constructor(RelationDTO, relationName) {
        this.RelationDTO = RelationDTO;
        this.relationName = relationName;
    }
    createLoader(service, opts) {
        return async (queryArgs) => {
            // group
            const queryMap = this.groupQueries(queryArgs);
            return this.loadResults(service, queryMap, opts);
        };
    }
    async loadResults(service, countRelationsMap, opts) {
        const results = [];
        await Promise.all([...countRelationsMap.values()].map(async (args) => {
            const { filter } = args[0];
            const dtos = args.map((a) => a.dto);
            const relationCountResults = await service.countRelations(this.RelationDTO, this.relationName, dtos, filter, opts);
            const dtoRelations = dtos.map((dto) => relationCountResults.get(dto) ?? 0);
            dtoRelations.forEach((relationCount, index) => {
                results[args[index].index] = relationCount;
            });
        }));
        return results;
    }
    groupQueries(countArgs) {
        // group
        return countArgs.reduce((map, args, index) => {
            const filterJson = JSON.stringify(args.filter);
            if (!map.has(filterJson)) {
                map.set(filterJson, []);
            }
            map.get(filterJson)?.push({ ...args, index });
            return map;
        }, new Map());
    }
}
exports.CountRelationsLoader = CountRelationsLoader;
//# sourceMappingURL=count-relations.loader.js.map