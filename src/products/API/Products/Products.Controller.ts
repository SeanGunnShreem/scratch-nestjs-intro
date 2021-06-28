import { Controller, Post, Body, Get, Param, Patch, Delete, HttpStatus} from "@nestjs/common";
import { ProductsAdd } from "../Domain/Products/AddProducts";

//import { ProductsService } from "./products.service";
@Controller('products')
export class ProductsContoller {
    constructor(
        //private readonly productsService: ProductsService,
        private readonly AddProd: ProductsAdd, 
    ){}

    @Post()
    public async addProducts(@Body('title') prodTitle: string, @Body('description') prodDescript: string, @Body('price') prodPrice: number): Promise<HttpStatus>{
        await this.AddProd.AddProduct(prodTitle,prodDescript,prodPrice);
        return HttpStatus.CREATED;
    }

   /* @Get()
    public async getAllProducts(){
        const generatedProducts = await this.product.getProducts();
        return generatedProducts;
    }

    @Get(':id')
    public async getProduct(@Param('id') prodId: string){
        return this.product.getSingleProduct(prodId);
    }

    @Patch(':id')
    public async updateProduct(@Param('id') prodId: string, @Body('title') prodTitle: string, @Body('descr') prodDescr: string, @Body('price') prodIdPrice: number){
        this.products.updateProduct(prodId,prodTitle,prodDescr,prodIdPrice);
        return null;
    }

    @Delete(':id')
    public async removeProduct(@Param('id') prodId: string){
        this.productsService.deleteProduct(prodId);
        return null;
    }*/
}