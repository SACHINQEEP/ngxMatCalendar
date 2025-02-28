import { Component } from '@angular/core';
import { CalendarComponent } from './components/calendar/calendar.component';

@Component({
  selector: 'lib-npx-calendar',
  imports: [CalendarComponent],
  template: `
   <lib-calendar></lib-calendar>
  `,
  styles: ``
})
export class NpxCalendarComponent {

}
