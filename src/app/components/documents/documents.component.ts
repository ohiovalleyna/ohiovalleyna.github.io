import { Component, OnInit } from '@angular/core';
import { Document, File } from '../../models/document';
import { DocumentService } from '../../services/document/document.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app--documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  documents: Document[];
  private documentType: string;

  constructor(private documentService: DocumentService, 
    private route: ActivatedRoute,
    private router: Router) { 
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.documentType = params['document-type'];
    });
    this.documentService.getDocuments().subscribe(
      documents => this.documents = documents.filter(documentType => documentType.type == this.documentType));
  }
}
