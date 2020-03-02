import { Injectable } from '@angular/core';
import { MeetingRetrieverService } from './meeting-retriever.service';
import { Observable } from 'rxjs';
import { Meeting, DayOfWeek } from 'src/app/models/meeting';
import { OvanaMeetingData } from 'src/app/dto/ovana-meeting-data';
import { HttpClient } from '@angular/common/http';
import { TagService } from '../tag/tag.service';
import { map } from 'rxjs/operators';
import moment from 'moment';

@Injectable()
export class OvanaMeetingRetrieverService implements MeetingRetrieverService {

  constructor(private http: HttpClient, private tagService: TagService) { }

  getMeetings(): Observable<Meeting[]> {
    return this.http.get('assets/data/meetings.json')
      .pipe(
        map(response => (response as OvanaMeetingData[])
          .map(meetingData => this.processMeeting(meetingData)) as Meeting[])
      );

  }

  processMeeting(meetingData: OvanaMeetingData): Meeting {
    const meeting: Meeting = new Meeting();
    meeting.groupName = meetingData.groupName;
    meeting.time = moment(meetingData.time, 'HH:mm:ss');
    meeting.dayOfWeek = DayOfWeek[meetingData.dayOfWeek];
    meeting.location = meetingData.location;
    meeting.address = meetingData.address;
    meeting.tags = this.tagService.getVisibleTags(meetingData.tags)
      .concat(this.tagService.getInvisibleTags(meeting));

    return meeting;
  }



}
