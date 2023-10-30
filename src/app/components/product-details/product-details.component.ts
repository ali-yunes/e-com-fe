import { Component, OnInit } from '@angular/core';
import { ProductDetailsI } from 'src/app/models/products';
import { ProductService } from '../../services/product.service';
import { faStar, faCartShopping, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html'
})

export class ProductDetailsComponent implements OnInit {
  product: ProductDetailsI;
  faStar = faStar;
  faCartShopping = faCartShopping;
  faHeart = faHeart;
  faCodeCompare = faCodeCompare;

  constructor(private productService: ProductService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      const id = params.get("id")
      if(id){
        this.productService.getProduct(id).subscribe((data)=>{this.product = data});
      }
    })
  }
}
