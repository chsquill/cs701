import { Component, OnInit } from '@angular/core';
import { Item } from '../../services/item';
import { ItemProviderService } from '../../services/item-provider.service';

@Component({
  selector: 'app-item-board',
  templateUrl: './item-board.component.html',
  styleUrls: ['./item-board.component.css']
})
export class ItemBoardComponent implements OnInit {

  items: Item[];

  constructor(private provider: ItemProviderService) { }

  ngOnInit() {
    this.items = this.provider.getItems();
  }

}
