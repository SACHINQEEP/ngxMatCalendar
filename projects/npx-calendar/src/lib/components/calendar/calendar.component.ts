import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { CalendarEvent, CalendarEventDetails, CalendarThemes } from '../../interface/calendar.interface';
import { StyleObjectPipe } from '../../pips/style-object.pipe';



@Component({
  selector: 'lib-calendar',
  imports: [CommonModule, StyleObjectPipe],
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

  public years: number[] = []
  public viewOptions: string[] = ["Month", "Work week", "Week", "Day"];
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
   * It updates the current month and regenerates the calender by calling
   * {@link generateCalender}.
   *
   * @param month The new month (0-11, January-December).
¸¸¸¸¸¸¸   */
  public onMonthChange(month: number): void {
    this.currentMonth = month;
    this.isOpen = false;

    this.generateCalender();
  }

  public onYearChange(year: number): void {
    this.currentYear = year;
    this.isOpen = false;

    this.generateCalender();
  }

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

  public onViewChange(view: number): void {
    this.selectedView = view
  }

  public toggleYearPicker(event: Event): void {
    this.showYearPicker = !this.showYearPicker
    event.stopPropagation();
    console.log("clicked")
  }

  public handlePrevYear(event: Event): void {
    event.stopPropagation();
    this.currentYear = this.currentYear - 1;
    this.generateCalender()
  }

  public handleNextYear(event: Event): void {
    event.stopPropagation();
    this.currentYear = this.currentYear + 1;
    this.generateCalender()
  }




}
