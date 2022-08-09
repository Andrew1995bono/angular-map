import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {MapMarkersService} from "../../shared/services/map-markers.service";

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss']
})

export class AsideMenuComponent {

  public selectedItem!: string;
  public resultValue!: string;
  public inputValue = new FormControl('', Validators.pattern('[a-zA-Z]*'));

  get isError(): boolean {
    return !!this.inputValue.errors;
  }

  constructor(
    public mapMarkersService: MapMarkersService
  ) {}

  public onSelect(value: string): void {
    this.selectedItem = value;
  }

  public searchItem(): void {
    this.resultValue = this.inputValue.value as string;
    this.mapMarkersService.filterExistingMapMarkers(this.resultValue);
  }

  public onSelectMapMarkerId(markerId: number): void {
    this.mapMarkersService.selectedMarkerOnMapId.next(markerId);
  }

}
