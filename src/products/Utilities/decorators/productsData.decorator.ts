import { createParamDecorator } from "@nestjs/common";

export const ProductData = createParamDecorator( (data: string, request) =>{
    return data ? request.body && request.body[data] : request.body; 
});