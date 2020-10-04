import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './services/sidenav.service';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService } from './services/theme.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('mainsidenav', { static: true }) public sidenav: MatSidenav;

  constructor(private _sideNavService: SidenavService, private _themeService :ThemeService) {
    
  }

  ngOnInit(): void {
    this._sideNavService.setSidenav(this.sidenav);
  }

  setInitialTheme(): string {
    if (this._themeService.getTheme()) {
      return "";
    }
    else {
      return "theme-alternate";
    }
  }

  handleSideNavClose() {
    this.sidenav.close();
    window.scrollTo(0, 0);
  }

  title = 'jake-minecraft';
}


