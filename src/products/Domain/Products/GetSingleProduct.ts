import { Injectable } from "@nestjs/common";
import { IProducts } from "./IProducts";
import { IProductsRepository, ProductsRepository } from "./IProductsRepository";


@Injectable()
export class GetSingleProducts{
    constructor(
        @ProductsRepository() private readonly productRepository: IProductsRepository,
    ){}

        
    public async getSingleProduct(productId: string):Promise<IProducts>{
        const product = await this.productRepository.GetProduct(productId)[0];
        return {...product};
     }

}