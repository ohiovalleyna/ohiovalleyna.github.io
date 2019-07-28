import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Document } from '../../models/document';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  getDocuments(): Observable<Document[]> {
    return this.http.get('assets/data/documents.json')
      .pipe(map(response => response as Document[]));
  }

  constructor(private http: HttpClient) { }
}


