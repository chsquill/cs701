import { Component } from '@angular/core';
import { ItemProviderService } from '../../services/item-provider.service';
import { MatDialog } from '@angular/material/dialog';
import { BaseItemComponent } from '../core/base-item.component';

// image item to be added to board
@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.css']
})
export class ImageItemComponent extends BaseItemComponent {

  constructor(public provider: ItemProviderService, public dialog: MatDialog) {
      super(provider, dialog);
  }
}
