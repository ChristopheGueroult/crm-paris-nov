import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value) {
      if (args) {
        return value.totalTtc(args);
      }
      return value.totalHt();
    }
    return null;
  }

}
