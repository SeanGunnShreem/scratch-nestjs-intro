import { Injectable } from "@nestjs/common";
import { IProducts } from "./IProducts";
import { IProductsRepository, ProductsRepository } from "./IProductsRepository";


@Injectable()
export class UpdateProduct{
    constructor(
        @ProductsRepository() private readonly productRepository: IProductsRepository,
    ){}

    public async UpdateProduct(productId: string, title: string, descr: string, price: number):Promise<void>{
        const product = await this.productRepository.UpdateProduct(productId,title,descr,price);
        /*const updatedProduct = {...product};
        if(!title){
            updatedProduct = title;
        }
        if(!descr){
            updatedProduct.descript = descr;
        }
        if(!price){
            updatedProduct.price = price;
        }*/
        return product;
    }
}