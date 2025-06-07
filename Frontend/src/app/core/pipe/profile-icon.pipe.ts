import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'profileIcon',
})
export class ProfileIconPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return value?.charAt(0) ?? 'N/A';
  }
}
