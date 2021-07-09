import { Injectable } from "@nestjs/common";
import { IProducts } from "./IProducts";
import { ProductDTO } from "src/products/API/Products/ProductDTO";
import { InjectModel } from "@nestjs/mongoose";
import {Model} from 'mongoose';
import { Mutation, Subscription } from "@nestjs/graphql";
import { PubSub } from "graphql-subscriptions";

@Injectable()
export class AddProducts{

    private pubSub: PubSub;

    constructor(
         @InjectModel('Product') private readonly ProductModel: Model<IProducts>
    ){
        this.pubSub = new PubSub();
    }
    @Mutation('create')
    async create(product: ProductDTO):Promise<IProducts>{
        const newProduct = new this.ProductModel(product);
        this.pubSub.publish('productAdded', {productAdded:  newProduct});
        return await newProduct.save();
    };

    @Subscription(returns => ProductGQL, {
        filter: (payload, variables) => payload.productAdded.title === variables.title,
    });
    productAdded(){
        this.pubSub.asyncIterator('productAdded');
    };
} 