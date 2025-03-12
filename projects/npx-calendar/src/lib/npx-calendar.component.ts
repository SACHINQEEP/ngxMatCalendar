import { Component, Input } from '@angular/core';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarEvent, CalendarThemes } from './interface/calendar.interface';

@Component({
  selector: 'npx-calendar',
  imports: [CalendarComponent],
  template: `
   <lib-calendar [calendar_events]="events" [calendar_themes]="options"></lib-calendar>
  `,
  styles: ``
})
export class NpxCalendarComponent {
  @Input() public events: CalendarEvent[] = [];
  @Input() public options: CalendarThemes = {
    show_header: true,
    show_arrow: true,
    show_month_picker: true,
    show_calendar_view_filter: true
  };
}
