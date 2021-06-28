import { Injectable } from "@nestjs/common";
import { IProducts } from "./IProducts";
import { IProductsRepository, ProductsRepository } from "./IProductsRepository";


@Injectable()
export class AddProducts{
    constructor(
        @ProductsRepository() private readonly productRepository: IProductsRepository,

    ){}

    public async AddProduct(title :string, descript: string, price: number):Promise<IProducts>{
        const prodId = Math.random().toString();
       // const newProduct = new IProducts(prodId, title, descript, price);
        const product = this.productRepository.AddProduct(prodId, title, descript, price);
        //return newProduct;
        return product;
    };
}
