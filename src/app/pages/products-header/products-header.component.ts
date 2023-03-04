import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styles: [
  ]
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter();

  sort = 'desc'
  itemsShowCount = 10

  showArray:number[] = [
    10, 25, 50, 100
  ];

  onSortUpdated(newSort: string):void{
    this.sort = newSort;
    console.log(this.sort);
    
  }

  onItemsUpdated(count: any):void{
    this.itemsShowCount = count;
    console.log(typeof this.itemsShowCount, this.itemsShowCount);
  }
  
  onColumnsUpdated(num: number) {
    this.columnsCountChange.emit(num)
  }
}
