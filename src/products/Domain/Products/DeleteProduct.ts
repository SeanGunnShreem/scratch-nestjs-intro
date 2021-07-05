import { Injectable } from "@nestjs/common";
import { IProducts } from "./IProducts";
import { InjectModel } from "@nestjs/mongoose";
import {Model} from 'mongoose';

@Injectable()
export class DeleteProduct{
    constructor(
        @InjectModel('Product') private readonly ProductModel: Model<IProducts>
    ){}

    async delete(prodId: string):Promise<IProducts>{
        return await this.ProductModel.findByIdAndRemove(prodId);
    }
} 