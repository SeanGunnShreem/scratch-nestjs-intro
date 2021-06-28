import {Inject}from'@nestjs/common';
import{IProducts}from'./IProducts';

export interface IProductsRepository{
    AddProduct(prodId:string, prodTitle: string, prodDescript: string, prodPrice: number):Promise<IProducts>;
    GetAllProducts():Promise<IProducts>;
    GetProduct(prodId:string):Promise<IProducts>;
    UpdateProduct(prodId: string, prodTitle: string, prodDescr: string, prodIdPrice: number):Promise<void>;
    removeProduct(prodId: string):Promise<void>;
}

export const ProductsRepository = (): any => Inject('ProductsRepository');