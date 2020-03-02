import { Observable } from 'rxjs';
import { Meeting } from 'src/app/models/meeting';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class MeetingRetrieverService {
    abstract getMeetings(): Observable<Meeting[]>;
}