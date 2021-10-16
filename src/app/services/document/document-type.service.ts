import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExcelService } from '../excel/excel.service';
import { DocType } from 'src/app/models/doc-type';
import { DocumentTypeData as DocTypeData } from 'src/app/dto/doc-type-data';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypeService {

  constructor(private excelService: ExcelService) { }

  getAllDocumentTypes(): Observable<DocType[]> {
    return this.loadDocumentTypes()
      .pipe(
        map(docTypeDataList => docTypeDataList.map(docTypeData => this.processDocTypeData(docTypeData)))
      );
  }

  getDocumentType(types: string): Observable<DocType> {
    return this.loadDocumentTypes()
      .pipe(
        map(docTypeDataList => docTypeDataList
          .map(docTypeData => this.processDocTypeData(docTypeData))
          .filter(docType => types.indexOf(docType.type) !== -1)
          .shift())
      );
  }

  loadDocumentTypes(): Observable<DocTypeData[]> {
    return this.excelService.getDataFromExcelSheet('assets/data/ovana-data.xlsx', 'document-types')
      .pipe(
        map(excelRows => excelRows.map(excelRow => this.excelRowToDocTypeData(excelRow)))
      );
  }

  excelRowToDocTypeData(excelRow: any): DocTypeData {
    return {
      type: excelRow['Type'],
      displayName: excelRow['Display Name'],
      folder: excelRow['Folder'],
      description: excelRow['Description']
    }
  }


  processDocTypeData(docTypeData: DocTypeData): DocType {
    const docType = new DocType();
    docType.type = docTypeData.type;
    docType.displayName = docTypeData.displayName;
    docType.folder = docTypeData.folder;
    docType.description = docTypeData.description;
    return docType;
  }
}
