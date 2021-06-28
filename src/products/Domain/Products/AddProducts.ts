import { Injectable } from "@nestjs/common";
import { IProducts } from "./IProducts";
import { IProductsRepository, ProductsRepository } from "./IProductsRepository";


@Injectable()
export class InsertProducts{
    constructor(
        @ProductsRepository() private readonly productRepository: IProductsRepository,

    ){}

    public async AddProduct(title :string, descript: string, price: number):Promise<IProducts>{
        const prodId = Math.random().toString();
       // const newProduct = new IProducts(prodId, title, descript, price);
        return this.productRepository.AddProduct(prodId, title, descript, price);
        //return newProduct;
    };
}
/*
import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from './product.model';

@Injectable()
export class ProductsService{
    products: Product[] = [];

    insertProduct(title :string, descript: string, price: number){
        const prodId = Math.random().toString();
        const newProduct = new Product(prodId, title, descript, price);
        this.products.push(newProduct);
        return prodId;
    };

    getProducts(){
        return [...this.products];
    }

    getSingleProduct(productId: string){
       const product = this.findProduct(productId)[0];
       return {...product};
    }

    updateProduct(productId: string, title: string, descr: string, price: number){
        const [product, index] = this.findProduct(productId);
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
        this.products[index] = {...product,}
    }

    deleteProduct(prodId: string){
        const index = this.findProduct(prodId)[1];
        this.products.splice(index, 1);
    }

    private findProduct(id: string): [Product, number]{
        const productIndex = this.products.findIndex((prod) => prod.id == id);
       const product = this.products[productIndex];
        if(!product){
             throw new NotFoundException('Could not find the product.');
        }
        return [product, productIndex];
    }

}*/