import { Injectable } from '@angular/core';
import { Column, Item } from './item';
import { COLS } from './mock-data';


@Injectable({
  providedIn: 'root'
})
export class ItemProviderService {

  constructor() { }

  getItems(col: string): Item[] {

    let column: any = COLS.find(
        f => {return (f.name == col)});

    return column.items;
  }

  // adds an item
  addItem(item: Item) {

    let column: any = COLS.find(
        f => {return (f.items.length < 4)});

    let items:Item[] = column.items;

    item.id = Math.round(Math.random() * 1000);

  	column.items.push(item);
  }

  // delete an item by id
  deleteItem(id: number) {

    for (let entry of COLS) {
      let items:Item[] = entry.items;
      let index: number = items.findIndex(
           i => {return (i.id == id)});
      if(index > -1){
       items.splice(index, 1);
      }
    }
  }

  saveState() {
    console.log("TODO - Save State : " + COLS);
  }

}
