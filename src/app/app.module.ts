import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { ItemSelectorComponent } from './components/item-selector/item-selector.component';
import { NoteItemComponent } from './components/note-item/note-item.component';
import { ItemBoardComponent } from './components/item-board/item-board.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemSelectorComponent,
    NoteItemComponent,
    ItemBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
