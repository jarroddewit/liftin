import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLiftinComponent } from './app-liftin.component';

describe('AppLiftinComponent', () => {
  let component: AppLiftinComponent;
  let fixture: ComponentFixture<AppLiftinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppLiftinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppLiftinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
