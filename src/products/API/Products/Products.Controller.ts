import { Controller, Post, Body, Get, Param, Patch, Delete, HttpStatus} from "@nestjs/common";
import { ProductsAdd } from "../Domain/Products/AddProducts";
import {ProductFind} from "../Domain/Products/GetAllProducts";
import {ProductFindSingle} from "../Domain/Products/GetSingleProducts";
import {ProductUpdate} from "../Domain/Products/UpdateProducts";
import {ProductRemove} from "../Domain/Products/DeleteProducts";
//import { ProductsService } from "./products.service";
@Controller('products')
export class ProductsContoller {
    constructor(
        //private readonly productsService: ProductsService,
        private readonly AddProd: ProductsAdd,
        private readonly AllProdGet: ProductFind,
        private readonly SingleProdGet: ProductFindSingle,
        private readonly UpdateProd: ProductUpdate,
        private readonly RemoveProd: ProductRemove,
    ){}

    @Post()
    public async addProducts(@Body('title') prodTitle: string, @Body('description') prodDescript: string, @Body('price') prodPrice: number): Promise<HttpStatus>{
        await this.AddProd.AddProduct(prodTitle,prodDescript,prodPrice);
        return HttpStatus.CREATED;
    }

    @Get()
    public async getAllProducts(): Promise<HttpStatus>{
        let generatedProducts = await this.AllProdGet.GetAllProducts();
        return HttpStatus.OK;
    }

    @Get(':id')
    public async getProduct(@Param('id') prodId: string):Promise<HttpStatus>{
        let generatedProducts = await this.SingleProdGet.GetProduct(prodId);
        return HttpStatus.OK;
    }
//
    @Patch(':id')
    public async updateProduct(@Param('id') prodId: string, @Body('title') prodTitle: string, @Body('descr') prodDescr: string, @Body('price') prodIdPrice: number):Promise<HttpStatus>{
        await this.UpdateProd.UpdateProduct(prodId,prodTitle,prodDescr,prodIdPrice);
        return HttpStatus.OK;
    }

    @Delete(':id')
    public async removeProduct(@Param('id') prodId: string):Promise<HttpStatus>{
        await this.RemoveProd.DeleteProduct(prodId);
        return HttpStatus.OK;
    }
}