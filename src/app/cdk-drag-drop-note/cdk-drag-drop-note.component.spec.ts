import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkDragDropNoteComponent } from './cdk-drag-drop-note.component';

describe('CdkDragDropNoteComponent', () => {
  let component: CdkDragDropNoteComponent;
  let fixture: ComponentFixture<CdkDragDropNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdkDragDropNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkDragDropNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
