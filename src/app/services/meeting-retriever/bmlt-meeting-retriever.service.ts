import { Injectable } from '@angular/core';
import { MeetingRetrieverService } from './meeting-retriever.service';
import { Observable } from 'rxjs';
import { Meeting, DayOfWeek, Tag } from 'src/app/models/meeting';
import { BmltMeetingData } from 'src/app/dto/bmlt-meeting-data';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import moment from 'moment';
import { TagService } from '../tag/tag.service';
import { DayOfWeekService } from '../weekday/day-of-week.service';
import { BmltResponse } from 'src/app/dto/bmlt-response';

@Injectable()
export class BmltMeetingRetrieverService implements MeetingRetrieverService {
  private formatMap: Map<string, string>;

  constructor(
    private http: HttpClient,
    private tagService: TagService,
    private dayOfWeekService: DayOfWeekService) {
  }

  getMeetings(): Observable<Meeting[]> {
    return this.http.jsonp('https://bmlt.bmltky.online/main_server/client_interface/jsonp/?switcher=GetSearchResults&get_used_formats=1&services[]=11&services[]=7&services[]=8&sort_keys=weekday_tinyint,start_time,meeting_name', 'callback')
      .pipe(
        map((response: BmltResponse) => {
          this.formatMap = response.formats.reduce(
            (map, format) => {
              map[format.key_string] = format.name_string;
              return map;
            }
            , {} as Map<string, string>);
          return response.meetings.map(meeting => this.processBmltMeeting(meeting));
        })
      );
  }


  private processBmltMeeting(bmltMeetingData: BmltMeetingData): Meeting {
    const meeting: Meeting = new Meeting();
    meeting.dayOfWeek = this.dayOfWeekService.intToDayOfWeek(bmltMeetingData.weekday_tinyint - 1);
    meeting.location = bmltMeetingData.location_text;
    meeting.groupName = bmltMeetingData.meeting_name;
    meeting.tags = [];
    meeting.time = moment(bmltMeetingData.start_time, 'HH:mm:ss');
    meeting.address = {
      city: bmltMeetingData.location_municipality,
      state: bmltMeetingData.location_province,
      street: bmltMeetingData.location_street,
      zip: bmltMeetingData.location_postal_code_1
    }

    meeting.tags = this.getVisibleTagsFromFormats(bmltMeetingData.formats)
      .concat(this.tagService.getInvisibleTags(meeting));
    return meeting;

  }

  private getVisibleTagsFromFormats(formatString: string): Tag[] {
    return this.tagService.getVisibleTags(formatString.split(',').map(key => this.formatMap[key]));
  }

}
