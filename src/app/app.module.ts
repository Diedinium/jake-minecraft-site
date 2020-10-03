import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SidenavService } from './services/sidenav.service';
import { MapComponent } from './components/map/map.component';
import { LocationsComponent } from './components/locations/locations.component';
import { AboutComponent } from './components/about/about.component';
import { ThemeService } from './services/theme.service';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MapComponent,
    LocationsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [SidenavService, CookieService, ThemeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
