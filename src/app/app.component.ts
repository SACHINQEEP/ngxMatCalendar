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
}
