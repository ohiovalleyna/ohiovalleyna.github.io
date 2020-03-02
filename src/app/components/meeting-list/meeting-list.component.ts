import { Component, OnInit } from '@angular/core';
import { Meeting } from '../../models/meeting';
import { MeetingService } from '../../services/meeting/meeting.service';
import { DayOfWeekService } from 'src/app/services/weekday/day-of-week.service';

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
    this.meetingService.getMeetings().subscribe(
      meetings => this.meetings = this.meetingService.sortMeetings(meetings, true));
  }

  onSelect(day: string): void {
    this.selectedDay = day;
    this.filterText = '';
  }

  constructor(private meetingService: MeetingService,
    private dayOfWeekService: DayOfWeekService) { }

  ngOnInit() {
    const d = new Date();
    this.weekdays = this.dayOfWeekService.getWeekdayStringList();
    this.selectedDay = this.weekdays[d.getDay()];
    this.getMeetings();
  }
}
