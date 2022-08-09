import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AgmCoreModule} from "@agm/core";
import {AsideMenuModule} from "./components/aside-menu/aside-menu.module";

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AsideMenuModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAjklH_g2KrowTJOr78fMFsdIokyUa4lgM',
      language: 'en'
    })
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
