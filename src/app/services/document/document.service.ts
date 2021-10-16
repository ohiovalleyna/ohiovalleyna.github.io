import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';

import { Document } from '../../models/document';
import { ExcelService } from '../excel/excel.service';
import { DocumentData } from 'src/app/dto/document-data';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private excelService: ExcelService) { }

  getDocuments(...types: string[]): Observable<Document[]> {
    return this.excelService.getDataFromExcelSheet('documents')
      .pipe(
        map(excelRows => excelRows.map(excelRow => this.excelRowToDocumentData(excelRow))
          .filter(document => types.length > 0 && types.indexOf(document.type) !== -1)),
        map(documentDataList => documentDataList.map(documentData => this.processDocumentData(documentData)))
      );
  }

  excelRowToDocumentData(excelRow: any): DocumentData {
    return {
      type: excelRow['Type'],
      displayName: excelRow['Display Name'],
      link: excelRow['Link']
    }
  }

  processDocumentData(documentData: DocumentData): Document {
    const document: Document = new Document();
    document.displayName = documentData.displayName;
    document.link = documentData.link;
    return document;
  }
}


