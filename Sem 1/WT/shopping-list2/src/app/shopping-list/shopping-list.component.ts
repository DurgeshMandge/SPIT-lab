// src/app/shopping-list/shopping-list.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  newItem: string = '';
  newQuantity: string = '';
  shoppingItems: { name: string; quantity: string }[] = [];

  addItem() {
    if (this.newItem && this.newQuantity) {
      this.shoppingItems.push({
        name: this.newItem,
        quantity: this.newQuantity,
      });
      this.newItem = '';
      this.newQuantity = '';
    }
  }

  removeItem(index: number) {
    this.shoppingItems.splice(index, 2);
  }
}
