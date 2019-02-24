import { Component, OnInit } from '@angular/core';
import { Document } from '../../../models/document';
import { DocumentService } from 'src/app/services/document/document.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  documents: Document[]
  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.documentService.getDocuments().subscribe(
      documents => this.documents = documents);
  }

}
