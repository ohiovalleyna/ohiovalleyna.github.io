import { Component, OnInit } from '@angular/core';
import { Meeting } from '../../models/meeting';
import { MeetingService } from '../../services/meeting/meeting.service';
import * as moment from 'moment/moment';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.css']
})
export class MeetingListComponent implements OnInit {
  selectedDay: string;
  filterText: string;
  meetings: Meeting[];
  weekdays: string[];

  getMeetings(): void {
    this.meetingService.getMeetings().then(
      meetings => this.meetings = this.meetingService.sortMeetings(meetings, true));
  }

  onSelect(day: string): void {
    this.selectedDay = day;
    this.filterText = '';
  }

  constructor(private meetingService: MeetingService) { }

  ngOnInit() {
    const d = new Date();
    this.weekdays = new Array(7);
    this.weekdays[0] = 'Sunday';
    this.weekdays[1] = 'Monday';
    this.weekdays[2] = 'Tuesday';
    this.weekdays[3] = 'Wednesday';
    this.weekdays[4] = 'Thursday';
    this.weekdays[5] = 'Friday';
    this.weekdays[6] = 'Saturday';

    this.selectedDay = this.weekdays[d.getDay()];
    this.getMeetings();
  }
}
