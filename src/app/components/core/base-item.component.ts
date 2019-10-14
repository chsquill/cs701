import { Component, Input } from '@angular/core';
import { Item } from '../../services/item';
import { ItemProviderService } from '../../services/item-provider.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../../services/DialogData';
import { ItemEditDialogComponent } from '../item-edit-dialog/item-edit-dialog.component';

// base class for all the board items
export class BaseItemComponent {

   // item for the component
   @Input() public item:  Item;

  constructor(public provider: ItemProviderService, public dialog: MatDialog) { }

  // delete an item from the board
  deleteItem() {
    this.provider.deleteItem(this.item.id);
  }

  // edit an item on the board
  editItem(type: string, label: string) {
    this.openDialog(type, label);
  }

  // opens a dialog box
  openDialog(type: string, label: string): void {

    // open box
    const dialogRef = this.dialog.open(ItemEditDialogComponent, {
      width: '300px',
      data: {text: this.item.text, pretext: this.item.pretext, type: type, label: label}
    });

    // box closed
    dialogRef.afterClosed().subscribe(result => {
      // set the info from the dialog back to the item
      if(result){
        this.item.pretext = result.pretext;
        this.item.text = result.text;
      }
    });
  }
}
