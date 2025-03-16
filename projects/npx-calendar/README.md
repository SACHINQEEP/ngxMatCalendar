# NpxCalendar

## 🚀 Introduction

`npx-calendar` is a powerful **Angular calendar component** that helps developers build **event calendars**, **date pickers**, and **schedulers** with ease.

## 📖 Table of Contents

- [NpxCalendar](#npxcalendar)
  - [🚀 Introduction](#-introduction)
  - [📖 Table of Contents](#-table-of-contents)
  - [📦 Installation](#-installation)
  - [🚀 Usage](#-usage)
  - [⚙️ Configuration](#️-configuration)
  - [📅 Events](#-events)
  - [🎨 Styles](#-styles)
  - [🔥 Examples](#-examples)
  - [📜 API](#-api)
  - [📌 Changelog](#-changelog)
  - [📜 License](#-license)
  - [🤝 Contributing](#-contributing)
  - [Report Issues](#report-issues)
  - [✨ Authors](#-authors)
  - [🙌 Acknowledgments](#-acknowledgments)

## 📦 Installation

To install the `npx-calendar` package, run the following command:

```sh
npm install npx-calendar
```

## 🚀 Usage

Import the `NpxCalendarComponent` in your Angular module:

```typescript
import { NgModule } from "@angular/core";
import { NpxCalendarComponent } from "npx-calendar";

@NgModule({
  declarations: [AppComponent],
  imports: [NpxCalendarComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Use the `npx-calendar` component in your template:

```html
<npx-calendar [events]="events" [options]="options"></npx-calendar>
```

## ⚙️ Configuration

The `npx-calendar` component supports the following options:

- **events**: Array of events to display with properties:
  - `title`: Event title
  - `time`: Event time
  - `description`: Brief event description
  - `start_time`: Event start time
  - `end_time`: Event end time
  - `style`: Custom CSS style for the event
  - `attendees`: Array of attendees to display with properties:
    - `name`: Attendee name
    - `image`: Attendee image URL
  - `location`: Event location
  - `locationLink`: Event location link
  - `category`: Category type of event
  - `categoryColor`: Category colour for the event
- **month**: Month to display (0-11, January-December)
- **year**: Year to display

## 📅 Events

The component emits the following events:

- `dayClick`: Triggered when a day is clicked
- `eventClick`: Triggered when an event is clicked
- `monthChange`: Triggered when the month changes
- `yearChange`: Triggered when the year changes

## 🎨 Styles

Default CSS classes for customization:

- `npx-calendar`: Main container
- `npx-calendar-header`: Calendar header
- `npx-calendar-body`: Calendar body
- `npx-calendar-day`: Individual day
- `npx-calendar-event`: Event display

## 🔥 Examples

Usage example:

```html
<npx-calendar [events]="events" [options]="options"></npx-calendar>
```

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-example",
  template: "./example.component.html",
})
export class ExampleComponent {
  events = [
    {
      month: 3,
      list: [
        {
          day: 1,
          events: [
            {
              time: "11:00 AM",
              title: "TPI Daily Meeting",
              start_time: "11:00 AM",
              end_time: "12:00 PM",
              description: "TPI Daily Meeting",
              style: "background-color: #001B4F; color: #fff;",
              attendees: [
                {
                  name: "John Doe",
                  image: "https://randomuser.me/api/portraits/men/1.jpg",
                },
              ],
              location: "india",
              locationLink: "https://www.google.com/maps/search/india",
              category: "General",
              categoryColor: "#1abc9c",
            },
            {
              time: "2:00 PM",
              title: "Angular Meeting",
              start_time: "2:00 PM",
              end_time: "3:00 PM",
              description: "Angular Meeting",
              style: "background-color: #1abc9c; color: #fff;",
              attendees: [
                {
                  name: "John Doe",
                  image: "https://randomuser.me/api/portraits/men/1.jpg",
                },
              ],
              location: "india",
              locationLink: "https://www.google.com/maps/search/india",
              category: "General",
              categoryColor: "#1abc9c",
            },
            {
              time: "4:00 PM",
              title: "React Meeting",
              start_time: "4:00 PM",
              end_time: "5:00 PM",
              description: "React Meeting",
              style: "background-color: #1abc9c; color: #fff;",
              attendees: [
                {
                  name: "John Doe",
                  image: "https://randomuser.me/api/portraits/men/1.jpg",
                },
              ],
              location: "india",
              locationLink: "https://www.google.com/maps/search/india",
              category: "General",
              categoryColor: "#1abc9c",
            },
          ],
        },
        {
          day: 2,
          events: [
            {
              time: "11:00 AM",
              title: "TPI Daily Meeting",
              start_time: "11:00 AM",
              end_time: "12:00 PM",
              description: "TPI Daily Meeting",
              style: "background-color: #1abc9c; color: #fff;",
              attendees: [
                {
                  name: "John Doe",
                  image: "https://randomuser.me/api/portraits/men/1.jpg",
                },
              ],
              location: "india",
              locationLink: "https://www.google.com/maps/search/india",
              category: "General",
              categoryColor: "#1abc9c",
            },
          ],
        },
        {
          day: 3,
          events: [
            {
              time: "11:00 AM",
              title: "TPI Daily standup call",
              start_time: "11:00 AM",
              end_time: "12:00 PM",
              description: "TPI Daily Meeting",
              style: "background-color: #001B4F; color: #fff;",
              attendees: [
                {
                  name: "John Doe",
                  image: "https://randomuser.me/api/portraits/men/1.jpg",
                },
              ],
              location: "india",
              locationLink: "https://www.google.com/maps/search/india",
              category: "General",
              categoryColor: "#1abc9c",
            },
            {
              time: "2:00 PM",
              title: "Angular Meeting",
              start_time: "2:00 PM",
              end_time: "3:00 PM",
              description: "Angular Meeting",
              style: "background-color: #1abc9c; color: #fff;",
              attendees: [
                {
                  name: "John Doe",
                  image: "https://randomuser.me/api/portraits/men/1.jpg",
                },
              ],
              location: "india",
              locationLink: "https://www.google.com/maps/search/india",
              category: "General",
              categoryColor: "#1abc9c",
            },
            {
              time: "4:00 PM",
              title: "React Meeting",
              start_time: "4:00 PM",
              end_time: "5:00 PM",
              description: "React Meeting",
              style: "background-color: #001B4F; color: #fff;",
              attendees: [
                {
                  name: "John Doe",
                  image: "https://randomuser.me/api/portraits/men/1.jpg",
                },
              ],
              location: "india",
              locationLink: "https://www.google.com/maps/search/india",
              category: "General",
              categoryColor: "#1abc9c",
            },
          ],
        },
      ],
    },
  ];

  options = {
    show_header: true,
    header_style: "background-color: #f0f0f0;",
    show_arrow: true,
    arrow_style: "color: #333;",
    show_month_picker: true,
    month_picker_style: "background-color: #f0f0f0;",
    show_calendar_view_filter: true,
    calendar_view_filter_style: "background-color: #f0f0f0;",
    current_day_style: "background-color: #ccc;",
  };
}
```

## 📜 API

The `npx-calendar` component provides:

- `NpxCalendarComponent`: Main calendar component
- `NpxCalendarService`: Calendar-related functionalities
- `CalendarEvent`: Interface for a calendar event
- `CalendarEventList`: Interface for a list of calendar events

## 📌 Changelog

- **0.0.1**: Initial release
- **0.0.2**: Added event click support
- **0.0.3**: Added event title, time, description, style, attendees, location, location link, category, and category color support
- **0.0.4**: Added Week Calendar UI and Functinality

## 📜 License

This project is licensed under the MIT License.

## 🤝 Contributing

We welcome contributions! Please refer to [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## Report Issues

Found a bug? 🐛 Please open an issue [here](https://github.com/SACHINQEEP//issues).

## ✨ Authors

Created by the **Sachin Patel**.

## 🙌 Acknowledgments

Special thanks to all contributors and supporters of `npx-calendar`. 🎉
