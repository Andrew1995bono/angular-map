import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {ActualMapMarkersService} from "../../shared/services/actual-map-markers.service";

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss']
})

export class AsideMenuComponent {

  public selectedItem!: string;
  public resultValue!: string;

  public inputValue = new FormControl('');

  constructor(
    public actualMapMarkersService: ActualMapMarkersService
  ) { }

  public onSelect(value: string): void {
    this.selectedItem = value;
  }

  public searchItem(): void {
    this.resultValue = this.inputValue.value as string;
    this.actualMapMarkersService.filterMapMarkers(this.resultValue);
  }

}
