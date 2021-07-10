import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'xch'
})
export class XchPipe implements PipeTransform {
  constructor(
    private numberPipe: DecimalPipe,
  ) {}

  transform(value: number): string {
    const xch = value / 10 ** 12;
    const formattedXch = this.numberPipe.transform(xch);

    return `${formattedXch} XCH`
  }
}
