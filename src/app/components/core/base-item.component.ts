import { Component, Input } from '@angular/core';
import { Item } from '../../services/item';
import { ItemProviderService } from '../../services/item-provider.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../../services/DialogData';
import { ItemEditDialogComponent } from '../item-edit-dialog/item-edit-dialog.component';

export class BaseItemComponent {

   @Input() public item:  Item;

  constructor(public provider: ItemProviderService, public dialog: MatDialog) { }

  deleteItem() {
    this.provider.deleteItem(this.item.id);
  }

  editItem(type: string) {
    console.log(type);
    this.openDialog(type);
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
      }
    });
  }
}
