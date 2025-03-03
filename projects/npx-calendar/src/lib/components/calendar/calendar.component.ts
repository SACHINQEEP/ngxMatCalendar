import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CalendarEvent } from '../../interface/calendar.interface';



@Component({
  selector: 'lib-calendar',
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  public daysOfTheWeek: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  public monthsOfTheYear: string[] = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];

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

  @Input() public calendar_events: CalendarEvent[] = [];

  constructor() { }

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
    // Get the current day of the month (1-31)
    this.currentDay = new Date().getDate();

    // Get the current month name (January-December)
    this.currentMonthName = this.monthsOfTheYear[this.currentMonth];

    // Get the current year
    this.currentYearName = this.currentYear.toString();

    // Set the current date
    this.currentDate = this.currentDay + ' ' + this.currentMonthName + ' ' + this.currentYearName;

    // Get the first day of the week (0-6, Sunday-Saturday)
    this.firstDayOfWeek = new Date(this.currentYear, this.currentMonth, 1).getDay();

    // Get the last day of the month (28-31)
    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

    // Initialize the array of days in the month
    this.daysInMonth = [];

    // Fill the array of days in the month
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
    // If the current month is December (11), increment the current year and reset the current month to January (0).
    // Otherwise, just increment the current month.
    if (this.currentMonth === 11) {
      this.currentYear++;
      this.currentMonth = 0;
    } else {
      this.currentMonth++;
    }

    // Generate the calender again with the new month.
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
    // Subtract one from the current month, but wrap around from December to January.
    // We use the modulo operator to get the remainder of the division of the current
    // month by 12. This will wrap around from 11 to 0.
    this.currentMonth = (this.currentMonth - 1 + 12) % 12;

    // If the previous month is December (11), decrement the current year.
    if (this.currentMonth === 11) this.currentYear--;

    // Generate the calender again with the new month.
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
    // Toggle the date picker dropdown
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
    // Toggle the month picker dropdown
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
    // Toggle the filter dropdown
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
    // Update the current month
    this.currentMonth = month;

    // Close the month dropdown
    this.isOpen = false;

    // Regenerate the calender with the new month
    this.generateCalender();
  }


}
