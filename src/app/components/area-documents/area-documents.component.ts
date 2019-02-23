import { Component, OnInit } from '@angular/core';
import { Document } from '../../models/document';
import { DocumentService } from '../../services/document/document.service';
@Component({
  selector: 'app-area-documents',
  templateUrl: './area-documents.component.html',
  styleUrls: ['./area-documents.component.css']
})
export class AreaDocumentsComponent implements OnInit {
  documents: Document[];

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.documentService.getAreaDocuments().subscribe(
      documents => this.documents = documents);
  }

}
