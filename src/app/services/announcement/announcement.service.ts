import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Announcement } from 'src/app/models/announcement';
import { AnnouncementData } from 'src/app/dto/announcement-data';


@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor(private http: HttpClient) { }

  getAnnouncements(): Observable<Announcement[]> {
    return this.http.get('/assets/data/announcements.json')
      .pipe(
        map(response => (response as AnnouncementData[])
          .map(announcementData => this.processAnnouncementData(announcementData)) as Announcement[])

      )
  }

  processAnnouncementData(announcementData: AnnouncementData): Announcement {
    const announcement = new Announcement();
    announcement.title = announcementData.title;
    announcement.innerHTML = announcementData.innerHTML;
    return announcement;
    // if (announcementData.startDateTime) {
    //   announcement.startDateTime = moment.of(announcementData.startDateTime);
    // }
    // if (announcementData)
    // announcement.expirationDateTime = announcementData.expirationDateTime ? moment.of(announcementData.expirationDateTime) : moment.now();
  }
}
