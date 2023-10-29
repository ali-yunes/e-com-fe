import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

interface ProductI {
  id: string;
  name: string;
  category: string;
  price: number;
  discount: number;
  image: string;
  ratingAverage: number;
  reviewCount: number
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})


export class ProductsComponent implements OnInit {
  products: ProductI[];
  total: number;

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productService.getPaginatedProducts('','','','').subscribe((data)=>{console.log(data.products); this.products = data.products});
  }
}
