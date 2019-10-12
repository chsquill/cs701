import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageItemComponent } from './image-item.component';

describe('ImageItemComponent', () => {
  let component: VideoItemComponent;
  let fixture: ComponentFixture<VideoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
