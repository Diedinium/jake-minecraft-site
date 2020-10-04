import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isDarkMode: boolean;

  constructor(private sidenav: SidenavService, private _themeService: ThemeService) {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    if(typeof darkMediaQuery.addEventListener == 'function') {
      darkMediaQuery.addEventListener('change', (e) => {
        const currentSetting: boolean = e.matches;
        
        if (currentSetting) {
          this.isDarkMode = true;
        }
        else {
          this.isDarkMode = false;
        }
      });
    }
    else {
      darkMediaQuery.addListener(e => {
        const currentSetting: boolean = e.matches;

        if (currentSetting) {
          this.isDarkMode = true;
        }
        else {
          this.isDarkMode = false;
        }
      });
    }
  }

  ngOnInit(): void {
    this.isDarkMode = this._themeService.getTheme();
  }

  toggleMainSidenav() {
    this.sidenav.toggle();
  }

  toggleTheme() {
    if (this.isDarkMode) {
      this.isDarkMode = false;
      this._themeService.setTheme(false);
    }
    else {
      this.isDarkMode = true;
      this._themeService.setTheme(true);
    }
  }
}