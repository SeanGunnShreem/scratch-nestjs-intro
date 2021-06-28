export const ProductSchema:{
    constructor(public id: string, public title:string,public descript:string,public price:number){
        /*this.id = id;
        this.title = title;
        this.description = descript;
        this.price = price;*/
    };
}

export interface IProductEntity, ProductModel{}