import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOutlineComponent } from './user-outline.component';

describe('UserOutlineComponent', () => {
  let component: UserOutlineComponent;
  let fixture: ComponentFixture<UserOutlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserOutlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
