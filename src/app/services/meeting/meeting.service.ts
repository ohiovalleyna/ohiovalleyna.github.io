import { Injectable } from '@angular/core';
import { Meeting, Tag, DayOfWeek } from '../../models/meeting';
import { MeetingData } from '../../dto/meeting-data';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EMPTY, Observable, of } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import moment, { Moment } from 'moment';
import * as ExcelInterface from '../../../assets/scripts/excel-interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(private http: HttpClient) { }

  getMeetings(): Promise<Meeting[]> {
    return this.getMeetingsFromXlsx()
      .then((meetingData: MeetingData[]) => meetingData.map(meeting => this.processMeetingData(meeting)));
  }

  getMeetingsFromXlsx(): Promise<MeetingData[]> {
    return ExcelInterface.getDataFromExcelSheet('meetings', environment.excelFile)
      .then(excelSheet => excelSheet.map(excelRow => this.mapExcelRowToMeeting(excelRow)));
  }

  mapExcelRowToMeeting(excelRow: any): MeetingData {
    return {
      groupName: excelRow['Group Name'],
      dayOfWeek: excelRow['Day of Week'],
      time: excelRow['Military Time HH:MM'],
      location: excelRow['Location'],
      address: {
        street: excelRow['Street'],
        city: excelRow['City'],
        state: excelRow['State'],
        zip: '' + excelRow['Zip']
      },
      tags: excelRow['Tags'] ? excelRow['Tags'].split(',') : [],
      wheelchairAccessible: excelRow['Wheelchair Accessible']
    };
  }

  processMeetingData(meetingData: MeetingData): Meeting {
    let meeting: Meeting = new Meeting();
    meeting.groupName = meetingData.groupName;
    meeting.time = moment(meetingData.time, 'HH:mm');
    meeting.dayOfWeek = DayOfWeek[meetingData.dayOfWeek];
    meeting.location = meetingData.location;
    meeting.address = meetingData.address;
    meeting.tags = this.getVisibleTags(meetingData.tags).concat(this.getInvisibleTags(meeting));
    if (meetingData.wheelchairAccessible) {
      meeting.tags.push({ tag: 'Wheelchair Accessible', visible: true})
    }
    return meeting;
  }

  getInvisibleTags(meeting: Meeting): Tag[] {
    const invisibleTags: Tag[] = [];
    if (meeting.address) {
      const state = meeting.address.state;
      if (state === 'KY') {
        invisibleTags.push(this.getInvisibleTag('Kentucky'));
      }
      if (state === 'IN') {
        invisibleTags.push(this.getInvisibleTag('Indiana'));
      }
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


  fallsBetweenTimes(time: Moment, beginningOfWindow: string, endOfWindow: string): boolean {
    const timeFormatString = 'HH:mm';
    const startTime = moment(beginningOfWindow, timeFormatString);
    const endTime = moment(endOfWindow, timeFormatString);
    return time.isSameOrAfter(startTime) && time.isSameOrBefore(endTime);
  }

  getInvisibleTag(tagString: string): Tag {
    return { tag: tagString, visible: false };
  }

  getVisibleTags(tags: string[]): Tag[] {
    return tags.map(providedTag => ({ tag: providedTag, visible: true }));
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
