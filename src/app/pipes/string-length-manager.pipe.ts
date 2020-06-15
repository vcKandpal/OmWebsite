import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringLengthManager',
})
export class StringLengthManagerPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    console.log('value : ', value);
    console.log('args : ', args);
    let length = args[0];
    //console.log(value.substring(0, length));
    return value.length > length ? value.substring(0, length) + '...' : value;
  }
}
