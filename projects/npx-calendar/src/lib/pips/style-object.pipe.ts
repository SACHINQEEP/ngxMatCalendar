import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'styleObject'
})
export class StyleObjectPipe implements PipeTransform {

  transform(value: string): { [klass: string]: any } {
    const styles: { [klass: string]: any } = {};

    if (!value) {
      return styles;
    }

    const styleRules = value.split(';');
    styleRules.forEach(rule => {
      const [property, value2] = rule.split(':');
      if (property && value2) {
        styles[property.trim()] = value2.trim();
      }
    });
    return styles;
  }
}

