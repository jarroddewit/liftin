import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggerMainComponent } from './logger-main.component';

describe('LoggerMainComponent', () => {
  let component: LoggerMainComponent;
  let fixture: ComponentFixture<LoggerMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoggerMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
