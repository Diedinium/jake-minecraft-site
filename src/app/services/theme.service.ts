import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _isDarkMode: boolean;

  constructor(private _cookieService: CookieService) {
    const cookieSettingExists :boolean = _cookieService.check('themeSetting');
    const darkModeOn: boolean = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    console.log(`Dark mode is on? ${darkModeOn}`);


    if (cookieSettingExists) {
      this._isDarkMode = (_cookieService.get('themeSetting') == "true");
    }
    else {
      if (darkModeOn) {
        this.setTheme(true);
      }
      else {
        this.setTheme(false);
      }
    }

    try {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', e => {
        const currentSetting: boolean = e.matches;
        if (currentSetting) {
          this.setTheme(true);
        }
        else {
          this.setTheme(false);
        }
      });
    }
    catch(error) {
      window.matchMedia("(prefers-color-scheme: dark)").addListener(e => {
        const currentSetting: boolean = e.matches;
        if (currentSetting) {
          this.setTheme(true);
        }
        else {
          this.setTheme(false);
        }
      });
    }
  }

  public getTheme(): boolean {
    return this._isDarkMode;
  }

  public setTheme(isDarkMode: boolean): void {
    this._isDarkMode = isDarkMode;
    this._cookieService.set('themeSetting', this._isDarkMode.toString());
  }
}
