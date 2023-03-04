import { Component } from '@angular/core';

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

  onColumnsCountChange(colNum:number) {
    console.log("yes");
    this.cols = colNum
    this.rowHeight = ROWS_HEIGHT[colNum]
  }

  onShowCategory(newCategory:string):void {
    this.category = newCategory
  }
}
