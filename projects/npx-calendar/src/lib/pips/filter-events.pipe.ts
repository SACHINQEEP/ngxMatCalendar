import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterEvents' })
export class FilterEventsPipe implements PipeTransform {
  transform(events: any[], targetTime: string): any[] {
    return events.filter(event => event.time === targetTime);
  }
}
