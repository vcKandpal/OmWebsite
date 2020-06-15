import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'read'
})
export class ReadPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
