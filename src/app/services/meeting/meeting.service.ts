import { Injectable } from '@angular/core';
import { Meeting } from '../../models/meeting';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  getMeetings(): Observable<Meeting[]> {
    return this.http.get('assets/data/meetings.json')
      .pipe(map(response => response as Meeting[]));
  }

  constructor(private http: HttpClient) { }
}
