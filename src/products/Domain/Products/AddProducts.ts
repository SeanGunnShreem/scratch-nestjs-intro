import { Injectable } from "@nestjs/common";
import { IProducts } from "./IProducts";
import { ProductDTO } from "src/products/API/Products/ProductDTO";
import { InjectModel } from "@nestjs/mongoose";
import {Model} from 'mongoose';

@Injectable()
export class AddProducts{
    constructor(
         @InjectModel('Product') private readonly ProductModel: Model<IProducts>
    ){}

    async create(product: ProductDTO):Promise<IProducts>{
        const newProduct = new this.ProductModel(product);
        return await newProduct.save();
    };
} 