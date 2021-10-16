import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fromEvent, Observable, of, Subscriber } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  constructor(private http: HttpClient) { }
  readonly loadedFiles: Map<string, XLSX.WorkBook> = new Map();

  getDataFromExcelSheet(worksheetName: string, fileName: string = environment.excelFile): Observable<any> {
    return this.getWorkbook(fileName)
      .pipe(
        map(workbook => XLSX.utils.sheet_to_json(workbook.Sheets[worksheetName]))
      );
  }

  getWorkbook(fileName: string): Observable<XLSX.WorkBook> {
    if (this.loadedFiles.has(fileName)) {
      return of(this.loadedFiles.get(fileName));
    }
    return this.http.get(fileName, { responseType: 'blob' })
      .pipe(
        flatMap(file => this.readFile(file)),
        map(ev => {
          let binary = "";
          let bytes = new Uint8Array((<any>ev.target).result);
          let length = bytes.byteLength;
          for (let i = 0; i < length; i++) {
            binary += String.fromCharCode(bytes[i]);
          }
          const workbook: XLSX.WorkBook = XLSX.read(binary, { type: 'binary', cellDates: true, cellStyles: true });
          this.loadedFiles.set(fileName, workbook);
          return workbook;
        })
      );
  }


  readFile(file: Blob): Observable<ProgressEvent> {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);

    return fromEvent<ProgressEvent>(fileReader, 'load');
  }
}
