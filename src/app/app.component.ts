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
}
