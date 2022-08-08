import { Component, OnInit } from '@angular/core';
import {MapMarker} from "../../model/map-marker";
import {MarkersList} from "../../constant/markers-list";

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss']
})

export class AsideMenuComponent {

  public listMarkers: MapMarker[] = MarkersList;
  public selectedItem!: string;

  constructor() { }

  public onSelect(value: string): void {
    this.selectedItem = value;
  }

}
