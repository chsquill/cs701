import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../services/item';
import { ItemProviderService } from '../../services/item-provider.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../../services/DialogData';
import { ItemEditDialogComponent } from '../item-edit-dialog/item-edit-dialog.component';


@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.css']
})
export class QuestionItemComponent implements OnInit {

  constructor(private provider: ItemProviderService, public dialog: MatDialog) { }

  @Input() item: Item;

  ngOnInit() {
  }

  deleteItem() {
    console.log("deleting question:" + this.item.id);
    this.provider.deleteItem(this.item.id);
  }

  editItem() {
    this.openDialog();
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(ItemEditDialogComponent, {
      width: '250px',
      data: {pretext: this.item.pretext, text: this.item.text, type: "QUESTION"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        this.item.pretext = result.pretext;
        this.item.text = result.text;
      }
    });
  }
}
