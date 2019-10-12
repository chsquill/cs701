import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../services/item';
import { ItemProviderService } from '../../services/item-provider.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../../services/DialogData';
import { ItemEditDialogComponent } from '../item-edit-dialog/item-edit-dialog.component';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css']
})
export class VideoItemComponent implements OnInit {

  @Input() item: Item;

  constructor(private provider: ItemProviderService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  deleteItem() {
    console.log("deleting note:" + this.item.id);
    this.provider.deleteItem(this.item.id);
  }

  editItem() {
    this.openDialog();
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(ItemEditDialogComponent, {
      width: '300px',
      data: {text: this.item.text, type: "IMAGES"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        this.item.text = result.text;
      }
    });
  }
}
