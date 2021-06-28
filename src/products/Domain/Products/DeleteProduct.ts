import { Injectable } from "@nestjs/common";
import { IProducts } from "./IProducts";
import { IProductsRepository, ProductsRepository } from "./IProductsRepository";


@Injectable()
export class DeleteProduct{
    constructor(
        @ProductsRepository() private readonly productRepository: IProductsRepository,

    ){}


    public async DeleteProduct(prodId: string):Promise<void>{
        const product = await this.productRepository.RemoveProduct(prodId);
        return product;
    }

}