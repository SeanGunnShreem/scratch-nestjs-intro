// Persistence/User/UserRepositoryModule.ts

import { Module } from '@nestjs/common';
import { ProductsRepoProvider } from './ProductsRepository.Provider';


@Module({
   providers: [ProductsRepoProvider],
   exports: [ProductsRepoProvider],
})
export class ProductsRepositoryModule {}