import { Injectable } from '@angular/core';
import { Item } from './item';
import { Column } from './column';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MOCKDATA } from './mockdata';

@Injectable({
  providedIn: 'root'
})
export class ItemProviderService {

  // url to save the board state to
  url: string = 'https://api.jsonbin.io/b/5d9e8d9f805fbf176eba8b79';

  // data for board
  columnData: Column[] = [
    {
      "name" : "col1",
      "items": []
    },{
      "name" : "col2",
      "items": []
    },{
      "name" : "col3",
      "items": []
    },{
      "name" : "col4",
      "items": []
    }
  ];

  // http client needed for remote call
  constructor(private http: HttpClient) {
    this.initItems();
  }

  // load items from remote site
  loadItemsFromSaved(data: Column[]){

    // nested loop to load the items
    for (let column of data) {
      for(let item of column.items){
         this.addItem(item, column);
      }
    }
  }

  // initialize the items to the screen
  initItems() {

    // http call here
    const httpOptions = {
      headers: new HttpHeaders({
        'secret-key':   '$2b$10$lGkQ1HjfOy7t1BIcSW6WOOtTyY1p5GklVupfCEgIClNjmwI/IFF1W',
        'Content-Type': 'application/json'
      })
    };

    this.http.get<Column[]>(this.url + '/latest', httpOptions).subscribe(
    data => this.loadItemsFromSaved(data),
    error => this.loadItemsFromSaved(MOCKDATA));
  }

  // returns the items for the board for a single column
  getItems(col: string): Item[] {

    // search the array for column
    let column: any = this.columnData.find(
        f => {return (f.name == col)});

    // return the columns items
    return column.items;
  }

  // adds an item to the board
  addItem(item: Item, col?: Column) {

    let column: any;

    // pick a column to add to
    if(col){
      column = this.columnData.find(
        f => {return (f.name == col.name)});
    }else{
      column = this.columnData.find(
        f => {return (f.items.length < 4)});
    }

    let items:Item[] = column.items;

    // generate a unique id
    item.id = Math.round(Math.random() * 1000);

    // add the item to the column
  	column.items.push(item);
  }

  // delete an item by id
  deleteItem(id: number) {

    // find the item looking thru all the columns items
    for (let entry of this.columnData) {
      let items:Item[] = entry.items;
      let index: number = items.findIndex(
           i => {return (i.id == id)});
      if(index > -1){
       items.splice(index, 1);
      }
    }
  }

  // save the state off to remote json site
  saveState() {

    console.log("Save State : " + JSON.stringify(this.columnData));

    // create header for remote call with token id
    const httpOptions = {
      headers: new HttpHeaders({
        'secret-key':   '$2b$10$lGkQ1HjfOy7t1BIcSW6WOOtTyY1p5GklVupfCEgIClNjmwI/IFF1W',
        'Content-Type': 'application/json'
      })
    };

    // make remote call to save state
    this.http.put(this.url, JSON.stringify(this.columnData), httpOptions).subscribe(
    data => console.log(data),
    error => console.error('There was an error!', error));
  }
}
