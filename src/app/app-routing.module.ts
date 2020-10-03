import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LocationsComponent } from './components/locations/locations.component';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'locations', component: LocationsComponent},
  { path: 'map', component: MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
