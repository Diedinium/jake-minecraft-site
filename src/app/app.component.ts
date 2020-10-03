import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './services/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('mainsidenav', { static: true }) public sidenav: MatSidenav;

  constructor(private sideNavService: SidenavService) {
    
  }

  ngOnInit(): void {
    this.sideNavService.setSidenav(this.sidenav);
  }

  title = 'jake-minecraft';
}


