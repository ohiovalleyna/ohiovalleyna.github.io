import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '../../models/meeting';
@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(address: Address): string {
    return `${address.city}, ${address.state} ${address.zip}`;
  }

}
