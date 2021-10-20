import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Announcement } from 'src/app/models/announcement';
import { AnnouncementData } from 'src/app/dto/announcement-data';
import * as ExcelInterface from '../../../assets/scripts/excel-interface';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor() { }

  getAnnouncements(): Promise<Announcement[]> {
    return this.getAnnouncementsFromExcel()
      .then(announcementDataList => announcementDataList
        .map(announcementData => this.processAnnouncementData(announcementData)));
  }

  getAnnouncementsFromExcel(): Promise<AnnouncementData[]> {
    return ExcelInterface.getDataFromExcelSheet('announcements', environment.excelFile)
      .then(excelRows => excelRows.map(this.excelSheetToAnnouncement));
  }

  excelSheetToAnnouncement(excelSheet: any): AnnouncementData {
    return {
      title: excelSheet['Title'],
      text: excelSheet['Text']
    }
  }

  processAnnouncementData(announcementData: AnnouncementData): Announcement {
    const announcement = new Announcement();
    announcement.title = announcementData.title;
    announcement.innerHTML = this.urlify(announcementData.text);
    return announcement;
  }

  urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function (url) {
      return '<a href="' + url + '" target="_blank">' + url + '</a>';
    });
  }

}
