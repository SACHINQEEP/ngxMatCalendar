

export interface CalendarEvent {
  day: number;
  events: CalendarEventDetails[];
}

interface CalendarEventDetails {
  title: string;
  time: string;
}
