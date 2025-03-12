# NpxCalendar

## 🚀 Introduction

A customizable and feature-rich calendar component for Angular applications.

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
<npx-calendar [events]="events"></npx-calendar>
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
<npx-calendar [events]="events"></npx-calendar>
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
              title: "Event 1",
              time: "10:00 AM",
              description: "This is event 1",
              start_time: "10:00 AM",
              end_time: "11:00 AM",
              style: "background-color: #f0f0f0; color: #333;",
            },
            {
              title: "Event 2",
              time: "2:00 PM",
              description: "This is event 2",
              start_time: "2:00 PM",
              end_time: "3:00 PM",
              style: "background-color: #f0f0f0; color: #333;",
            },
          ],
        },
      ],
    },
  ];
}
```

## 📜 API

The `npx-calendar` component provides:

- `NpxCalendarComponent`: Main calendar component
- `NpxCalendarService`: Calendar-related functionalities
- `CalendarEvent`: Interface for a calendar event
- `CalendarEventList`: Interface for a list of calendar events

## 📌 Changelog

- **1.0.0**: Initial release
- **1.1.0**: Added event click support
- **1.2.0**: Added month/year change support

## 📜 License

This project is licensed under the MIT License.

## 🤝 Contributing

We welcome contributions! Please refer to [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## ✨ Authors

Created by the **Sachin Patel**.

## 🙌 Acknowledgments

Special thanks to all contributors and supporters of `npx-calendar`. 🎉
