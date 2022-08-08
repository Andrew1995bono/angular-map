import { Component, OnInit } from '@angular/core';
import {MapMarker} from "../../model/map-marker";
import {MarkersList} from "../../constant/markers-list";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public markers: MapMarker[] = MarkersList;
  public defaultLat = 46.433334;
  public defaultLon= 6.550000;

  constructor() { }

  ngOnInit(): void {
  }

}
