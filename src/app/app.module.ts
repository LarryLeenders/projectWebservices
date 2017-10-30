import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JobOverviewComponent } from './job-overview/job-overview.component';
import { ContactOverviewComponent } from './contact-overview/contact-overview.component';
import { JobCardComponent } from './job-card/job-card.component';
import { ContactCardComponent } from './contact-card/contact-card.component';

@NgModule({
  declarations: [
    AppComponent,
    JobOverviewComponent,
    ContactOverviewComponent,
    JobCardComponent,
    ContactCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
