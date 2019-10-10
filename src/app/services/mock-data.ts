import { Column, Item } from './item';

 export const COLS: Column[] = [
   {
     "name" : "col1",
     "items": [{"id": 123,
      "type": "NOTE",
      "text": "Pick up milk",
      "pretext": ""
    }]
   },{
     "name" : "col2",
     "items": [{"id": 345,
      "type": "QUESTION",
      "pretext": "What are Directives used for?",
      "text": "Modifing DOM elements"
    }]
   },{
     "name" : "col3",
     "items": [{"id": 567,
      "type": "CLOCK",
      "text": "Study",
      "pretext": ""
    }]
   },{
     "name" : "col4",
     "items": [{"id": 789,
      "type": "NOTE",
      "text": "Study",
      "pretext": ""
    }]
   }
 ];
