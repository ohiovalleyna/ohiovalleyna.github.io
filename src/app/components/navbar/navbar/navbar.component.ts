import { Component, OnInit } from '@angular/core';
import { DocType } from 'src/app/models/doc-type';
import { DocumentTypeService } from 'src/app/services/document/document-type.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  docTypes: DocType[];
  constructor(private documentTypeService: DocumentTypeService) { }

  ngOnInit() {
    this.documentTypeService.getAllDocumentTypes().then(
      docTypes => this.docTypes = docTypes);
  }
}
