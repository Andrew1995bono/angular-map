import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AsideMenuComponent} from "./aside-menu.component";
import { SearchInputComponent } from './search-input/search-input.component';
import { ListMarkersComponent } from './list-markers/list-markers.component';



@NgModule({
  declarations: [AsideMenuComponent, SearchInputComponent, ListMarkersComponent],
  exports: [
    AsideMenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AsideMenuModule { }
