import { Injectable } from "@nestjs/common";
import { IProducts } from "./IProducts";
import { ProductDTO } from "src/products/API/Products/ProductDTO";
import { InjectModel } from "@nestjs/mongoose";
import {Model} from 'mongoose';
import { Mutation, Subscription } from "@nestjs/graphql";
import { PubSub } from "graphql-subscriptions";

@Injectable()
export class UpdateProduct{

    private pubSub: PubSub;

    constructor(
        @InjectModel('Product') private readonly ProductModel: Model<IProducts>
    ){this.pubSub = new PubSub();}
    @Mutation('update')
    async update(productId: string, prod: ProductDTO):Promise<IProducts>{
        const updatedProduct: IProducts = await this.ProductModel.findByIdAndUpdate(productId,prod,{new: true});
        this.pubSub.publish('productDeleted', {productAdded:  updatedProduct});
        return updatedProduct;
    }

    
    @Subscription(returns => ProductGQL, {
        filter: (payload, variables) => payload.productUpdated.title === variables.title,
    });
    productUpdated(){
        this.pubSub.asyncIterator('productUpdated');
    };
} 