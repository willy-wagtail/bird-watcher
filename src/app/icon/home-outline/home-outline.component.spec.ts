import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOutlineComponent } from './home-outline.component';

describe('HomeOutlineComponent', () => {
  let component: HomeOutlineComponent;
  let fixture: ComponentFixture<HomeOutlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeOutlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
