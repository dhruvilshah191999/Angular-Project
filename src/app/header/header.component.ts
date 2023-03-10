import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  collapsed: boolean = true;
  @Output() featuredSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featuredSelected.emit(feature);
  }
}
