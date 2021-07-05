import { Injectable } from "@nestjs/common";
import { IProducts } from "./IProducts";
import { InjectModel } from "@nestjs/mongoose";
import {Model} from 'mongoose';

@Injectable()
export class GetSingleProducts{
    constructor(
        @InjectModel('Product') private readonly ProductModel: Model<IProducts>
    ){}

    async find(productId: string):Promise<IProducts>{
        return await this.ProductModel.findOne({_id: productId});
     }
} 