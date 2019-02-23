import { Pipe, PipeTransform } from '@angular/core';
import { Meeting, Address, Tag } from '../../models/meeting';
import { TimePipe } from '../time/time.pipe';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  filter : string;
  transform(meetings: Meeting[], filterText: string): any {
      if (!meetings || !filterText){
        return meetings;
      }
      this.filter = filterText.toUpperCase();
      return meetings.filter ( meeting =>
        this.filterCheck(meeting.groupName) ||
        this.filterCheck("" + meeting.dayOfWeek) ||
        this.filterCheck(new TimePipe().transform(meeting.time)) ||
        this.filterCheck(meeting.location) ||
        this.filterCheck(meeting.address.street) ||
        this.filterCheck(meeting.address.city) ||
        this.filterCheck(meeting.address.state) ||
        this.filterCheck(meeting.address.zip) ||
        this.checkTags(meeting.tags)
      ); 
     
    }

    filterCheck(value: string) :  boolean {
      value = value || "";
      return value.toUpperCase().includes(this.filter);
    }

    checkTags(tags: Tag[]) : boolean {
      tags.forEach(tag => {
        if (this.filterCheck(tag.tag)){
          return true;
        }
      });
      return false;
    }
}
