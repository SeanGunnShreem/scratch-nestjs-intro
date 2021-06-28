import { Injectable } from "@nestjs/common";
import { IProducts } from "./IProducts";
import { IProductsRepository, ProductsRepository } from "./IProductsRepository";


@Injectable()
export class GetAllProducts{
    constructor(
        @ProductsRepository() private readonly productRepository: IProductsRepository,
    ){}

        
    public async GetAllProducts():Promise<IProducts>{
        const product = await this.productRepository.GetAllProducts();
        return {...product};
    }

}