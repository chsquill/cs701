import { Injectable } from '@angular/core';
import { Item } from './item';
import { Column } from './column';
import { COLS } from './mock-data';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ItemProviderService {

  url: string = 'https://api.jsonbin.io/b/5d9e8d9f805fbf176eba8b79';

  columnData: Column[] = [
    {
      "name" : "col1",
      "items": [{"id": 123,
       "type": "NOTE",
       "text": "Pick up milk",
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
       "pretext": "What are Directives used for?",
       "text": "Modifing DOM elements"
     },{"id": 222,
      "type": "CLOCK",
      "text": "gmt",
      "pretext": ""
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
     }]
    }
  ];

  constructor(private http: HttpClient) { }

  values(data: Column[]){
      //this.columnData = data;
      //console.log(this.columnData);
  }

  initItems() {

    if(this.columnData){
      return;
    }

    // http call here
    //this.columnData = COLS;

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

  getItems(col: string): Item[] {

    this.initItems();

    let column: any = this.columnData.find(
        f => {return (f.name == col)});

    return column.items;
  }

  // adds an item
  addItem(item: Item) {

    let column: any = this.columnData.find(
        f => {return (f.items.length < 4)});

    let items:Item[] = column.items;

    item.id = Math.round(Math.random() * 1000);

  	column.items.push(item);
  }

  // delete an item by id
  deleteItem(id: number) {

    for (let entry of this.columnData) {
      let items:Item[] = entry.items;
      let index: number = items.findIndex(
           i => {return (i.id == id)});
      if(index > -1){
       items.splice(index, 1);
      }
    }
  }

  saveState() {

    console.log("TODOx - Save State : " + JSON.stringify(this.columnData));

    const httpOptions = {
      headers: new HttpHeaders({
        'secret-key':   '$2b$10$lGkQ1HjfOy7t1BIcSW6WOOtTyY1p5GklVupfCEgIClNjmwI/IFF1W',
        'Content-Type': 'application/json'
      })
    };

    console.log("TODO - Save State : " + JSON.stringify(this.columnData));

    this.http.put(this.url, JSON.stringify(this.columnData), httpOptions).subscribe(
    data => console.log(data),
    error => console.error('There was an error!', error));

    //console.log("TODO - Save State : " + JSON.stringify(COLS));
    //$2b$10$lGkQ1HjfOy7t1BIcSW6WOOtTyY1p5GklVupfCEgIClNjmwI/IFF1W
    //https://jsonbin.io/
  }

}
