"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTypegooseQueryServiceProviders = void 0;
const tslib_1 = require("tslib");
const nestjs_typegoose_1 = require("@m8a/nestjs-typegoose");
const nestjs_query_core_1 = require("@ptc-org/nestjs-query-core");
const typegoose_1 = require("@typegoose/typegoose");
const is_class_1 = require("is-class");
const mongoose_lean_defaults_1 = tslib_1.__importDefault(require("mongoose-lean-defaults"));
const mongoose_lean_getters_1 = tslib_1.__importDefault(require("mongoose-lean-getters"));
const mongoose_lean_id_1 = tslib_1.__importDefault(require("mongoose-lean-id"));
const mongoose_lean_virtuals_1 = tslib_1.__importDefault(require("mongoose-lean-virtuals"));
const services_1 = require("./services");
const reference_cache_service_1 = require("./services/reference-cache.service");
const isTypegooseClass = (item) => (0, is_class_1.isClass)(item);
const isTypegooseClassWithOptions = (item) => isTypegooseClass(item.typegooseClass);
(0, nestjs_query_core_1.AssemblerSerializer)((obj) => obj.toObject({ virtuals: true }))(typegoose_1.mongoose.Document);
function ensureProperInput(item) {
    if (isTypegooseClass(item)) {
        return { typegooseClass: item };
    }
    if (isTypegooseClassWithOptions(item)) {
        return item;
    }
    return undefined;
}
function createTypegooseQueryServiceProvider(model) {
    const inputModel = ensureProperInput(model);
    (0, typegoose_1.plugin)(mongoose_lean_id_1.default)(inputModel.typegooseClass);
    (0, typegoose_1.plugin)(mongoose_lean_virtuals_1.default)(inputModel.typegooseClass);
    (0, typegoose_1.plugin)(mongoose_lean_getters_1.default)(inputModel.typegooseClass);
    (0, typegoose_1.plugin)(mongoose_lean_defaults_1.default)(inputModel.typegooseClass);
    if (!inputModel) {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        throw new Error(`Model definitions ${model} is incorrect.`);
    }
    const modelName = inputModel.typegooseClass?.name;
    return {
        provide: (0, nestjs_query_core_1.getQueryServiceToken)({ name: modelName }),
        useFactory(ModelClass, referenceCacheService) {
            if (model.cache) {
                referenceCacheService.enableCache(model);
            }
            // initialize default serializer for documents, this is the type that mongoose returns from queries
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            (0, nestjs_query_core_1.AssemblerSerializer)((obj) => obj.toObject({ virtuals: true }))(ModelClass);
            return new services_1.TypegooseQueryService(ModelClass, referenceCacheService);
        },
        inject: [(0, nestjs_typegoose_1.getModelToken)(modelName), reference_cache_service_1.ReferenceCacheService]
    };
}
const createTypegooseQueryServiceProviders = (models) => models.map((model) => createTypegooseQueryServiceProvider(model));
exports.createTypegooseQueryServiceProviders = createTypegooseQueryServiceProviders;
//# sourceMappingURL=providers.js.map