import { Component, OnInit } from '@angular/core';
import {MapMarkersService} from "../../shared/services/map-markers.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public defaultLat: number = 27.433334;
  public defaultLon: number = 6.550000;
  public zoom: number = 3;


  constructor(
    public actualMapMarkersService: MapMarkersService
  ) { }

  ngOnInit(): void {
  }

}
