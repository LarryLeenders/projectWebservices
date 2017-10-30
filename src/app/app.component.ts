import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TEST PROJECT';
  jobsActive = true;

  setActive(par:string){
    if(par === 'jobs'){
      this.jobsActive = true;
    }else{
      this.jobsActive = false;
    }
  }
}
