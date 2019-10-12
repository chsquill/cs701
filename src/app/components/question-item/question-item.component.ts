import { Component, OnInit } from '@angular/core';
import { ItemProviderService } from '../../services/item-provider.service';
import { MatDialog } from '@angular/material/dialog';
import { BaseItemComponent } from '../core/base-item.component';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.css']
})
export class QuestionItemComponent extends BaseItemComponent implements OnInit {

  constructor(public provider: ItemProviderService, public dialog: MatDialog) {
      super(provider, dialog);
  }

  answer: boolean;

  ngOnInit() {
    this.answer = false;
  }

  flip() {
    this.answer = !this.answer;
  }
}
