import { Component } from '@angular/core';
import { NpxCalendarComponent } from "npx-calendar";
import events from './event.json';

@Component({
  selector: 'app-root',
  imports: [NpxCalendarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngxMatCalendar';
  events = events
  calendar_themes = {
    show_header: true,
    show_arrow: true,
    show_month_picker: true,
    show_calendar_view_filter: true,
  }
}
