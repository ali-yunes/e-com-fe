import { Component } from '@angular/core';
import { faStar, faCartShopping, faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  faStar = faStar;
  faCartShopping = faCartShopping;
  faHeart = faHeart;
  faCodeCompare = faCodeCompare;
}
