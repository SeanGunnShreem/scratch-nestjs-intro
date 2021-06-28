import { Module } from "@nestjs/common";
import {DeleteProduct} from "./DeleteProducts";
import {FindProduct} from "./FindProducts";
import {GetSingleProduct} from "./GetSingleProducts";
import {AddProducts} from "./AddProducts";
import {UpdateProduct} from "./UpdateProducts";

@Module({
    controllers:[],
    imports:[DeleteProduct,FindProduct,GetSingleProduct,
        AddProducts,UpdateProduct],
    exports:[DeleteProduct,FindProduct,GetSingleProduct,
    AddProducts,UpdateProduct],
})
export class ProductsModule{}