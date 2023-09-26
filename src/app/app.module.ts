import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {StudentsComponent} from './learning/pages/students/students.component';
import {StudentsService} from "./learning/services/students.service";
import { StudentFormComponent } from './learning/components/student-form/student-form.component';

@NgModule({
  declarations: [AppComponent, StudentsComponent, StudentFormComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
