import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { JobOverviewComponent } from './job-overview/job-overview.component';
import { ContactOverviewComponent } from './contact-overview/contact-overview.component';
import { JobCardComponent } from './job-overview/job-card/job-card.component';
import { ContactCardComponent } from './contact-overview/contact-card/contact-card.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { CrudComponent } from './crud/crud.component';


const appRoutes : Routes = [
    {path: '', component:HomeComponent},
    {path: 'jobs', component:JobOverviewComponent},
    {path: 'contacts', component:ContactOverviewComponent},
    {path: 'login', component:LoginComponent},
    {path: 'crud', component:CrudComponent},
    {path: '*', component:HomeComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    JobOverviewComponent,
    ContactOverviewComponent,
    JobCardComponent,
    ContactCardComponent,
    LoginComponent,
    HomeComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
