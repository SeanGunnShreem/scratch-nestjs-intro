import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
//import { Product } from './product.model';
import {Product} from './Domain/Products/IProducts';
import {Model} from 'mongoose';
import { Product, ProductModel } from "./product.model";
@Injectable()
export class ProductsService{
    constructor(@InjectModel('Product') private readonly ProductModel: Model<Product>){}

    async create(product: Product):Promise<Product>{
        const newProduct = new this.ProductModel(product);
        return await newProduct.save();
        
        /*const prodId = Math.random().toString();
        const newProduct = new Product(prodId, title, descript, price);
        this.products.push(newProduct);
        return prodId;*/
    };

    /*async getProducts():Promise<Product>{
        //return [...this.products];
        return await this.ProductModel.findAll();
    }*/

    async find(productId: string):Promise<Product>{
       /*const product = this.findProduct(productId)[0];
       return {...product};*/
       return await this.ProductModel.findOne({_id: productId});
    }
    //findall before views
    /*async findAll():Promise<Product>{
        
        return await this.ProductModel.find();
     }*/

     async findAll():Promise<Product[]>{
        /*const product = this.findProduct(productId)[0];
        return {...product};*/
        return await this.ProductModel.find();
     }

    async update(productId: string, prod: Product):Promise<Product>{
        return await this.ProductModel.findByIdAndUpdate(productId,prod,{new: true});
        /*const [product, index] = this.findProduct(productId);
        const updatedProduct = {...product};
        if(!title){
            updatedProduct.title = title;
        }
        if(!descr){
            updatedProduct.descript = descr;
        }
        if(!price){
            updatedProduct.price = price;
        }
        this.products[index] = {...product,}*/
    }

    async delete(prodId: string):Promise<Product>{
        return await this.ProductModel.findByIdAndRemove(prodId);
        /*const index = this.findProduct(prodId)[1];
        this.products.splice(index, 1);*/
    }

    /*private findProduct(id: string): [Product, number]{
        const productIndex = this.products.findIndex((prod) => prod.id == id);
       const product = this.products[productIndex];
        if(!product){
             throw new NotFoundException('Could not find the product.');
        }
        return [product, productIndex];
    }*/

}