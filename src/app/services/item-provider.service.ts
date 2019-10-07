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

  	let maxId: number;

  	if (items && items.length > 0) {
  		maxId = items[items.length - 1].id;
  	} else {
  		maxId = 0;
  	}

  	item.id = maxId + 1;
  	items.push(item);
  }

  // delete an item by id
  deleteItem(index: number) {

    let items:Item[] = this.getItems();

    // find the index of friend to delete by id
    //let index: number = items.findIndex(
    //    f => {return (f.id == id)});

    console.log(index);

    items.splice(index, 1);
  }

}
