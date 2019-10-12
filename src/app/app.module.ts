import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ItemSelectorComponent } from './components/item-selector/item-selector.component';
import { NoteItemComponent } from './components/note-item/note-item.component';
import { ItemBoardComponent } from './components/item-board/item-board.component';
import { ItemEditDialogComponent } from './components/item-edit-dialog/item-edit-dialog.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { QuestionItemComponent } from './components/question-item/question-item.component';
import { ClockItemComponent } from './components/clock-item/clock-item.component';
import { HttpClientModule } from '@angular/common/http';
import { VideoItemComponent } from './components/video-item/video-item.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemSelectorComponent,
    NoteItemComponent,
    ItemBoardComponent,
    ItemEditDialogComponent,
    QuestionItemComponent,
    ClockItemComponent,
    VideoItemComponent,
    HeaderComponent
  ], entryComponents: [
    ItemEditDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false} }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
