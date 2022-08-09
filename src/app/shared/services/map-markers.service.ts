import { Injectable } from '@angular/core';
import {MapMarker} from "../../model/map-marker";
import {MarkersList} from "../constants/markers-list";
import {SearchFilterPipe} from "../pipes/search-filter.pipe";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class MapMarkersService {

  public actualListMarkers: MapMarker[] = MarkersList;
  public selectedMarkerOnMapId: Subject<number> = new Subject<number>();

  get markers() {
    return this.actualListMarkers;
  }

  constructor(
    private searchFilterPipe: SearchFilterPipe
  ) { }

  public filterMapMarkers(val: string): void {
    this.actualListMarkers = this.searchFilterPipe.transform(MarkersList, val);
  }

}
