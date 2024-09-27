import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prasadd'
})
export class PrasaddPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): number {
    return value.length;
  }

}
