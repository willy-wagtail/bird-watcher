import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdcamsComponent } from './birdcams.component';

describe('BirdcamsComponent', () => {
  let component: BirdcamsComponent;
  let fixture: ComponentFixture<BirdcamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirdcamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdcamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
