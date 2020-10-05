import { Component, OnInit } from '@angular/core';
import { ServerStatusResponse } from 'src/app/models/ServerStatusResponse';
import { ServerStatusService } from 'src/app/services/server-status.service';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.css']
})
export class ServerStatusComponent implements OnInit {
  public isLoaded: boolean = false;
  public serverStatus: ServerStatusResponse;

  constructor(private serverStatusService: ServerStatusService) { }

  ngOnInit(): void {
    this.getServerStatus();
  }

  getServerStatus(): void {
    this.serverStatusService.getServerStatus()
      .subscribe(
        (response) => {
          this.serverStatus = response;
          this.isLoaded = true;
        },
        (error) => {
          console.error(`Error while fetching server status: ${error.message}`);
        }
      );
  }

}
