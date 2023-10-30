import {Component, OnInit} from '@angular/core';
import {ProductI} from "../../models/products";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html'
})

export class CategoryPageComponent implements OnInit {
  products: ProductI[];
  totalProducts: number;
  name: string;
  pageSize: number = 3;
  pageIndex: number = 0;

  constructor(private productService: ProductService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.loadProducts(this.pageIndex, this.pageSize);
  }

  onPageEvent(event: PageEvent): void {
    this.loadProducts(event.pageIndex, event.pageSize);
  }

  private loadProducts(pageIndex: number, pageSize: number): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        let category = params.get("name");
        if (category) {
          this.name = category;
          return this.productService.getPaginatedProducts("", category, String(pageIndex), String(pageSize));
        }
        return of(null);
      })
    ).subscribe(data => {
      if (data) {
        this.products = data.products;
        this.totalProducts = data.total;
      }
    });
  }
}
