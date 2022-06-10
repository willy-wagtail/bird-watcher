import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCircleOutlineComponent } from './user-circle-outline.component';

describe('UserCircleOutlineComponent', () => {
  let component: UserCircleOutlineComponent;
  let fixture: ComponentFixture<UserCircleOutlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCircleOutlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCircleOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
