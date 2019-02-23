import { Pipe, PipeTransform } from '@angular/core';
import { Tag } from '../../models/meeting';
@Pipe({
  name: 'visibletags'
})
export class VisibleTagPipe implements PipeTransform {

  transform(tags: Tag[]): any {
    return tags.filter(tag => tag.visible);
  }

}


@Pipe({
  name: 'invisibletags'
})
export class InvisibleTagPipe implements PipeTransform {
  transform(tags: Tag[]): any {
    return tags.filter(tag => !tag.visible);
  }
}