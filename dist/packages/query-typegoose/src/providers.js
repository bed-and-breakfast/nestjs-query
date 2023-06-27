"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTypegooseQueryServiceProviders = void 0;
const nestjs_typegoose_1 = require("@m8a/nestjs-typegoose");
const nestjs_query_core_1 = require("@ptc-org/nestjs-query-core");
const typegoose_1 = require("@typegoose/typegoose");
const is_class_1 = require("is-class");
const services_1 = require("./services");
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
    if (!inputModel) {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        throw new Error(`Model definitions ${model} is incorrect.`);
    }
    const modelName = inputModel.typegooseClass?.name;
    return {
        provide: (0, nestjs_query_core_1.getQueryServiceToken)({ name: modelName }),
        useFactory(ModelClass) {
            // initialize default serializer for documents, this is the type that mongoose returns from queries
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            (0, nestjs_query_core_1.AssemblerSerializer)((obj) => obj.toObject({ virtuals: true }))(ModelClass);
            return new services_1.TypegooseQueryService(ModelClass);
        },
        inject: [(0, nestjs_typegoose_1.getModelToken)(modelName)]
    };
}
const createTypegooseQueryServiceProviders = (models) => models.map((model) => createTypegooseQueryServiceProvider(model));
exports.createTypegooseQueryServiceProviders = createTypegooseQueryServiceProviders;
//# sourceMappingURL=providers.js.map