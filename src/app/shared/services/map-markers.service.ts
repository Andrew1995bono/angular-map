import { Injectable } from '@angular/core';
import {MapMarker} from "../../model/map-marker";
import {MarkersList} from "../../constant/markers-list";
import {SearchFilterPipe} from "../search-filter.pipe";

@Injectable({
  providedIn: 'root'
})
export class MapMarkersService {

  public actualListMarkers: MapMarker[] = MarkersList;

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
