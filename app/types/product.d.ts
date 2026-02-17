export interface Products{
 id:number;
 img:string;
 name:string;
 category:string;
 price:number;
 sales_price:number;
 stock:number;
 status:"selling"|"soldout"   
}