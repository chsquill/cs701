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
    super(provider, dialog);
  }

  url: string = 'http://worldclockapi.com/api/json';
  data: any = { "currentDateTime" : "", "dayOfTheWeek": "",
                "timeZoneName": "", "isDayLightSavingsTime": "" };

  ngOnInit() {
    timer(0, 60000).subscribe(() => this.getTime());
  }

  getTime(){

    console.log(this.item.text);

     this.http.get<any>(this.url + '/' + this.item.text + '/now').subscribe(
     data => this.formatTime(data),
     error => this.data.currentDateTime = new Date().toLocaleDateString());
  }

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

  openDialog(type: string): void {

    const dialogRef = this.dialog.open(ItemEditDialogComponent, {
      width: '300px',
      data: {text: this.item.text, pretext: this.item.pretext, type: type}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.item.pretext = result.pretext;
        this.item.text = result.text;
        this.getTime();
      }
    });
  }
}
