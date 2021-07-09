/* import { ApiProperty } from '@nestjs/swagger';
import{IsString,IsInt} from 'class-validator';

//the product DTO we receive from the client
export class ProductDTO{
    @ApiProperty({
        type: String,
        description: 'id of Product in database',
        default: '',
    })
    @IsString()
    readonly id: string;

    @ApiProperty({
        type: String,
        description: 'Title of Product',
        default: '',
    })
    @IsString()
    readonly title: string;

    @ApiProperty({
        type: String,
        description: 'description of Product',
        default: '',
    })
    @IsString()
    readonly description: string;

    @ApiProperty({
        type: Number,
        description: 'Price of Product',
        default: '',
    })
    @IsInt()
    readonly price: number;
} */
import { ApiProperty } from '@nestjs/swagger';
import{IsString,IsInt} from 'class-validator';
import {NewProduct} from "src/graphql";
export class ProductDTO extends NewProduct{
    @ApiProperty({
        type: String,
        description: 'id of Product in database',
        default: '',
    })
    @IsString()
    readonly id: string;

    @ApiProperty({
        type: String,
        description: 'Title of Product',
        default: '',
    })
    @IsString()
    readonly title: string;

    @ApiProperty({
        type: String,
        description: 'description of Product',
        default: '',
    })
    @IsString()
    readonly description: string;

    @ApiProperty({
        type: Number,
        description: 'Price of Product',
        default: '',
    })
    @IsInt()
    readonly price: number;
}

