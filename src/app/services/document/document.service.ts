import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import * as ExcelInterface from '../../../assets/scripts/excel-interface';
import { Document } from '../../models/document';
import { DocumentData } from 'src/app/dto/document-data';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor() { }

  getDocuments(...types: string[]): Promise<Document[]> {
    return ExcelInterface.getDataFromExcelSheet('documents', environment.excelFile)
      .then(excelRows => excelRows.map(excelRow => this.excelRowToDocumentData(excelRow))
        .filter(document => types.length > 0 && types.indexOf(document.type) !== -1))
      .then(documentDataList => documentDataList.map(documentData => this.processDocumentData(documentData)));
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


