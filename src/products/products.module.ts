import { CacheInterceptor, CacheModule, MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { ProductsSchema } from "./API/Products/Products.schemas";
import { ProductsContoller } from "./products.controller";
import { ProductsService } from "./Persistence/Products/Products.service";
import {MongooseModule} from '@nestjs/mongoose';
import { AuditMiddleware } from "./Utilities/middleware/audit.middleware";

@Module({
    imports:[MongooseModule.forFeature([{name:'Product', schema:ProductsSchema}]),
CacheModule.register({
    ttl: 5,//seconds
    max: 100,//max numb of items
})],
    controllers: [ProductsContoller],
    providers: [ProductsService],
})
export class ProductsModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuditMiddleware)
        .forRoutes({path: 'products/*', method: RequestMethod.DELETE})
    }

}