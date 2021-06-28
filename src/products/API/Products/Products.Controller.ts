import { Controller, Post, Body, Get, Param, Patch, Delete} from "@nestjs/common";
import { ProductsModule } from "../../Domain/Products/Products.Module";
//import { ProductsService } from "./products.service";
@Controller('products')
export class ProductsContoller {
    constructor(
        //private readonly productsService: ProductsService,
        private readonly product: ProductsModule, 
    ){}

    @Post()
    public async addProducts(@Body('title') prodTitle: string, @Body('description') prodDescript: string, @Body('price') prodPrice: number,): any{
        const generatedId = await this.product.insertProduct(prodTitle,prodDescript,prodPrice);
        return{id: generatedId};
    }

    @Get()
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
    }
}