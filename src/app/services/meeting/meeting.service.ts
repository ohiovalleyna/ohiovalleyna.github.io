import { Injectable } from '@angular/core';
import { Meeting, Tag, DayOfWeek } from '../../models/meeting';
import { MeetingData } from '../../dto/meeting-data';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import moment, { Moment } from 'moment';


@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  getMeetings(): Observable<Meeting[]> {
    return this.http.get('assets/data/meetings.json')
      .pipe(
        map(response => (response as MeetingData[])
          .map(meetingData => this.processMeeting(meetingData)) as Meeting[])
      );

  }

  processMeeting(meetingData: MeetingData): Meeting {
    let meeting: Meeting = new Meeting();
    meeting.groupName = meetingData.groupName;
    meeting.time = moment(meetingData.time, 'HH:mm:ss');
    meeting.dayOfWeek = DayOfWeek[meetingData.dayOfWeek];
    meeting.location = meetingData.location;
    meeting.address = meetingData.address;
    meeting.tags = this.getVisibleTags(meetingData.tags).concat(this.getInvisibleTags(meeting));
    return meeting;
  }

  getInvisibleTags(meeting: Meeting) : Tag[] {
    const invisibleTags: Tag[] = [];
    const state = meeting.address.state;
    if (state === 'KY') {
      invisibleTags.push(this.getInvisibleTag('Kentucky'));
    }
    if (state === 'IN') {
      invisibleTags.push(this.getInvisibleTag('Indiana'));
    }

    const time = meeting.time;
    if (this.fallsBetweenTimes(time, '06:00', '11:59')) {
      invisibleTags.push(this.getInvisibleTag('Morning'));
    }

    if (this.fallsBetweenTimes(time, '12:00', '15:00')) {
      invisibleTags.push(this.getInvisibleTag('Afternoon'));
    }

    if (this.fallsBetweenTimes(time, '17:00', '21:00')) {
      invisibleTags.push(this.getInvisibleTag('Evening'));
    }

    if (this.fallsBetweenTimes(time, '20:00', '23:59')) {
      invisibleTags.push(this.getInvisibleTag('Late'));
    }
    return invisibleTags;
  }


  fallsBetweenTimes(time: Moment, beginningOfWindow: string, endOfWindow: string) : boolean {
    const timeFormatString = 'HH:mm';
    const startTime = moment(beginningOfWindow, timeFormatString);
    const endTime = moment(endOfWindow, timeFormatString);
    return time.isSameOrAfter(startTime) && time.isSameOrBefore(endTime);
  }

  getInvisibleTag(tagString: string) : Tag {
    return { tag: tagString, visible: false };
  }
  
  getVisibleTags(tags: string[]): Tag[] {
    return tags.map(providedTag => ({ tag: providedTag, visible: true}));
  }

  constructor(private http: HttpClient) { }
}
