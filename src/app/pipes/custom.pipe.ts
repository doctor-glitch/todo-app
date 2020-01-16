import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(args[0]);
    if (args[0] == value) {
      return 'HELLO';
    } else {
      return value;
    }
  }

}
