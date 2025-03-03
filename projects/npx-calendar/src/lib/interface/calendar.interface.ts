

export interface CalendarEvent {
  month: number;
  list: CalendarEventList[];
}

interface CalendarEventList {
  day: number;
  events: Array<CalendarEventDetails>;
}

interface CalendarEventDetails {
  title: string;
  time: string;
}
