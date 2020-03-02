import { Injectable } from '@angular/core';
import { Meeting } from '../../models/meeting';
import { Observable } from 'rxjs';
import { MeetingRetrieverService } from '../meeting-retriever/meeting-retriever.service';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(private meetingRetrieverService: MeetingRetrieverService) { }


  getMeetings(): Observable<Meeting[]> {
    return this.meetingRetrieverService.getMeetings();
  }

  sortMeetings(meetings: Meeting[], isAsc: boolean): Meeting[] {
    return meetings.sort((a, b) => {
      const dayOfWeekValue = b.dayOfWeek - a.dayOfWeek;
      const timeValue = b.time.diff(a.time);
      const nameValue = b.groupName.localeCompare(a.groupName);
      return (isAsc ? -1 : 1) * (dayOfWeekValue || timeValue || nameValue);
    });
  }
}
