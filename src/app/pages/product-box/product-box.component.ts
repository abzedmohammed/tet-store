import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styles: [
  ]
})
export class ProductBoxComponent {
  @Input() fullWidthMode: boolean = false;

  product: Product | undefined = {
    id: 1,
    title: "Nike ",
    price: 130,
    category: "shoes",
    description: "Some very interesting shoes",
    image: "https://via.placeholder.com/150"
  }

  @Output() addToCart = new EventEmitter();


  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

}
