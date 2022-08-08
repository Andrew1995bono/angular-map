import { Component, OnInit } from '@angular/core';
import {ActualMapMarkersService} from "../../shared/services/actual-map-markers.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public defaultLat = 46.433334;
  public defaultLon= 6.550000;

  constructor(
    public actualMapMarkersService: ActualMapMarkersService
  ) { }

  ngOnInit(): void {
  }

}
