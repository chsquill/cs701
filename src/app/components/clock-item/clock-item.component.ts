import { Component } from '@angular/core';
import { ItemProviderService } from '../../services/item-provider.service';
import { MatDialog } from '@angular/material/dialog';
import { BaseItemComponent } from '../core/base-item.component';

@Component({
  selector: 'app-clock-item',
  templateUrl: './clock-item.component.html',
  styleUrls: ['./clock-item.component.css']
})
export class ClockItemComponent extends BaseItemComponent {

  constructor(public provider: ItemProviderService, public dialog: MatDialog) {
    super(provider, dialog);
  }
}
