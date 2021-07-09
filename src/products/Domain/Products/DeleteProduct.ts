import { Injectable } from "@nestjs/common";
import { IProducts } from "./IProducts";
import { InjectModel } from "@nestjs/mongoose";
import {Model} from 'mongoose';
import { Mutation, Subscription } from "@nestjs/graphql";
import { PubSub } from "graphql-subscriptions";

@Injectable()
export class DeleteProduct{

    private pubSub: PubSub;

    constructor(
        @InjectModel('Product') private readonly ProductModel: Model<IProducts>
    ){this.pubSub = new PubSub();}
    @Mutation('delete')
    async delete(prodId: string):Promise<IProducts>{
        const deletedProduct: IProducts = await this.ProductModel.findByIdAndRemove(prodId);
        this.pubSub.publish('productDeleted', {productAdded:  deletedProduct});
        return deletedProduct;
    }

    @Subscription(returns => ProductGQL, {
        filter: (payload, variables) => payload.productDeleted.title === variables.title,
    });
    productDeleted(){
        this.pubSub.asyncIterator('productDeleted');
    };
} 