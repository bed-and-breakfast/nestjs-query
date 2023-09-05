"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestjsQueryTypegooseModule = void 0;
const tslib_1 = require("tslib");
const nestjs_typegoose_1 = require("@m8a/nestjs-typegoose");
const typegoose_1 = require("@typegoose/typegoose");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const speedgoose_1 = require("speedgoose");
const mongooseModelEvents_1 = require("speedgoose/lib/src/mongooseModelEvents");
const providers_1 = require("./providers");
// export const nestjsQueryTypegooseModules = {
//   total: 0,
//   loaded: 0
// }
const allModels = [];
class NestjsQueryTypegooseModule {
    static forFeature(models, connectionName) {
        // nestjsQueryTypegooseModules.total += 1
        const queryServiceProviders = (0, providers_1.createTypegooseQueryServiceProviders)(models);
        const typegooseModule = nestjs_typegoose_1.TypegooseModule.forFeature(models, connectionName);
        allModels.push(...models.map((model) => (0, providers_1.ensureProperInput)(model).typegooseClass));
        models.forEach((model) => {
            const discriminators = model.discriminators;
            if (discriminators) {
                allModels.push(...discriminators.map((discriminator) => (0, providers_1.ensureProperInput)(discriminator).typegooseClass));
            }
        });
        void (0, speedgoose_1.applySpeedGooseCacheLayer)(mongoose_1.default, {
            // enabled: false,
            sharedCacheStrategy: speedgoose_1.SharedCacheStrategies.IN_MEMORY,
            defaultTtl: 0,
            debugConfig: {
            // enabled: true
            }
        });
        return {
            imports: [typegooseModule],
            module: NestjsQueryTypegooseModule,
            providers: [...queryServiceProviders],
            exports: [...queryServiceProviders, typegooseModule]
        };
    }
    onModuleInit() {
        (0, mongooseModelEvents_1.registerListenerForInternalEvents)({
            models: allModels.map((model) => (0, typegoose_1.getModelForClass)(model))
        });
    }
}
exports.NestjsQueryTypegooseModule = NestjsQueryTypegooseModule;
//# sourceMappingURL=module.js.map