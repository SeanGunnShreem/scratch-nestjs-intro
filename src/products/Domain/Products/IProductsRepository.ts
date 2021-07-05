import {Inject}from'@nestjs/common';
import{IProducts}from'./IProducts';
import { ProductDTO } from "src/products/API/Products/ProductDTO";

export interface IProductsRepository{
    AddProduct(product: ProductDTO):Promise<IProducts>;
    GetAllProducts():Promise<IProducts[]>;
    GetProduct(productId: string):Promise<IProducts>;
    UpdateProduct(productId: string, prod: ProductDTO):Promise<IProducts>;
    RemoveProduct(productId: string):Promise<IProducts>;
}

export const ProductsRepository = (): any => Inject('ProductsRepository');