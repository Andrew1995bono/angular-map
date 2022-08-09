import { Injectable } from '@angular/core';
import {MapMarker} from "../../models/map-marker";
import {MarkersList} from "../constants/markers-list";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class MapMarkersService {

  public actualListMarkers: MapMarker[] = MarkersList;
  public selectedMarkerOnMapId: Subject<number> = new Subject<number>();

  public filterExistingMapMarkers(currInputValue: string): MapMarker[] {
    currInputValue = currInputValue.toLowerCase();
    return this.actualListMarkers = MarkersList.filter((el: MapMarker) => el.name.toLowerCase().includes(currInputValue));
  }

}
