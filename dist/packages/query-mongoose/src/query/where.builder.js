"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhereBuilder = void 0;
const comparison_builder_1 = require("./comparison.builder");
/**
 * @internal
 * Builds a WHERE clause from a Filter.
 */
class WhereBuilder {
    constructor(Model, comparisonBuilder = new comparison_builder_1.ComparisonBuilder(Model)) {
        this.Model = Model;
        this.comparisonBuilder = comparisonBuilder;
        /**
         * Checks if a filter is a GraphQLFilter.
         * @param filter - the filter to check.
         * @private
         */
        this.isGraphQLFilter = (filter) => typeof filter === `object` && !Array.isArray(filter) && filter?.constructor?.name === 'GraphQLFilter';
    }
    /**
     * Builds a WHERE clause from a Filter.
     * @param filter - the filter to build the WHERE clause from.
     */
    build(filter) {
        const normalizedFilter = this.getNormalizedFilter(filter);
        const { and, or } = normalizedFilter;
        let ands = [];
        let ors = [];
        let filterQuery = {};
        if (and && and.length) {
            ands = and.map((f) => this.build(f));
        }
        if (or && or.length) {
            ors = or.map((f) => this.build(f));
        }
        const filterAnds = this.filterFields(normalizedFilter);
        if (filterAnds) {
            ands = [...ands, filterAnds];
        }
        if (ands.length) {
            filterQuery = { ...filterQuery, $and: ands };
        }
        if (ors.length) {
            filterQuery = { ...filterQuery, $or: ors };
        }
        return filterQuery;
    }
    /**
     * Normalizes a filter to a dot notation filter for objects with sub objects.
     * @param filter - the filter to normalize.
     * @private
     */
    getNormalizedFilter(filter) {
        if (!this.isGraphQLFilter(filter))
            return filter;
        const newFilter = {};
        const keys = Object.keys(filter);
        // Converting to dot notation
        for (const key of keys) {
            const value = filter[key];
            if (!['and', 'or'].includes(key) && this.isGraphQLFilter(value)) {
                const subFilter = this.getNormalizedFilter(value);
                for (const subKey of Object.keys(subFilter)) {
                    newFilter[`${key}.${subKey}`] = subFilter[subKey];
                }
            }
            else {
                newFilter[key] = value;
            }
        }
        return newFilter;
    }
    /**
     * Creates field comparisons from a filter. This method will ignore and/or properties.
     * @param filter - the filter with fields to create comparisons for.
     */
    filterFields(filter) {
        const ands = Object.keys(filter)
            .filter((f) => f !== 'and' && f !== 'or')
            .map((field) => this.withFilterComparison(field, this.getField(filter, field)));
        if (ands.length === 1) {
            return ands[0];
        }
        if (ands.length) {
            return { $and: ands };
        }
        return undefined;
    }
    getField(obj, field) {
        return obj[field];
    }
    withFilterComparison(field, cmp) {
        const opts = Object.keys(cmp);
        if (opts.length === 1) {
            const cmpType = opts[0];
            return this.comparisonBuilder.build(field, cmpType, cmp[cmpType]);
        }
        return {
            $or: opts.map((cmpType) => this.comparisonBuilder.build(field, cmpType, cmp[cmpType]))
        };
    }
}
exports.WhereBuilder = WhereBuilder;
//# sourceMappingURL=where.builder.js.map