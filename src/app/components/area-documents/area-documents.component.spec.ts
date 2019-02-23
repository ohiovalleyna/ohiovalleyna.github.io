import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDocumentsComponent } from './area-documents.component';

describe('AreaDocumentsComponent', () => {
  let component: AreaDocumentsComponent;
  let fixture: ComponentFixture<AreaDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
