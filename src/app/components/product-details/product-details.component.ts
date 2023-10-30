import { Component, Input, OnInit } from '@angular/core';
import { ProductDetailsI } from 'src/app/models/products';
import { ProductService } from '../../services/product.service';
import { faStar, faCartShopping, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html'
})

export class ProductDetailsComponent implements OnInit {
  @Input() productId: string;
  product: ProductDetailsI;
  faStar = faStar;
  faCartShopping = faCartShopping;
  faHeart = faHeart;
  faCodeCompare = faCodeCompare;

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productService.getProduct(this.productId).subscribe((data)=>{this.product = data});
  }
}
