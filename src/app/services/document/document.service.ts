import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';

import { Document } from '../../models/document';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  getDocuments(...types: string[]): Observable<Document[]> {
    return this.http.get('assets/data/documents.json')
      .pipe(
        map((documents: Document[]) => documents
          .filter(document => types.length === 0 || types.indexOf(document.type) !== -1)
          .map(document => {

            document.files.forEach(file => file.fileName = `${document.baseUrl}/${file.fileName}`)
            return document;
          }))
      );
  }

  constructor(private http: HttpClient) { }
}


