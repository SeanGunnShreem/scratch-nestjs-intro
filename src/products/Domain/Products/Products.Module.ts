import { Module } from "@nestjs/common";
import {DeleteProduct} from "./DeleteProduct";
import {GetAllProducts} from "./GetAllProduct";
import {GetSingleProducts} from "./GetSingleProduct";
import {AddProducts} from "./AddProducts";
import {UpdateProduct} from "./UpdateProduct";

@Module({
    controllers:[],
    imports:[DeleteProduct,GetAllProducts,GetSingleProducts,
        AddProducts,UpdateProduct],
    exports:[DeleteProduct,GetAllProducts,GetSingleProducts,
    AddProducts,UpdateProduct],
})
export class ProductsModule{}