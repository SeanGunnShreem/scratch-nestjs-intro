import { Module } from "@nestjs/common";
import {MongooseModule} from '@nestjs/mongoose';
import {ProductControllers} from './Products/Products.Controller';
import { ProductSchema } from "./Products.schemas";
@Module({
    controllers:[ProductControllers],//UserController],
    imports:[MongooseModule.forFeature([{name:'Product', schema:ProductSchema}])],
    exports:[],
})
export class ApiModule{}