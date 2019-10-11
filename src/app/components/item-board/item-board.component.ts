import { Component, OnInit } from '@angular/core';
import { Item } from '../../services/item';
import { ItemProviderService } from '../../services/item-provider.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-item-board',
  templateUrl: './item-board.component.html',
  styleUrls: ['./item-board.component.css']
})
export class ItemBoardComponent implements OnInit {

  col1: Item[];
  col2: Item[];
  col3: Item[];
  col4: Item[];

  constructor(private provider: ItemProviderService) { }

  isType(item: Item, type: string) {
    return item.type == type;
  }

  ngOnInit() {
    this.col1 = this.provider.getItems("col1");
    this.col2 = this.provider.getItems("col2");
    this.col3 = this.provider.getItems("col3");
    this.col4 = this.provider.getItems("col4");
  }

 drop(event: CdkDragDrop<string[]>) {
   //console.log(event);
   if (event.previousContainer === event.container) {
     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
   } else {
     transferArrayItem(event.previousContainer.data,
                       event.container.data,
                       event.previousIndex,
                       event.currentIndex);
   }

   // save the state to remote
   //this.provider.saveState();
 }

}
