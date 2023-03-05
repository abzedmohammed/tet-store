import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent {
  cart: Cart = {
    items: [
      {
        product: "https://via.placeholder.com/150",
        name: "Snickers",
        price: 370,
        quantity: 3,
        id: 1
      },
      {
        product: "https://via.placeholder.com/150",
        name: "Addidas",
        price: 980,
        quantity: 1,
        id: 2
      }
    ]
  }

  dataSource: Array<CartItem> = []

  displayedColumns: Array<string> = [
    "product",
    "name",
    "price",
    "quantity",
    "total",
    "action"
  ]

  ngOnInit(): void {
    this.dataSource = this.cart.items
  }

  getTotal(items: Array<CartItem>): number {
    return items.map(item => item.price * item.quantity).reduce((prev, curr) => prev + curr, 0)
  }

}

