import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
//import { Product } from './product.model';
import {IProducts} from '../../Domain/Products/IProducts';
import {Model} from 'mongoose';
import { ProductDTO } from "../../API/Products/ProductDTO";
import {ProductGQL} from "../../API/Products/schema.graphql";
@Injectable()
export class ProductsService{
    constructor(@InjectModel('Product') private readonly ProductModel: Model<IProducts>, private readonly prodGql: ProductGQL){}

    async create(product: ProductDTO):Promise<IProducts>{
        const newProduct = new this.ProductModel(product);
        return await newProduct.save();
    };

    async find(productId: string):Promise<IProducts>{
       return await this.ProductModel.findOne({_id: productId});
    }

     async findAll():Promise<IProducts[]>{
        return await this.ProductModel.find();
     }

    async update(productId: string, prod: ProductDTO):Promise<IProducts>{
        return await this.ProductModel.findByIdAndUpdate(productId,prod,{new: true});
    }

    async delete(prodId: string):Promise<IProducts>{
        return await this.ProductModel.findByIdAndRemove(prodId);
    }
}