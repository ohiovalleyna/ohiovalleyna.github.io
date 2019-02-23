import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetingListComponent } from './components/meeting-list/meeting-list.component';
import { HomeComponent } from './components/home/home.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { AreaDocumentsComponent } from './components/area-documents/area-documents.component';

const routes : Routes = [
  { path: 'meeting-list', component : MeetingListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'area-documents', component: AreaDocumentsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ] 
})
export class AppRoutingModule { }
