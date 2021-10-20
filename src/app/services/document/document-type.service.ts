import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocType } from 'src/app/models/doc-type';
import { DocumentTypeData as DocTypeData } from 'src/app/dto/doc-type-data';
import { map } from 'rxjs/operators';
import * as ExcelInterface from '../../../assets/scripts/excel-interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypeService {

  constructor() { }

  getAllDocumentTypes(): Promise<DocType[]> {
    return this.loadDocumentTypes()
      .then(docTypeDataList => docTypeDataList.map(docTypeData => this.processDocTypeData(docTypeData)));
  }

  getDocumentType(types: string): Promise<DocType> {
    return this.loadDocumentTypes()
      .then(docTypeDataList => docTypeDataList
          .map(docTypeData => this.processDocTypeData(docTypeData))
          .filter(docType => types.indexOf(docType.type) !== -1)
          .shift());
  }

  loadDocumentTypes(): Promise<DocTypeData[]> {
    return ExcelInterface.getDataFromExcelSheet('document-types', environment.excelFile)
      .then(excelRows => excelRows.map(excelRow => this.excelRowToDocTypeData(excelRow)));
  }

  excelRowToDocTypeData(excelRow: any): DocTypeData {
    return {
      type: excelRow['Type'],
      displayName: excelRow['Display Name'],
      description: excelRow['Description'],
      link: excelRow['Link']
    }
  }


  processDocTypeData(docTypeData: DocTypeData): DocType {
    const docType = new DocType();
    docType.type = docTypeData.type;
    docType.displayName = docTypeData.displayName;
    docType.link = docTypeData.link;
    docType.description = docTypeData.description;
    return docType;
  }
}
