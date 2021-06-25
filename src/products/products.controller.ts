import { Controller, Post, Body, Get, Param, Patch, Delete} from "@nestjs/common";
import { ProductsService } from "./products.service";
@Controller('products')
export class ProductsContoller {
    constructor(private readonly productsService: ProductsService){}

    @Post()
    addProducts(@Body('title') prodTitle: string, @Body('description') prodDescript: string, @Body('price') prodPrice: number,): any{
        const generatedId = this.productsService.insertProduct(prodTitle,prodDescript,prodPrice);
        return{id: generatedId};
    }

    @Get()
    getAllProducts(){
        return this.productsService.getProducts();
    }

    @Get(':id')
    getProduct(@Param('id') prodId: string){
        return this.productsService.getSingleProduct(prodId);
    }

    @Patch(':id')
    updateProduct(@Param('id') prodId: string, @Body('title') prodTitle: string, @Body('descr') prodDescr: string, @Body('price') prodIdPrice: number){
        this.productsService.updateProduct(prodId,prodTitle,prodDescr,prodIdPrice);
        return null;
    }

    @Delete(':id')
    removeProduct(@Param('id') prodId: string){
        this.productsService.deleteProduct(prodId);
        return null;
    }
}