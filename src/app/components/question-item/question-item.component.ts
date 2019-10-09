import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../services/item';
import { ItemProviderService } from '../../services/item-provider.service';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.css']
})
export class QuestionItemComponent implements OnInit {

  constructor(private provider: ItemProviderService) { }

  @Input() item: Item;
  @Input() id: number;
  @Input() name: string;
  @Input() x: number;
  @Input() y: number;
  @Input() text: string;
  @Input() text2: string;

  ngOnInit() {
  }

  deleteItem() {
    console.log("deleting question:" + this.item.id);
    this.provider.deleteItem(this.item.id);
  }

  onDragEnded(event) {
    console.log("BB:");
  }

}
