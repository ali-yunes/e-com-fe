import {Component, Input, OnInit} from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {ReviewI} from "../../models/products";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html'
})
export class ReviewComponent implements OnInit{
  @Input() review: ReviewI;
  date: string;
  faStar = faStar;

  ngOnInit(): void {
    this.date = new Date(this.review.dateCreated).toLocaleDateString();
  }
}
