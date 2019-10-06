import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkDragDropNoteComponent } from './cdk-drag-drop-note/cdk-drag-drop-note.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { ItemSelectorComponent } from './components/item-selector/item-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    CdkDragDropNoteComponent,
    ItemSelectorComponent
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
