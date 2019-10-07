import { Component, OnInit } from '@angular/core';
import { Item } from '../../services/item';
import { ItemProviderService } from '../../services/item-provider.service';

@Component({
  selector: 'app-item-selector',
  templateUrl: './item-selector.component.html',
  styleUrls: ['./item-selector.component.css']
})
export class ItemSelectorComponent implements OnInit {

  constructor(private provider: ItemProviderService) { }

  ngOnInit() {
  }

  addNote() {
    let note: Item = new Item();
    this.provider.addItem(note);
  }

}
