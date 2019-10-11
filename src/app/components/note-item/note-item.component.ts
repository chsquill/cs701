import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../services/item';
import { ItemProviderService } from '../../services/item-provider.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../../services/DialogData';
import { ItemEditDialogComponent } from '../item-edit-dialog/item-edit-dialog.component';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {

  constructor(private provider: ItemProviderService, public dialog: MatDialog) { }

  @Input() item: Item;

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
      data: {text: this.item.text, type: "NOTE"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){

        console.log(result);

        this.item.text = result.text;
        //this.addItem(this.animal, "NOTE");
      }
    });
  }

  //moveItem(newX: number, newY: number) {

    //console.log("Moving: " + newX + ":" + newY);

    //let xPrime: number = +this.dragPosition.x + newX;
    //let yPrime: number = +this.dragPosition.y + newY;

    //console.log("!!!!! " + xPrime + ":" + yPrime);

    //this.dragPosition = { x: xPrime, y: yPrime };

    //console.log("##### " + this.dragPosition.x + ":" + this.dragPosition.y);

    //this.provider.deleteItem(this.id);
//  }



  //onDragEnded(event) {

  //  console.log("BB:");

    //let element = event.source.getRootElement();
    //let boundingClientRect = element.getBoundingClientRect();

    ///console.log("BB:" + boundingClientRect.x + ":" + boundingClientRect.y);

    //let xPrime: number = +boundingClientRect.x;
    //let yPrime: number = +boundingClientRect.y;

    //console.log("!!!!! " + xPrime + ":" + yPrime);

    //this.dragPosition = { x: xPrime, y: yPrime };

    //console.log("Offset:" + element.offsetLeft + ":" + element.offsetTop);

    //let parentPosition = this.getPosition(element);
    //console.log('x: ' + (boundingClientRect.x - parentPosition.left), 'y: ' + (boundingClientRect.y - parentPosition.top));
//  }

  // getPosition(){
  //   return 'style="position: absolute; left:' this.x + 'px; top:' + this.y + 'px';
  // }

  // getPosition(el) {
  //   let x = 0;
  //   let y = 0;
  //   while(el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
  //     x += el.offsetLeft - el.scrollLeft;
  //     y += el.offsetTop - el.scrollTop;
  //     el = el.offsetParent;
  //   }
  //   return { top: y, left: x };
  // }



}
