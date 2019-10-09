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

  animal: string;

  constructor(private provider: ItemProviderService, public dialog: MatDialog) { }

  ngOnInit() {}

  addNote(text: string) {
    let note: Item = new Item();
    note.name = text;
    this.provider.addItem(note);
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(ItemEditDialogComponent, {
      width: '250px',
      data: {animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        this.animal = result;
        this.addNote(this.animal);
      }
    });
  }

}
