"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizerInterceptor = AuthorizerInterceptor;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const decorators_1 = require("../decorators");
function AuthorizerInterceptor(DTOClass) {
    let Interceptor = class Interceptor {
        constructor(authorizer) {
            this.authorizer = authorizer;
        }
        intercept(context, next) {
            const gqlContext = graphql_1.GqlExecutionContext.create(context);
            const ctx = gqlContext.getContext();
            ctx.authorizer = this.authorizer;
            return next.handle();
        }
    };
    Interceptor = tslib_1.__decorate([
        (0, common_1.Injectable)(),
        tslib_1.__param(0, (0, decorators_1.InjectAuthorizer)(DTOClass)),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], Interceptor);
    Object.defineProperty(Interceptor, 'name', {
        writable: false,
        // set a unique name otherwise DI does not inject a unique one for each request
        value: `${DTOClass.name}AuthorizerInterceptor`
    });
    return Interceptor;
}
//# sourceMappingURL=authorizer.interceptor.js.map