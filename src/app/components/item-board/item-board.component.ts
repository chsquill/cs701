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

  items: Item[];

  constructor(private provider: ItemProviderService) { }

  ngOnInit() {
    this.col2 = this.provider.getItems();
  }

  col1 = [
   //'1-Get to work',
   //'1-Pick up groceries',
   //'1-Go home'
 ];

  col2 = [
 //   '2-Get up',
 //   '2-Take a shower',
 //   '2-Brush teeth'
  ];
 //
 col3 = [
 //   '3-Get up',
 //   '3-Brush teeth',
 //   '3-Take a shower'
  ];
 //
  col4 = [
 //   '4-Get up',
 //   '4-Brush teeth',
 //   '4-Take a shower'
  ];

 drop(event: CdkDragDrop<string[]>) {
   if (event.previousContainer === event.container) {
     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
   } else {
     transferArrayItem(event.previousContainer.data,
                       event.container.data,
                       event.previousIndex,
                       event.currentIndex);
   }
 }

}
