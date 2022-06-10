import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyeOutlineComponent } from './eye-outline.component';

describe('EyeOutlineComponent', () => {
  let component: EyeOutlineComponent;
  let fixture: ComponentFixture<EyeOutlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EyeOutlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EyeOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
