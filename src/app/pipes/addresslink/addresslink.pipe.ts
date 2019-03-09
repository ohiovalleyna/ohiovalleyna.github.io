import { Pipe, PipeTransform } from '@angular/core';
import { Address } from 'src/app/models/meeting';

@Pipe({
  name: 'addresslink'
})
export class AddresslinkPipe implements PipeTransform {

  transform(address: Address, args?: any): any {
    console.log(address.street.split(" "));
    console.log(address.city.split(" "));
    console.log(address.state.split(" "));
    console.log(address.zip.split(" "));
    var addressArray = (address.street.split(" ") || []);
    addressArray.push(...(address.city.split(" ")   || []));
    addressArray.push(...(address.state.split(" ")  || []));
    addressArray.push(...(address.zip.split(" ")    || []));
    return addressArray.join("+");
  }

}
