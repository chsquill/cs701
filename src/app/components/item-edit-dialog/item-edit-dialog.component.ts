import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../services/DialogData';

// edit dialog component
@Component({
  selector: 'app-item-edit-dialog',
  templateUrl: './item-edit-dialog.component.html',
  styleUrls: ['./item-edit-dialog.component.css']
})
export class ItemEditDialogComponent implements OnInit {

  // the MAT_DIALOG_DATA to pass data to/from dialog
  constructor(
      public dialogRef: MatDialogRef<ItemEditDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

      ngOnInit() {
      }

    // cancel the dialog
    onCancelClick(): void {
      console.log(this.data);
      this.dialogRef.close();
    }

}
