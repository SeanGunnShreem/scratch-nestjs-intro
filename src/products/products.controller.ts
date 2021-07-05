import { Controller, Post, Body, Get, Param, Patch, Delete, HttpException, HttpStatus, UseFilters, UsePipes, CacheKey, CacheTTL, UseInterceptors, CacheInterceptor, Render} from "@nestjs/common";
import { ProductsService } from "./Persistence/Products/Products.service";
import { ProductDTO } from "./API/Products/ProductDTO";
import {IProducts} from './Domain/Products/IProducts';
import {HttpExceptionFilter} from './Utilities/Filters/http-exception.filter';
import { ValidationPipe } from "./Utilities/Pipes/validation.pipe";
import { ProductData } from "./Utilities/decorators/productsData.decorator";
import {BenchmarkInterceptor} from "./Utilities/interceptors/benchmark.interceptors";


@Controller('products')
@UseInterceptors(CacheInterceptor, BenchmarkInterceptor)
//@UseFilters(HttpExceptionFilter)
//@UsePipes(ValidationPipe)
export class ProductsContoller {
    constructor(private readonly productsService: ProductsService){}

    @Post()
    @CacheKey('oneProductCreate')
    @CacheTTL(30)
    addProducts(@ProductData() prod: ProductDTO) :Promise<IProducts>{
        return this.productsService.create(prod).catch(() =>{
            throw new HttpException('Product not created', HttpStatus.NOT_IMPLEMENTED);
        });
        /*const generatedId = this.productsService.insertProduct(prodTitle,prodDescript,prodPrice);
        return{id: generatedId};*/
    }

    //Get function before MVC
    /*@Get()
    @CacheKey('allProductGet')
    @CacheTTL(30)
    getAll():Promise<Product>{
        return this.productsService.findAll().then((result)=>{
            if(result){
                return result;
            }else{
                throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
            }
        }).catch(() =>{
            throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
        });
    }*/
    @Get()
    @CacheKey('allProductGet')
    @CacheTTL(30)
    @Render('job/index')
    root(){
        return this.productsService.findAll().then((result)=>{
            if(result){
                return {product: result};
            }else{
                return {product:[]};
                //throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
            }
        }).catch(() =>{
            throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
        });
    }

    @Get(':id')
    @CacheKey('oneProductGet')
    @CacheTTL(30)
    getProduct(@Param('id') prodId) :Promise<IProducts>{
        return this.productsService.find(prodId)
        .then((result)=>{
            if(result){
                return result;
            }else{
                throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
            }
        }).catch(() =>{
            throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
        });
        //return this.productsService.getSingleProduct(prodId);
    }

    @Patch(':id')
    @CacheKey('oneProductUpdate')
    @CacheTTL(30)
    updateProduct(@Param('id') prodId, @Body() prod: ProductDTO):Promise<IProducts>{
        return this.productsService.update(prodId, prod).then((result)=>{
            if(result){
                return result;
            }else{
                throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
            }
        }).catch(() =>{
            throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
        });
    }

    @Delete(':id')
    @CacheKey('oneProductDelete')
    @CacheTTL(30)
    removeProduct(@Param('id') prodId):Promise<IProducts>{
        return this.productsService.delete(prodId).then((result)=>{
            if(result){
                return result;
            }else{
                throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
            }
        }).catch(() =>{
            throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
        });
        /*this.productsService.deleteProduct(prodId);
        return null;*/
    }
}