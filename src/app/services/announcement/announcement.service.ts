import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Announcement } from 'src/app/models/announcement';
import { AnnouncementData } from 'src/app/dto/announcement-data';
import { ExcelService } from '../excel/excel.service';


@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor(private http: HttpClient,
    private excelSerivce: ExcelService) { }

  getAnnouncements(): Observable<Announcement[]> {
    return this.getAnnouncementsFromExcel()
      .pipe(
        map(announcementDataList => announcementDataList
          .map(announcementData => this.processAnnouncementData(announcementData)))
      )
  }

  getAnnouncementsFromExcel(): Observable<AnnouncementData[]> {
    return this.excelSerivce.getDataFromExcelSheet('announcements')
      .pipe(
        map(excelRows => excelRows.map(this.excelSheetToAnnouncement))
      );
  }

  excelSheetToAnnouncement(excelSheet: any): AnnouncementData {
    return {
      title: excelSheet['Title'],
      text: excelSheet['Text']
    }
  }

  getAnnouncementsFromJson(): Observable<AnnouncementData[]> {
    return this.http.get<AnnouncementData[]>('/assets/data/announcements.json');
  }

  processAnnouncementData(announcementData: AnnouncementData): Announcement {
    const announcement = new Announcement();
    announcement.title = announcementData.title;
    announcement.innerHTML = this.urlify(announcementData.text);
    return announcement;
  }

  urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function(url) {
      return '<a href="' + url + '" target="_blank">' + url + '</a>';
    });
  }
  
}
