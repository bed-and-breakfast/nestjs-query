"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isReferenceOptions = isReferenceOptions;
exports.isSchemaTypeWithReferenceOptions = isSchemaTypeWithReferenceOptions;
exports.isEmbeddedSchemaTypeOptions = isEmbeddedSchemaTypeOptions;
exports.isVirtualReferenceOptions = isVirtualReferenceOptions;
exports.isVirtualTypeWithReferenceOptions = isVirtualTypeWithReferenceOptions;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isReferenceOptions(options) {
    return (typeof options === 'object' &&
        options !== null &&
        'type' in options &&
        'ref' in options &&
        typeof options.ref === 'string');
}
function isSchemaTypeWithReferenceOptions(type) {
    if (type && typeof type === 'object' && 'options' in type) {
        const { options } = type;
        return isReferenceOptions(options);
    }
    return false;
}
function isEmbeddedSchemaTypeOptions(options) {
    if (options && typeof options === 'object' && '$embeddedSchemaType' in options) {
        const { $embeddedSchemaType } = options;
        return isReferenceOptions($embeddedSchemaType.options);
    }
    return false;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isVirtualReferenceOptions(options) {
    return (typeof options === 'object' && options !== null && 'ref' in options && 'localField' in options && 'foreignField' in options);
}
function isVirtualTypeWithReferenceOptions(virtualType) {
    if (virtualType && typeof virtualType === 'object' && 'options' in virtualType) {
        const { options } = virtualType;
        return isVirtualReferenceOptions(options);
    }
    return false;
}
//# sourceMappingURL=mongoose-types.helper.js.map