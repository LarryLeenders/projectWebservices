import { Component } from '@angular/core';
import { ContactDataService } from "./contact-data.service";
import { JobDataService } from "./job-data.service";
import { UserDataService } from "./user-data.service";
import { CrudDataService } from "./crud-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ContactDataService, JobDataService, UserDataService, CrudDataService]
})
export class AppComponent {
  title = 'FindIt';

}
