import { Component, Input } from '@angular/core';
import { faStar, faCartShopping, faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


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
