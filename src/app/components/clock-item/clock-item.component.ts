import { Component, OnInit } from '@angular/core';
import { ItemProviderService } from '../../services/item-provider.service';
import { MatDialog } from '@angular/material/dialog';
import { BaseItemComponent } from '../core/base-item.component';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { timer } from 'rxjs'
import { ItemEditDialogComponent } from '../item-edit-dialog/item-edit-dialog.component';

@Component({
  selector: 'app-clock-item',
  templateUrl: './clock-item.component.html',
  styleUrls: ['./clock-item.component.css']
})
export class ClockItemComponent extends BaseItemComponent implements OnInit {

  constructor(public provider: ItemProviderService,
              public dialog: MatDialog,
              private http: HttpClient) {
    super(provider, dialog); // call base class
  }

  // world clock url
  url: string = 'http://worldclockapi.com/api/json';

  // default empty values for ui data
  data: any = { "currentDateTime" : "", "dayOfTheWeek": "",
                "timeZoneName": "", "isDayLightSavingsTime": "" };

  ngOnInit() {
    // set a timer to refresh clock every minute
    timer(0, 60000).subscribe(() => this.getTime());
  }

  // get the time from world clock, fall back to local time if error
  getTime(){
     // remote GET request
     this.http.get<any>(this.url + '/' + this.item.text + '/now').subscribe(
     data => this.formatTime(data),
     error => this.data.currentDateTime = new Date().toLocaleDateString());
  }

  // format reponse from world clock
  formatTime(wcData: any){

    if(!wcData.serviceResponse){
      this.data.currentDateTime = wcData.currentDateTime;
      this.data.dayOfTheWeek = wcData.dayOfTheWeek;
      this.data.timeZoneName = wcData.timeZoneName;
      this.data.isDayLightSavingsTime = wcData.isDayLightSavingsTime;
    }else{
      this.data.currentDateTime = new Date().toLocaleDateString();
      this.data.dayOfTheWeek = null;
      this.data.timeZoneName = null;
      this.data.isDayLightSavingsTime = null;
    }
  }

  // overrode this from base class to call the getTime()
  // after dialog close. This should be replaced by an
  // event that is emmitted from the parent class
  openDialog(type: string): void {

    // open dialog
    const dialogRef = this.dialog.open(ItemEditDialogComponent, {
      width: '300px',
      data: {text: this.item.text, pretext: this.item.pretext, type: type}
    });

    // dialog closed
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.item.pretext = result.pretext;
        this.item.text = result.text;
        this.getTime();
      }
    });
  }
}
