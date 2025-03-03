import { Component } from '@angular/core';
import { NpxCalendarComponent } from "npx-calendar";

@Component({
  selector: 'app-root',
  imports: [NpxCalendarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngxMatCalendar';
  events = [
    {
      month: 3,
      list: [
        {
          day: 1,
          events: [
            {
              time: '11:00 AM',
              title: 'TPI Daily Meeting'
            },
            {
              time: '11:00 AM',
              title: 'TPI Daily Meeting'
            },
            {
              time: '11:00 AM',
              title: 'TPI Daily Meeting'
            },
            {
              time: '11:00 AM',
              title: 'TPI Daily Meeting'
            }
          ]
        },
        {
          day: 2,
          events: [
            {
              time: '11:00 AM',
              title: 'TPI Daily Meeting'
            }
          ]
        },
        {
          day: 3,
          events: [
            {
              time: '11:00 AM',
              title: 'TPI Daily Meeting'
            },
            {
              time: '11:00 AM',
              title: 'TPI Daily Meeting'
            },
            {
              time: '11:00 AM',
              title: 'TPI Daily Meeting'
            }
          ]
        }
      ]
    }
  ];
}
