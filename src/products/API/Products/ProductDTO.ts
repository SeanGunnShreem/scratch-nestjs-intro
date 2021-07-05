import{IsString,IsInt} from 'class-validator';

//the product DTO we receive from the client
export class ProductDTO{
    @IsString()
    readonly id: string;

    @IsString()
    readonly title: string;

    @IsString()
    readonly description: string;

    @IsInt()
    readonly price: number;
}


