import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonInfoComponent } from './person-info/person-info.component';
import { AddressComponent } from './address/address.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { CountryComponent } from './country/country.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { JdDetailsComponent } from './jd-details/jd-details.component';
import { InterviewTypeComponent } from './interview-type/interview-type.component';
import { InterviewerComponent } from './interviewer/interviewer.component';
import { InterviewComponent } from './interview/interview.component';
import { PersonJdDetailsComponent } from './person-jd-details/person-jd-details.component';
import { PersonReferenceComponent } from './person-reference/person-reference.component';
import { PersonReferenceTypeComponent } from './person-reference-type/person-reference-type.component';
import { ResumeComponent } from './resume/resume.component';


const appRoutes: Routes = [
  
  { path: 'dashboard', component: DashboardComponent},
  { path: 'login', component: LoginComponent},
  { path: 'personInfo', component: PersonInfoComponent},
  { path: 'address', component: AddressComponent},
  { path: 'country', component: CountryComponent},
  { path: 'projectDetails', component: ProjectDetailsComponent},
  { path: 'clientDetails', component: ClientDetailsComponent},
  { path: 'jdDetails', component: JdDetailsComponent},
  { path: 'pjdDetails', component: PersonJdDetailsComponent},
  { path: 'interviewType', component: InterviewTypeComponent},
  { path: 'interviewer', component: InterviewerComponent},
  { path: 'interview', component: InterviewComponent},
  { path: 'personRefType', component: PersonReferenceTypeComponent},
  { path: 'personRef', component: PersonReferenceComponent},
  { path: 'resume', component: ResumeComponent},
  { path: '', redirectTo: 'login', pathMatch:'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    PersonInfoComponent,
    AddressComponent,
    ClientDetailsComponent,
    CountryComponent,
    ProjectDetailsComponent,
    JdDetailsComponent,
    InterviewTypeComponent,
    InterviewerComponent,
    InterviewComponent,
    PersonJdDetailsComponent,
    PersonReferenceComponent,
    PersonReferenceTypeComponent,
    ResumeComponent,
  ],
  imports: [
    BrowserModule, ChartsModule,
    HttpModule, Ng2SmartTableModule,
    FormsModule,RouterModule.forRoot(appRoutes),
    
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
