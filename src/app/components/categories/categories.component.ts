import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html'
})
export class CategoriesComponent implements AfterViewInit{
  @ViewChild('scrollableCategories') scrollableDiv: ElementRef;
  div: HTMLDivElement;

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
