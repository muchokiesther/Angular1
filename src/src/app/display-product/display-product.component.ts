import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/interfaces';



@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {
ngOnInit(): void {
  this.products = this.productService.getProducts()
}
  products: Product[] = []; 

constructor(private productService:ProductService){

}

}


