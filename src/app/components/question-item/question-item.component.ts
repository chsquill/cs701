import { Component, OnInit } from '@angular/core';
import { ItemProviderService } from '../../services/item-provider.service';
import { MatDialog } from '@angular/material/dialog';
import { BaseItemComponent } from '../core/base-item.component';

// represents a question item that can be added to board
@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.css']
})
export class QuestionItemComponent extends BaseItemComponent implements OnInit {

  constructor(public provider: ItemProviderService, public dialog: MatDialog) {
      super(provider, dialog);
  }

  // toggle to show question or answer
  answer: boolean;

  ngOnInit() {
    this.answer = false; // default to false
  }

  // toggles the card
  flip() {
    this.answer = !this.answer;
  }
}
