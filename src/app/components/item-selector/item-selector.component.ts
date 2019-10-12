import { Component } from '@angular/core';
import { Item } from '../../services/item';
import { ItemProviderService } from '../../services/item-provider.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../../services/DialogData';
import { ItemEditDialogComponent } from '../item-edit-dialog/item-edit-dialog.component';

// item slector on left side - 'nav' 
@Component({
  selector: 'app-item-selector',
  templateUrl: './item-selector.component.html',
  styleUrls: ['./item-selector.component.css']
})
export class ItemSelectorComponent {

  constructor(private provider: ItemProviderService, public dialog: MatDialog) { }

  // adds an item to the board
  addItem(pretext: string, text: string, type: string) {
    let item: Item = new Item();
    item.pretext = pretext;
    item.text = text;
    item.type = type;
    this.provider.addItem(item);
  }

  // opens a blank dialog box for adding item
  openDialog(type: string): void {

    // open dialog
    const dialogRef = this.dialog.open(ItemEditDialogComponent, {
      width: '300px',
      data: {pretext: "", text: "", type: type}
    });

    // called when dialog closes
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        this.addItem(result.pretext, result.text, type);
      }
    });
  }

  // save the state of the board
  save() {
    this.provider.saveState();
  }

}
