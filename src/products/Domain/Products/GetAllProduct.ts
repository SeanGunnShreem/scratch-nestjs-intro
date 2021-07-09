import { Injectable } from "@nestjs/common";
import { IProducts } from "./IProducts";
import { InjectModel } from "@nestjs/mongoose";
import {Model} from 'mongoose';
import { Query } from "@nestjs/graphql";

@Injectable()
export class GetAllProducts{
    constructor(
        @InjectModel('Product') private readonly ProductModel: Model<IProducts>
    ){}
    @Query()
    async findAll():Promise<IProducts[]>{
        return await this.ProductModel.find();
     }
} 