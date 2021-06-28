// Persistence/Products/ProductsPersistenceProvider.ts
import { Provider } from "@nestjs/common";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import {IProductEntity}from'./Products.Entity';

@Injectable()
export class ProductsRepository implements IProductsRepository{
    //private Product: any;
    constructor(@InjectModel('Product') private readonly product:ProductModel<IProductEntity>){
        //private Product[];
    }

    public AddProduct(prodId:string, prodTitle: string, prodDescript: string, prodPrice: number): Promise<IProductEntity>{
        const newGeneratedProduct:IProductEntity 
        //would send the users information to the database
    }

    public async UpdateProduct(): Promise<void>{
        return new Promise<void>((resolve,reject) =>{

        })
    }

    public async DeleteProduct(): Promise<void>{
        return new Promise<void>((resolve,reject) =>{

        })
    }

    public async FindProduct(): Promise<void>{
        return new Promise<void>((resolve,reject) =>{

        })
    }

    public async GetSingleProduct(): Promise<void>{
        return new Promise<void>((resolve,reject) =>{

        })
    }
}