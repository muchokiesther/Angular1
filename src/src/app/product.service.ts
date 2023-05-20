import { Injectable } from '@angular/core';
import { Product } from 'src/interfaces';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor() { }
  products :Product[] =[
  {
    id:1,
    title:'mouse',
    description:'styled mouse',
    image:'https://cdn.shopify.com/s/files/1/0507/9688/8239/products/KoneXPAir_BLK_top_2.5x_550x534.png?v=1657717986' ,
    price:350
  },
  {
    id:1,
    title:'keyboard',
    description:'styled keyboard',
    image:'https://cdn.shopify.com/s/files/1/0507/9688/8239/products/MagmaMini-US_2x_96a50c12-7e0c-4d31-8931-81475f61eb12_550x534.png?v=1673284128' ,
    price:500
  }
]


getProducts():Product[]{
  return this.products
}

getOneProduct(id:number){
  let index = this.products.findIndex(product=> product.id ===id)
  return this.products[index]
}

addProduct(newProduct:Product){
  this.products.push(newProduct)
}

updateProducts(updatedProduct:Product){
let index = this.products.findIndex(product=> product.id ===updatedProduct.id)
this.products[index]=updatedProduct
}

deleteProduct(id:number){
  let index = this.products.findIndex(product=> product.id ===id)
  this.products.splice(index,1)
}
}
