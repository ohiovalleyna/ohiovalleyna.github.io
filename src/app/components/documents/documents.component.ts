import { Component, OnInit } from '@angular/core';
import { Document, File } from '../../models/document';
import { DocumentService } from '../../services/document/document.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-documents',
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
    this.route.params
      .pipe(
        map(params => this.documentType = params['document-type'])
      )
      .subscribe(docType => {
        this.documentType = docType;
        this.documentService.getDocuments(docType).subscribe(
          documents => this.documents = documents
        )
      });
  }
}
