import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

import {AsideMenuComponent} from "./aside-menu.component";
import { ListMarkersComponent } from './list-markers/list-markers.component';

@NgModule({
  declarations: [AsideMenuComponent, ListMarkersComponent],
  exports: [
    AsideMenuComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})

export class AsideMenuModule { }
