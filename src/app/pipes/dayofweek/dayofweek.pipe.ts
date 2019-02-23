import { Pipe, PipeTransform } from '@angular/core';
import { Meeting, DayOfWeek } from '../../models/meeting';

@Pipe({
  name: 'dayofweek'
})
export class DayOfWeekPipe implements PipeTransform {

  transform(meetingList: Meeting[], dayOfWeek: any) : Meeting[] {
    if (dayOfWeek == ""){
      return meetingList;
    }

    return meetingList.filter( meeting =>
      meeting.dayOfWeek == dayOfWeek
    )
  }

}
