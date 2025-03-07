

export interface CalendarEvent {
  month: number;
  list: CalendarEventList[];
}

export interface CalendarEventList {
  day: number;
  events: Array<CalendarEventDetails>;
}

export interface CalendarEventDetails {
  title: string;
  time: string;
  description: string;
  start_time: string;
  end_time: string;
  style: string;
}
