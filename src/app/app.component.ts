import { Component } from '@angular/core';
import { ContactDataService } from "./contact-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ContactDataService]
})
export class AppComponent {
  title = 'FindIt';
  jobsActive = true;

  setActive(par:string){
    if(par === 'jobs'){
      this.jobsActive = true;
    }else{
      this.jobsActive = false;
    }
  }
}
