import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCameraOutlineComponent } from './video-camera-outline.component';

describe('VideoCameraOutlineComponent', () => {
  let component: VideoCameraOutlineComponent;
  let fixture: ComponentFixture<VideoCameraOutlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoCameraOutlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCameraOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
