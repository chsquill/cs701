import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../services/item';
import { ItemProviderService } from '../../services/item-provider.service';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {

  constructor(private provider: ItemProviderService) { }

  @Input() id: number;
  @Input() name: string;
  @Input() x: number;
  @Input() y: number;

  dragPosition = { x: 0, y: 0 };

  ngOnInit() {

    //this.dragPosition = {x: this.dragPosition.x + this.x, y: this.dragPosition.y + this.y};
    //this.dragPosition = { x: this.x, y: this.y };

    console.log("ZZZZZ " + this.x + ":" + this.y);

    this.moveItem(+this.x, +this.y);

    console.log("QQQQQ " + this.dragPosition.x + ":" + this.dragPosition.y);
  }

  moveItem(newX: number, newY: number) {

    console.log("Moving: " + newX + ":" + newY);

    let xPrime: number = +this.dragPosition.x + newX;
    let yPrime: number = +this.dragPosition.y + newY;

    console.log("!!!!! " + xPrime + ":" + yPrime);

    this.dragPosition = { x: xPrime, y: yPrime };

    console.log("##### " + this.dragPosition.x + ":" + this.dragPosition.y);

    //this.provider.deleteItem(this.id);
  }

  deleteItem() {
    this.provider.deleteItem(this.id);
  }

  onDragEnded(event) {

    //let element = event.source.getRootElement();
    //let boundingClientRect = element.getBoundingClientRect();

    //console.log("BB:" + boundingClientRect.x + ":" + boundingClientRect.y);

    //console.log("Offset:" + element.offsetLeft + ":" + element.offsetTop);

    //let parentPosition = this.getPosition(element);
    //console.log('x: ' + (boundingClientRect.x - parentPosition.left), 'y: ' + (boundingClientRect.y - parentPosition.top));
  }

  // getPosition(){
  //   return 'style="position: absolute; left:' this.x + 'px; top:' + this.y + 'px';
  // }

  // getPosition(el) {
  //   let x = 0;
  //   let y = 0;
  //   while(el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
  //     x += el.offsetLeft - el.scrollLeft;
  //     y += el.offsetTop - el.scrollTop;
  //     el = el.offsetParent;
  //   }
  //   return { top: y, left: x };
  // }

}
