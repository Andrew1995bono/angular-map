import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-list-markers',
  templateUrl: './list-markers.component.html',
  styleUrls: ['./list-markers.component.scss']
})

export class ListMarkersComponent {

  @Input() selectedListItem!: string;
  @Input() isSelected: boolean = false;

  @Output() clickedListItem: EventEmitter<string> = new EventEmitter<string>();

  public onSelect(): void {
    this.clickedListItem.emit(this.selectedListItem);
  }

}
