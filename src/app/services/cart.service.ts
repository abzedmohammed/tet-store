import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<Cart>({items: []})


  constructor(private _snackBar: MatSnackBar) { }

  addToCart(item: CartItem): void {
    const items = [...this.cart.value.items]
    const itemInCart = items.find(item => item.id === item.id)

    if (itemInCart) {
      itemInCart.quantity += 1
    }else{
      items.push(item)
    }
    this.cart.next({ items })
    this._snackBar.open("1 item added to cart.", 'Ok', {duration: 3000})
    console.log(this.cart.value);
  }

  getTotal(items: Array<CartItem>): number {
    return items.map(item => item.price * item.quantity).reduce((prev, curr) => prev + curr, 0)
  }

  removeCartItem(item: CartItem): void {
    const items = [...this.cart.value.items].filter(cartItem => cartItem.id !== item.id)
    this.cart.next({ items })
    this._snackBar.open("1 item removed from cart.", 'Ok', {duration: 3000})
    console.log(items);
    
  }

}
