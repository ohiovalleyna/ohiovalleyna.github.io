import { Pipe, PipeTransform } from '@angular/core';
import { Meeting, Address, Tag } from '../../models/meeting';
import { TimePipe } from '../time/time.pipe';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  filters: string[];
  transform(meetings: Meeting[], filterText: string): any {
    if (!filterText) return meetings;

    this.filters = filterText.split(' ');
    if (!meetings || !filterText) return meetings;

    return meetings.filter(meeting =>
      this.filters.some(filter => {
        if (filter === '') return false;
        filter = filter.toUpperCase();
        return this.verifyFilters(meeting, filter);
      })
    );
  }

  verifyFilters(meeting: Meeting, filter: string): boolean {
    return this.filterCheck(meeting.groupName, filter) ||
    this.filterCheck('' + meeting.dayOfWeek, filter) ||
    this.filterCheck(meeting.location, filter) ||
    this.filterCheck(meeting.address.street, filter) ||
    this.filterCheck(meeting.address.city, filter) ||
    this.filterCheck(meeting.address.state, filter) ||
    this.filterCheck(meeting.address.zip, filter) ||
    this.checkTags(meeting.tags, filter);
  }

  filterCheck(value: string, filter: string): boolean {
    value = value || '';
    return value.toUpperCase().includes(filter);
  }

  checkTags(tags: Tag[], filter: string): boolean {
    if (!tags) return false;

    let found = false;
    found = tags.some(tag => {
      if (this.filterCheck(tag.tag, filter)) {
        return true;
      }
    });
    return found;
  }
}
