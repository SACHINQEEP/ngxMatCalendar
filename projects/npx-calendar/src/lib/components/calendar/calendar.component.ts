import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { CalendarEvent, CalendarEventDetails, CalendarThemes } from '../../interface/calendar.interface';
import { StyleObjectPipe } from '../../pips/style-object.pipe';
import { FilterEventsPipe } from '../../pips/filter-events.pipe';




@Component({
  selector: 'lib-calendar',
  imports: [CommonModule, StyleObjectPipe, FilterEventsPipe],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {

  @ViewChild('popover') popover!: ElementRef;
  isPopoverOpen = false;
  popoverDay: number | null = null;

  public daysOfTheWeek: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  public monthsOfTheYear: string[] = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];
  public hours: string[] = []
  public currentWeekDays: number[] = []
  public years: number[] = []
  public viewOptions: string[] = ["Month", "Work week"];
  public daysInMonth: number[] = [];
  public currentMonth: number = 0;
  public currentYear: number = 0;
  public currentDay: number = 0;
  public currentMonthName: string = '';
  public currentYearName: string = '';
  public currentDate: string = '';
  public firstDayOfWeek: number = 0;
  public isOpen: boolean = false;
  public isMonthPickerOpen: boolean = false;
  public isFilterOpen: boolean = false;
  public selectedView: number = 0;
  public isOffCanvasOpen = false;
  public weekDay: string | null = null;
  public selectedDay: number = 0;
  public selectedDayEvents: CalendarEventDetails[] = [];
  public showYearPicker: boolean = false;
  public selectedEventDetail: CalendarEventDetails = {
    title: '',
    time: '',
    description: '',
    start_time: '',
    end_time: '',
    style: '',
    attendees: [],
    location: '',
    locationLink: '',
    category: '',
    categoryColor: ''
  };

  @Input() public calendar_events: CalendarEvent[] = [];
  @Input() public calendar_themes: CalendarThemes = {
    show_header: true,
    show_arrow: true,
    show_month_picker: true,
    show_calendar_view_filter: true
  }

  constructor(private elementRef: ElementRef) {
    this.selectedEventDetail.categoryColor = '#ff0000';
    this.years = [];

    for (let i = 2020; i <= new Date().getFullYear() + 10; i++) {
      this.years.push(i);
    }
  }

  /**
   * Initialize the component.
   *
   * Gets the current month and year, then calls
   * {@link generateCalender} to generate the calender.
   */
  ngOnInit(): void {
    this.currentMonth = new Date().getMonth();
    this.currentYear = new Date().getFullYear();

    this.generateCalender();
  }

  /**
   * Generate the calender.
   *
   * This method generates the days of the month and the first day of the week.
   * It also sets the current date.
   *
   * It is called on component initialization.
   */
  private generateCalender() {
    this.currentDay = new Date().getDate();

    this.currentMonthName = this.monthsOfTheYear[this.currentMonth];

    this.currentYearName = this.currentYear.toString();

    this.currentDate = this.currentDay + ' ' + this.currentMonthName + ' ' + this.currentYearName;

    this.firstDayOfWeek = new Date(this.currentYear, this.currentMonth, 1).getDay();

    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

    this.daysInMonth = [];

    for (let i = 1; i <= daysInMonth; i++) {
      this.daysInMonth.push(i);
    }
  }

  public handleCalenderEvent(day: number) {
    console.log(day)
  }

  /**
   * Handle the next month button click event.
   *
   * This will add one to the current month, taking into account the wrap-around
   * from December to January.
   *
   * If the current month is December (11), we should increment the current year.
   */
  public handleNextMonth(): void {
    if (this.currentMonth === 11) {
      this.currentYear++;
      this.currentMonth = 0;
    } else {
      this.currentMonth++;
    }

    this.generateCalender();
  }

  /**
   * Handle the previous month button click event.
   *
   * This will subtract one from the current month, taking into account the wrap-around
   * from December to January.
   *
   * If the current month is January (0), we should decrement the current year.
   */
  public handlePrevMonth() {
    this.currentMonth = (this.currentMonth - 1 + 12) % 12;
    if (this.currentMonth === 11) this.currentYear--;

    this.generateCalender();
  }

  /**
   * Toggle the date picker dropdown.
   *
   * This method is called when the current month button is clicked. It toggles the
   * {@link isOpen} property, which determines whether the date picker dropdown
   * is visible or not.
   */
  toggleDatePicker() {
    this.isOpen = !this.isOpen;
  }

  /**
   * Toggle the month picker dropdown.
   *
   * This method is called when the month button is clicked. It toggles the
   * {@link isMonthPickerOpen} property, which determines whether the month
   * picker dropdown is visible or not.
   */
  toggleMonthPicker(): void {
    this.isMonthPickerOpen = !this.isMonthPickerOpen;
    this.getCurrentWeek(false)
  }

  /**
   * Toggle the filter dropdown.
   *
   * This method is called when the filter button is clicked. It toggles the
   * {@link isFilterOpen} property, which determines whether the filter dropdown
   * is visible or not.
   */
  toggleFilter() {
    this.isFilterOpen = !this.isFilterOpen
  }

  /**
   * Handles the month change event.
   *
   * This method is called when a new month is selected from the month dropdown.
   * It is called automatically whenever the user selects a new month from the
   * month dropdown.
   *
   * The purpose of this method is to update the current month and regenerate
   * the calender. This is necessary because the calender is rendered based on the
   * current month and year, so if the user changes the month, we need to update
   * the calender to reflect the new month.
   *
   * The method takes a single argument, `month`, which is the new month to be
   * selected (0-11, January-December).
   *
   * The method does the following:
   *  1. It updates the current month by setting the `currentMonth` property to
   *     the new month.
   *  2. It closes the month dropdown by setting the `isOpen` property to false.
   *  3. It regenerates the calender by calling the `generateCalender()` method.
   *
   * @param month The new month (0-11, January-December).
   */
  public onMonthChange(month: number): void {
    this.currentMonth = month;
    this.isOpen = false;

    this.generateCalender();
  }

  /*************  ✨ Codeium Command 🌟  *************/
  /**
   * Handles the year change event.
   *
   * This method is called when a new year is selected from the year dropdown.
   * It updates the current year and regenerates the calender by calling
   * {@link generateCalender}.
   *
   * @param year The new year.
   */
  public onYearChange(year: number): void {
    this.currentYear = year;
    this.isOpen = false;
    this.generateCalender();
  }
  /******  a23a8126-489d-4240-8c98-4a4c397bedb5  *******/

  /**
   * Open the off-canvas menu.
   *
   * This method is called when a day is clicked in the calendar. It will open the
   * off-canvas menu and set the week day label to the name of the day of the week
   * of the selected date.
   *
   * @param day The day of the month that was clicked (1-31).
   * @param event The list of events associated with the day that was clicked.
   */
  openOffCanvas(day: number, event: CalendarEventDetails[]): void {
    this.selectedDay = day;
    const date = new Date(this.currentYear, this.currentMonth, day);
    const dayOfWeek = date.getDay();
    this.weekDay = this.daysOfTheWeek[dayOfWeek];
    this.selectedDayEvents = event;

    this.isOffCanvasOpen = !this.isOffCanvasOpen;
    this.isPopoverOpen = false;
  }

  /**
   * Close the off-canvas menu.
   *
   * This method is called when the close button is clicked in the off-canvas
   * menu. It sets the {@link isOffCanvasOpen} property to false, which will
   * hide the off-canvas menu.
   */
  closeOffCanvas(): void {
    this.isOffCanvasOpen = false;
  }



  /**
   * Opens the popover that displays the events for the selected day.
   *
   * This method is called when a day is clicked in the calendar. It will open the
   * popover and position it at the location of the click event.
   *
   * @param event The mouse event that triggered this method.
   * @param day The day of the month that was clicked (1-31).
   */
  openPopover(event: MouseEvent, day: number, eventDetail: CalendarEventDetails): any {
    this.selectedEventDetail = eventDetail;
    this.selectedDay = day;
    const date = new Date(this.currentYear, this.currentMonth, day);
    const dayOfWeek = date.getDay();
    this.weekDay = this.daysOfTheWeek[dayOfWeek];
    this.isPopoverOpen = true;
    this.popoverDay = day;
    this.closeOffCanvas();
    this.positionPopover(event);
  }

  /**
   * Position the popover at the location of the click event.
   *
   * This function is called by the openPopover method, which is called when a day
   * is clicked in the calendar. It will position the popover at the location of the
   * click event.
   *
   * This function will wait for the popover to render before positioning it. This
   * is done with setTimeout and a 0ms delay. This ensures that the popover has
   * rendered and its width and height are available.
   *
   * It will check if the popover is too close to the edge of the screen and if so,
   * will reposition it so it doesn't go off the screen.
   *
   * @param event The mouse event that triggered this method.
   */
  positionPopover(event: MouseEvent) {
    setTimeout(() => {
      const popoverEl = this.popover.nativeElement;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const popoverRect = popoverEl.getBoundingClientRect();

      let left = event.clientX;
      let top = event.clientY + 10; // Default below cursor

      if (left + popoverRect.width > viewportWidth) {
        left = viewportWidth - popoverRect.width - 10;
      }
      if (top + popoverRect.height > viewportHeight) {
        top = event.clientY - popoverRect.height - 10;
      }

      popoverEl.style.left = `${left}px`;
      popoverEl.style.top = `${top + 5}px`;
    }, 0);
  }

  /**
   * Called when the user changes the calendar view.
   *
   * This function is called when the user changes the calendar view by clicking on
   * one of the view options in the top right corner of the calendar. The view
   * options are "Month", "Week", and "Day".
   *
   * When this function is called, it will update the selectedView property to the
   * index of the view that was selected.
   *
   * @param view The index of the view that was selected (0, 1, or 2).
   */
  public onViewChange(view: number): void {
    this.selectedView = view;
  }

  /**
   * Toggle the year picker dropdown.
   *
   * This function is called when the year button is clicked. It will toggle the
   * {@link showYearPicker} property, which determines whether the year picker
   * dropdown is visible or not.
   *
   * Also, it will stop the event from propagating up the DOM tree, so that the
   * event doesn't bubble up and cause the calendar to be closed.
   *
   * @param event The mouse event that triggered this method.
   */
  public toggleYearPicker(event: Event): void {
    this.showYearPicker = !this.showYearPicker
    event.stopPropagation();
  }

  /**
   * Handles the previous year button click event.
   *
   * This method is called when the previous year button is clicked. It will
   * decrement the current year by one and regenerate the calender by calling
   * {@link generateCalender}.
   *
   * It will also stop the event from propagating up the DOM tree, so that the
   * event doesn't bubble up and cause the calendar to be closed.
   *
   * @param event The mouse event that triggered this method.
   */
  public handlePrevYear(event: Event): void {
    event.stopPropagation();
    this.currentYear--;
    this.generateCalender();
  }

  /**
   * Handles the next year button click event.
   *
   * This method is called when the next year button is clicked. It will
   * increment the current year by one and regenerate the calender by calling
   * {@link generateCalender}.
   *
   * @param event The mouse event that triggered this method.
   */
  public handleNextYear(event: Event): void {
    event.stopPropagation();
    this.currentYear++;

    this.generateCalender();
  }

  public getCurrentWeek(startFromMonday = false) {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)

    // Adjust for Monday as the start of the week if needed
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - dayOfWeek + (startFromMonday ? (dayOfWeek === 0 ? -6 : 1) : 0));

    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(weekStart);
      date.setDate(weekStart.getDate() + i);
      weekDates.push(date.getDate()); // Day of the month as 1, 2, 3, etc.
    }

    this.hours = Array.from({ length: 24 }, (_, i) => {
      const suffix = i < 12 ? 'AM' : 'PM';
      const hour = i % 12 === 0 ? 12 : i % 12;
      return `${hour} ${suffix}`;
    });

    this.currentWeekDays = weekDates;
  }

  getEventHour(eventTime: string, extraMinutes: string): string {
    return eventTime.split(" ")[0] + ":" + extraMinutes + ' ' + eventTime.split(" ")[1]; // Extract hour + AM/PM
  }


}
