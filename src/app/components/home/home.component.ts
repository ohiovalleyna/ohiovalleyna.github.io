import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from 'src/app/services/announcement/announcement.service';
import { Announcement } from 'src/app/models/announcement';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private announcementService: AnnouncementService) { }
  
  announcements: Announcement[] = [];

  ngOnInit() {
    this.announcementService.getAnnouncements().subscribe(announcements => this.announcements = announcements);
  }

}
