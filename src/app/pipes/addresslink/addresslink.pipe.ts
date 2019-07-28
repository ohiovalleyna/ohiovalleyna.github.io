import { Pipe, PipeTransform } from '@angular/core';
import { Address } from 'src/app/models/meeting';

@Pipe({
  name: 'addresslink'
})
export class AddresslinkPipe implements PipeTransform {

  transform(address: Address, args?: any): any {
    const addressArray = (address.street.split(' ') || []);
    addressArray.push(...(address.city.split(' ')   || []));
    addressArray.push(...(address.state.split(' ')  || []));
    addressArray.push(...(address.zip.split(' ')    || []));
    return addressArray.join('+');
  }

}
