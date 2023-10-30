import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { ProductService } from '../../services/product.service';
import {ProductI} from "../../models/products";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})


export class ProductsComponent implements OnInit, AfterViewInit {
  @Input() searchTerm: string;
  @Input() category: string;
  @ViewChild('scrollableProducts') scrollableDiv: ElementRef;
  div: HTMLDivElement;
  page: number = 0;
  limit: number = 10;
  products: ProductI[];

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productService.getPaginatedProducts(this.searchTerm,this.category,this.page.toString(),this.limit.toString()).subscribe((data)=>{this.products = data.products});
  }

  ngAfterViewInit(): void {
    this.div = this.scrollableDiv.nativeElement;
  }

  scrollLeft(): void {
      this.div.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollRight(): void {
      this.div.scrollBy({ left: 200, behavior: 'smooth' });
  }
}
