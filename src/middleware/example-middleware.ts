import {
    POLARIS_TYPES,
    PolarisLogger,
    PolarisMiddleware,
    MiddlewareParams,
    PostMiddlewareParams,
} from '@enigmatis/polaris';
import { GraphQLResolveInfo } from 'graphql';
import { inject, injectable } from 'inversify';

@injectable()
export class ExampleMiddleware implements PolarisMiddleware {
    @inject(POLARIS_TYPES.PolarisLogger) polarisLogger!: PolarisLogger;

    preResolve({ args }: MiddlewareParams) {
        this.polarisLogger.debug(`from example before resolver, args: ${JSON.stringify(args)}`);
    }

    postResolve({ result }: PostMiddlewareParams): void {
        this.polarisLogger.debug(`from example after resolver, result: ${JSON.stringify(result)}`);
    }

    // postResolve(
    //     root: any,
    //     args: { [argName: string]: any },
    //     context: any,
    //     info: GraphQLResolveInfo,
    //     result: string,
    // ) {
    //     this.polarisLogger.debug(`from example after resolver, result: ${JSON.stringify(result)}`);
    // }
}
