import { Injectable } from '@angular/core';
import { Item } from './item';
import { Column } from './column';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemProviderService {

  // url to save the board state to
  url: string = 'https://api.jsonbin.io/b/5d9e8d9f805fbf176eba8b79';

  // TODO - temp data
  columnData: Column[] = [
    {
      "name" : "col1",
      "items": [{"id": 123,
       "type": "NOTE",
       "text": "Sunday - CS701 Project presentation",
       "pretext": ""
     },{"id": 213,
      "type": "IMAGES",
      "text": "https://media.giphy.com/media/o9ngTPVYW4qo8/giphy.gif",
      "pretext": ""
    }]
    },{
      "name" : "col2",
      "items": [{"id": 345,
       "type": "QUESTION",
       "pretext": "What is an Angular Directive?",
       "text": "A directive is a function that executes whenever the Angular compiler finds it in the DOM"
     },{"id": 222,
      "type": "CLOCK",
      "text": "gmt",
      "pretext": ""
    },{"id": 355,
     "type": "QUESTION",
     "pretext": "Name three kinds of directives in Angular",
     "text": "Components, Structural and Attribute directives"
   }]
    },{
      "name" : "col3",
      "items": [{"id": 567,
       "type": "CLOCK",
       "text": "est",
       "pretext": ""
     }]
    },{
      "name" : "col4",
      "items": [{"id": 789,
       "type": "IMAGES",
       "text": "https://images.pexels.com/photos/1730760/pexels-photo-1730760.jpeg",
       "pretext": ""
     },{"id": 133,
      "type": "NOTE",
      "text": "Pick up milk",
      "pretext": ""
    }]
    }
  ];

  // http client needed for remote call
  constructor(private http: HttpClient) {}

  //
  values(data: Column[]){
  }

  // initialize the items to the screen
  initItems() {
    // TODO REMOVE ME
    if(this.columnData){
      return;
    }

    // http call here
    const httpOptions = {
      headers: new HttpHeaders({
        'secret-key':   '$2b$10$lGkQ1HjfOy7t1BIcSW6WOOtTyY1p5GklVupfCEgIClNjmwI/IFF1W',
        'Content-Type': 'application/json'
      })
    };

    this.http.get<Column[]>(this.url + '/latest', httpOptions).subscribe(
    data => this.values(data),
    error => console.error('There was an error!', error));
  }

  // returns the items for the board for a single column
  getItems(col: string): Item[] {

    //  init the items if needed
    this.initItems();

    // search the array for column
    let column: any = this.columnData.find(
        f => {return (f.name == col)});

    // return the columns items
    return column.items;
  }

  // adds an item to the board
  addItem(item: Item) {

    // pick a column to add to
    let column: any = this.columnData.find(
        f => {return (f.items.length < 4)});

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
