import { Pipe, PipeTransform } from '@angular/core';
import {MapMarker} from "../model/map-marker";

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(listItems: MapMarker[], value: string): MapMarker[] {
    value = value.toLowerCase();
    return listItems.filter((el: MapMarker) => el.name.toLowerCase().includes(value));
  }

}
