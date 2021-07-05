import { Controller, Post, Body, Get, Param, Patch, Delete, HttpException, HttpStatus, UseFilters, UsePipes, CacheKey, CacheTTL, UseInterceptors, CacheInterceptor, Render, Inject} from "@nestjs/common";
import { ProductDTO } from "src/products/API/Products/ProductDTO";
import {IProducts} from 'src/products/Domain/Products/IProducts';
import {HttpExceptionFilter} from 'src/products/Utilities/Filters/http-exception.filter';
import { ValidationPipe } from "src/products/Utilities/Pipes/validation.pipe";
import { ProductData } from "src/products/Utilities/decorators/productsData.decorator";
import {BenchmarkInterceptor} from "src/products/Utilities/interceptors/benchmark.interceptors";
//import { ProductsService } from "src/products/products.service";
//TODO: call functions from IProductsRepository 

@Controller('products')
@UseInterceptors(CacheInterceptor, BenchmarkInterceptor)
//@UseFilters(HttpExceptionFilter)
//@UsePipes(ValidationPipe)
export class ProductsContoller {
    constructor(
        @Inject('ProductsRepository') private readonly IProductsRepository,
        //private readonly productsService: ProductsService,
    ){}

    @Post()
    @CacheKey('oneProductCreate')
    @CacheTTL(30)
    addProducts(@ProductData() prod: ProductDTO) :Promise<IProducts>{
        return this.IProductsRepository.AddProduct(prod);
    }

    //Get function before MVC
    /*@Get()
    @CacheKey('allProductGet')
    @CacheTTL(30)
    async getAll():Promise<Product>{
        return await this.IProductsRepository.GetAllProducts();
    }*/
    @Get()
    @CacheKey('allProductGet')
    @CacheTTL(30)
    @Render('job/index')
    root(){
        return this.IProductsRepository.GetAllProducts();
    }


    @Get(':id')
    @CacheKey('oneProductGet')
    @CacheTTL(30)
    getProduct(@Param('id') prodId) :Promise<IProducts>{
        return this.IProductsRepository.GetProduct(prodId);
    }

    @Patch(':id')
    @CacheKey('oneProductUpdate')
    @CacheTTL(30)
    updateProduct(@Param('id') prodId, @Body() prod: ProductDTO):Promise<IProducts>{
        return this.IProductsRepository.UpdateProduct(prodId,prod);
    }

    @Delete(':id')
    @CacheKey('oneProductDelete')
    @CacheTTL(30)
    removeProduct(@Param('id') prodId):Promise<IProducts>{
        return this.IProductsRepository.RemoveProduct(prodId);
    }
}