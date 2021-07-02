import { CacheInterceptor, CacheModule, MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { ProductSchema } from "./API/Products/Products.schemas";
import { ProductsContoller } from "./products.controller";
import { ProductsService } from "./products.service";
import {MongooseModule} from '@nestjs/mongoose';
import { AuditMiddleware } from "./Utilities/middleware/audit.middleware";

@Module({
    imports:[MongooseModule.forFeature([{name:'Product', schema:ProductSchema}]),
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