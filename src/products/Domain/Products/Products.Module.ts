import { Module } from "@nestjs/common";
import {DeleteProduct} from "./DeleteProduct";
import {FindProduct} from "./FindProduct";
import {GetSingleProduct} from "./GetSingleProduct";
import {InsertProduct} from "./InsertProduct";
import {UpdateProduct} from "./UpdateProduct";

@Module({
    controllers:[],
    imports:[DeleteProduct,FindProduct,GetSingleProduct,
        InsertProduct,UpdateProduct],
    exports:[DeleteProduct,FindProduct,GetSingleProduct,
    InsertProduct,UpdateProduct],
})
export class ProductsModule{}