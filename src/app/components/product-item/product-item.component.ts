import { Component, Input } from '@angular/core';
import { faStar, faCartShopping, faCodeCompare, faHeart } from '@fortawesome/free-solid-svg-icons';
import {ProductI} from "../../models/products";


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html'
})

export class ProductItemComponent {
  @Input() product: ProductI;

  faStar = faStar;
  faCartShopping = faCartShopping;
  faHeart = faHeart;
  faCodeCompare = faCodeCompare;
}
