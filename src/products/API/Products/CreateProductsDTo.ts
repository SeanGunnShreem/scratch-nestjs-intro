import { isNull, isNumber, isString } from "util";

//the product DTO we receive from the client
export class CreateProductDTO{
    @isString()
    public id: string;

    @isString()
    public title: string;

    @isString()
    public description: string;

    @isNumber()
    public price: number;
}


