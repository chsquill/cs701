import { Component } from '@angular/core';
import { ItemProviderService } from '../../services/item-provider.service';
import { MatDialog } from '@angular/material/dialog';
import { BaseItemComponent } from '../core/base-item.component';

// represents a note item that can be added to board
@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent extends BaseItemComponent {

  constructor(public provider: ItemProviderService, public dialog: MatDialog) {
    super(provider, dialog);
  }
}
