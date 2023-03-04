import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styles: [
  ]
})
export class SideNavComponent {

  @Output() showCategory = new EventEmitter<string>();

  categories = [
    'shoes', "sports"
  ]

  typesOfShoes = [
    "boots", "Clogs", "Loafers", "Sneakers"
  ]

  onShowCategory(category: string) :void {
    this.showCategory.emit(category)
    console.log(category);
    
  }
}
