import { Injectable } from '@angular/core';
import { Meeting, Tag } from 'src/app/models/meeting';
import moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  getInvisibleTags(meeting: Meeting): Tag[] {
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


  private fallsBetweenTimes(time: moment.Moment, beginningOfWindow: string, endOfWindow: string): boolean {
    const timeFormatString = 'HH:mm';
    const startTime = moment(beginningOfWindow, timeFormatString);
    const endTime = moment(endOfWindow, timeFormatString);
    return time.isSameOrAfter(startTime) && time.isSameOrBefore(endTime);
  }

  private getInvisibleTag(tagString: string): Tag {
    return { tag: tagString, visible: false };
  }

  getVisibleTags(tags: string[]): Tag[] {
    return tags.map(providedTag => ({ tag: providedTag, visible: true }));
  }

  constructor() { }
}
