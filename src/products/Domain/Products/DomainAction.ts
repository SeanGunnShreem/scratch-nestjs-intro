// Domain/Products/DomainAction.ts
import { Injectable, Inject } from '@nestjs/common';
import { ProductsRepository } from '../../Persistence/Products/ProductsRepository';
import { IProductsRepository } from './IProductsRepository';


const ProductRepo = () => Inject('ProductRepo');


@Injectable()
export class DomainAction {
   constructor(
      @ProductRepo() private readonly productsRepository: IProductsRepository,
   ) {}
}