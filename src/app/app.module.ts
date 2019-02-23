import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimePipe } from './pipes/time/time.pipe';
import { SearchPipe } from './pipes/search/search.pipe';
import { AddressPipe } from './pipes/address/address.pipe';
import { MeetingListComponent } from './components/meeting-list/meeting-list.component';
import { HomeComponent } from './components/home/home.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { VisibleTagPipe, InvisibleTagPipe } from './pipes/tag/tag.pipe';
import { DayOfWeekPipe } from './pipes/dayofweek/dayofweek.pipe';
import { AreaDocumentsComponent } from './components/area-documents/area-documents.component';

@NgModule({
  declarations: [
    AppComponent,
    TimePipe,
    SearchPipe,
    AddressPipe,
    MeetingListComponent,
    HomeComponent,
    CalendarComponent,
    VisibleTagPipe,
    InvisibleTagPipe,
    DayOfWeekPipe,
    AreaDocumentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
