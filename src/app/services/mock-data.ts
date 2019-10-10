import { Column, Item } from './item';

 export const COLS: Column[] = [
   {
     "name" : "col1",
     "items": [{"id": 123,
      "type": "NOTE",
      "text": "Pick up milk",
      "text2": ""
    }]
   },{
     "name" : "col2",
     "items": [{"id": 345,
      "type": "QUESTION",
      "text": "What are Directives used for?",
      "text2": "Modifing DOM elements"
    }]
   },{
     "name" : "col3",
     "items": [{"id": 567,
      "type": "CLOCK",
      "text": "Study",
      "text2": ""
    }]
   },{
     "name" : "col4",
     "items": [{"id": 789,
      "type": "NOTE",
      "text": "Study",
      "text2": ""
    }]
   }
 ];
