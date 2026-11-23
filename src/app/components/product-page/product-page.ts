import { Component } from '@angular/core';
import { Articles } from '../articles/articles';
import { Carousel } from '../carousel/carousel';

@Component({
  selector: 'app-product-page',
  imports: [Articles, Carousel],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage {

}
