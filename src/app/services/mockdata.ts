import { Column } from './column';

 export const MOCKDATA: Column[] = [
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
