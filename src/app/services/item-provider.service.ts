import { Injectable } from '@angular/core';
import { Item } from './item';
import { ITEMS } from './mock-data';


@Injectable({
  providedIn: 'root'
})
export class ItemProviderService {

  constructor() { }

  getItems(): Item[] {
  	return ITEMS;
  }

  // adds an item
  addItem(item: Item) {

    let items:Item[] = this.getItems();

    item.id = Math.round(Math.random() * 1000);

  	items.push(item);
  }

  // delete an item by id
  deleteItem(id: number) {

    let items:Item[] = this.getItems();

    // find the index of friend to delete by id
    let index: number = items.findIndex(
        f => {return (f.id == id)});

    console.log(index);

    items.splice(index, 1);
  }

}
