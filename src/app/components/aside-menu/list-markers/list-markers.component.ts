import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list-markers',
  templateUrl: './list-markers.component.html',
  styleUrls: ['./list-markers.component.scss']
})

export class ListMarkersComponent {

  @Input() selectedItem!: string;
  @Input() isSelected: boolean = false;

  @Output() clickedItem: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public onSelect(): void {
    this.clickedItem.emit(this.selectedItem);
  }

}
