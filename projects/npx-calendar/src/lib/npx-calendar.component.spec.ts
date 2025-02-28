import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpxCalendarComponent } from './npx-calendar.component';

describe('NpxCalendarComponent', () => {
  let component: NpxCalendarComponent;
  let fixture: ComponentFixture<NpxCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NpxCalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NpxCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
