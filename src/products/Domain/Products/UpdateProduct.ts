import { Injectable } from "@nestjs/common";
import { IProducts } from "./IProducts";
import { ProductDTO } from "src/products/API/Products/ProductDTO";
import { InjectModel } from "@nestjs/mongoose";
import {Model} from 'mongoose';

@Injectable()
export class UpdateProduct{
    constructor(
        @InjectModel('Product') private readonly ProductModel: Model<IProducts>
    ){}

    async update(productId: string, prod: ProductDTO):Promise<IProducts>{
        return await this.ProductModel.findByIdAndUpdate(productId,prod,{new: true});
    }
} 