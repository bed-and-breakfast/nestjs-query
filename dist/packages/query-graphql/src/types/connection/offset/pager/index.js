"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPager = void 0;
const pager_1 = require("./pager");
// default pager factory to plug in addition paging strategies later on.
const createPager = (enableFetchAllWithNegative) => new pager_1.OffsetPager(enableFetchAllWithNegative);
exports.createPager = createPager;
//# sourceMappingURL=index.js.map