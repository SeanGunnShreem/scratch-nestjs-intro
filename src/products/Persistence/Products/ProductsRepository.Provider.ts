// Persistence/User/UserPersistenceProvider.ts
import { Provider } from "@nestjs/common";
import { ProductsRepository } from "./ProductsRepository";


export const ProductsRepoProvider: Provider = {
    provide: 'ProductsRepo',
    useClass: ProductsRepository
}