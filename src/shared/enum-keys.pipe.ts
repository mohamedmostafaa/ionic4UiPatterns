
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'keys' })
export class EnumKeysPipe implements PipeTransform {
  transform(value, args: string[]): any {
    const keys = [];
    for (const enumMember in value) {
      if (!isNaN(parseInt(enumMember, 10))) {
        keys.push({
          key: enumMember,
          value: value[enumMember],
          name: value[enumMember].toString().replace('_', ' ')
        });
        // Uncomment if you want log
        // console.log("enum member: ", value[enumMember]);
      }
    }
    return keys;
  }
}



