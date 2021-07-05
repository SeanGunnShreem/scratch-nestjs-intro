// Persistence/Products/ProductsPersistenceProvider.ts
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ProductsService } from "./Products.service";
import { InjectModel } from "@nestjs/mongoose";
import {Model} from 'mongoose';
import { ProductDTO } from "src/products/API/Products/ProductDTO";
import { IProducts } from "src/products/Domain/Products/IProducts";
import { IProductsRepository } from "src/products/Domain/Products/IProductsRepository";

@Injectable()
export class ProductsRepository implements IProductsRepository{
    constructor(private readonly productsService: ProductsService,
         @InjectModel('Product') private readonly ProductModel: Model<IProducts>){
    }

    async GetAllProducts(): Promise<IProducts[]> {
        return new Promise<IProducts[]>((resolve) =>{ 
            this.productsService.findAll()
            .then((result)=>{
                if(result){
                    resolve({...result});
                }else{
                    resolve({...[]});
                }
            }).catch(() =>{
                throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
            });
        });
    }

    async GetProduct(productId: string): Promise<IProducts> {
        return new Promise<IProducts>((resolve) =>{ 
                this.productsService.find(productId)
            .then((result)=>{
                if(result){
                    resolve(result);
                }else{
                    throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
                }
            }).catch(() =>{
                throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
            });
        });
    }

    async UpdateProduct(productId: string, product: ProductDTO): Promise<IProducts> {
        return new Promise<IProducts>((resolve) =>{ 
            this.productsService.update(productId, product).then((result)=>{
                if(result){
                    resolve(result);
                }else{
                    throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
                }
            }).catch(() =>{
                throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
            });
        });
    }

    async RemoveProduct(productId: string): Promise<IProducts> {
        return new Promise<IProducts>((resolve) =>{
            this.productsService.delete(productId).then((result)=>{
                if(result){
                    resolve(result);
                }else{
                    throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
                }
            }).catch(() =>{
                throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
            });
        });
    }

    async AddProduct(product: ProductDTO): Promise<IProducts>{
        return new Promise<IProducts>((resolve) =>{
            this.productsService.create(product).then((result)=>{
                if(result){
                    resolve(result);
                }else{
                    throw new HttpException('Product not created', HttpStatus.NOT_IMPLEMENTED);
                }
            }).catch(() =>{
                throw new HttpException('Product not created', HttpStatus.NOT_IMPLEMENTED);
            });
        });
    }
}