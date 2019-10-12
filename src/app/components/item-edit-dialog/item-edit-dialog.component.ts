import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../services/DialogData';

@Component({
  selector: 'app-item-edit-dialog',
  templateUrl: './item-edit-dialog.component.html',
  styleUrls: ['./item-edit-dialog.component.css']
})
export class ItemEditDialogComponent implements OnInit {

  constructor(
      public dialogRef: MatDialogRef<ItemEditDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

      ngOnInit() {
      }

    onNoClick(): void {
      console.log(this.data);
      this.dialogRef.close();
    }

}
