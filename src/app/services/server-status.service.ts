import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ServerStatusResponse } from '../models/ServerStatusResponse';

@Injectable({
  providedIn: 'root'
})
export class ServerStatusService {
  private _apiBaseUrl:string = 'https://api.mcsrvstat.us/2/';

  constructor(private _httpClient: HttpClient) { }

  getServerStatus(): Observable<ServerStatusResponse> {
    return this._httpClient.get<ServerStatusResponse>(`${this._apiBaseUrl}play.jake-minecraft.net`);
  }
}
