import { Injectable } from '@angular/core';
import { Meeting, Tag, DayOfWeek } from '../../models/meeting';
import { MeetingData } from '../../dto/meeting-data';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EMPTY, Observable, of } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import moment, { Moment } from 'moment';
import { ExcelService } from '../excel/excel.service';


@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(private http: HttpClient,
    private excelService: ExcelService) { }

  getMeetings(): Observable<Meeting[]> {
    return this.getMeetingsFromXlsx()
      .pipe(
        map((meetingData: MeetingData[]) => meetingData.map(meeting => this.processMeeting(meeting)))
      )
  }

  getMeetingsFromXlsx(): Observable<MeetingData[]> {
    return this.excelService.getDataFromExcelSheet('assets/data/ovana-data.xlsx', 'meetings')
      .pipe(map(excelSheet => excelSheet.map(this.mapExcelRowToMeeting)));
  }

  mapExcelRowToMeeting(excelRow: any): MeetingData {
    return {
      groupName: excelRow['Group Name'],
      dayOfWeek: excelRow['Day of Week'],
      time: excelRow['Military Time HH:MM:SS'],
      location: excelRow['Location'],
      address: {
        street: excelRow['Street'],
        city: excelRow['City'],
        state: excelRow['State'],
        zip: '' + excelRow['Zip']
      },
      tags: excelRow['Tags'].split('|')
    };
  }

  getMeetingsFromCsv(): Observable<MeetingData[]> {
    return this.http.get('assets/data/meetings.csv', { responseType: 'text' })
      .pipe(
        map((response: string) => response.split('\n')),
        map((meetingLines: string[]) => meetingLines
          .slice(1)
          .filter(commaSeparatedMeeting => commaSeparatedMeeting)
          .map(meetingString => meetingString.split(','))
          .map(meetingParts => ({
            groupName: meetingParts[0],
            dayOfWeek: meetingParts[1],
            time: meetingParts[2],
            location: meetingParts[3],
            address: {
              street: meetingParts[4],
              city: meetingParts[5],
              state: meetingParts[6],
              zip: meetingParts[7]
            },
            tags: meetingParts[8].split('|')
          }))
        )
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
