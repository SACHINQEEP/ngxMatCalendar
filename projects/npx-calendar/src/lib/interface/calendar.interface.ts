

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
  attendees: Array<{ name: string; image: string }>;
  location: string;
  locationLink: string;
  category: string;
  categoryColor?: string;
}


export interface CalendarThemes {
  show_header: boolean;
  header_style?: string;
  show_arrow: boolean;
  arrow_style?: string;
  show_month_picker: boolean;
  month_picker_style?: string;
  show_calendar_view_filter: boolean;
  calendar_view_filter_style?: string;
  current_Day_style?: string;
}
