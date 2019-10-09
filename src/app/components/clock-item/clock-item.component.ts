import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../services/item';
import { ItemProviderService } from '../../services/item-provider.service';

@Component({
  selector: 'app-clock-item',
  templateUrl: './clock-item.component.html',
  styleUrls: ['./clock-item.component.css']
})
export class ClockItemComponent implements OnInit {

  @Input() item: Item;

  constructor(private provider: ItemProviderService) { }

  ngOnInit() {
  }

  deleteItem() {
    console.log("deleting note:" + this.item.id);
    this.provider.deleteItem(this.item.id);
  }

}
