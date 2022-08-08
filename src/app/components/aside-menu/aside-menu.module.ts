import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AsideMenuComponent} from "./aside-menu.component";
import { ListMarkersComponent } from './list-markers/list-markers.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SearchFilterPipe} from "../../shared/search-filter.pipe";



@NgModule({
  declarations: [AsideMenuComponent, ListMarkersComponent, SearchFilterPipe],
  exports: [
    AsideMenuComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AsideMenuModule { }
