import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

const ROWS_HEIGHT: {[id:number]: number} = {
  1: 400,
  3: 335,
  4: 350
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  cols = 3
  category: string | undefined
  rowHeight = ROWS_HEIGHT[this.cols]
  
  constructor(private cartService: CartService) { }

  onColumnsCountChange(colNum:number) {
    console.log("yes");
    this.cols = colNum
    this.rowHeight = ROWS_HEIGHT[colNum]
  }

  onShowCategory(newCategory:string):void {
    this.category = newCategory
  }

  onAddToCart(product:Product):void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    })
  }
}
