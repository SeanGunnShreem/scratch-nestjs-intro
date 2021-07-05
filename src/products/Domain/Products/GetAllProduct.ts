import { Injectable } from "@nestjs/common";
import { IProducts } from "./IProducts";
import { InjectModel } from "@nestjs/mongoose";
import {Model} from 'mongoose';

@Injectable()
export class GetAllProducts{
    constructor(
        @InjectModel('Product') private readonly ProductModel: Model<IProducts>
    ){}

    async findAll():Promise<IProducts[]>{
        return await this.ProductModel.find();
     }
} 