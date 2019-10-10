import { Component, OnInit } from '@angular/core';
import { Item } from '../../services/item';
import { ItemProviderService } from '../../services/item-provider.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../../services/DialogData';
import { ItemEditDialogComponent } from '../item-edit-dialog/item-edit-dialog.component';

@Component({
  selector: 'app-item-selector',
  templateUrl: './item-selector.component.html',
  styleUrls: ['./item-selector.component.css']
})
export class ItemSelectorComponent implements OnInit {

  text: string;

  constructor(private provider: ItemProviderService, public dialog: MatDialog) { }

  ngOnInit() {}

  addItem(text: string, type: string) {
    let item: Item = new Item();
    item.text = text;
    item.type = type;
    this.provider.addItem(item);
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(ItemEditDialogComponent, {
      width: '250px',
      data: {text: this.text}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        this.text = result.text;
        this.addItem(this.text, "NOTE");
      }
    });
  }

}
