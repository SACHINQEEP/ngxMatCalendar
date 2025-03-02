import { Component, Input } from '@angular/core';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarEvent } from './interface/calendar.interface';

@Component({
  selector: 'lib-npx-calendar',
  imports: [CalendarComponent],
  template: `
   <lib-calendar [calendar_events]="events"></lib-calendar>
  `,
  styles: ``
})
export class NpxCalendarComponent {
  @Input() public events: CalendarEvent[] = [];
}
