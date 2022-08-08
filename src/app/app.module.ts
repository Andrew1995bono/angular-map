import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AgmCoreModule} from "@agm/core";
import { MapComponent } from './components/map/map.component';
import {AsideMenuModule} from "./components/aside-menu/aside-menu.module";
import { SearchFilterPipe } from './shared/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AsideMenuModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAjklH_g2KrowTJOr78fMFsdIokyUa4lgM'
    })
  ],
  providers: [SearchFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
