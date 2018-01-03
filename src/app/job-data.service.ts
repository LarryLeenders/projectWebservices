import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class JobDataService {

    jobs = [];

  constructor(private http: HttpClient) {
      this.http.get('http://localhost:8000/api/getJobsForSwipe').subscribe(data =>{
         // console.log(data);
          for(var i = 0; i < Array.prototype.slice.call(data).length; i++) {
              /*console.log(i);
              console.log(data[i].ID);*/
              this.jobs.push({title: data[i].title, description: data[i].description, companyname: data[i].companyname, identifier: data[i].ID});
          }
      });
      console.log("sent get request");
  }

  getJobs(){
      return this.jobs;
  }


  addContact(title: string, description: string, companyID: number, contactID: number){
      var newJob = {title, description, companyID, contactID};
      this.jobs.push(newJob);
      //api/setContacts in backend to update the table
      this.http.post('http://127.0.0.1/setContacts',this.jobs);
      //this.contacts should be reloaded
      this.jobs = [];
      this.http.get('http://localhost:8000/api/getJobsForSwipe').subscribe(data =>{
          //console.log(data);
          for(var i = 0; i < Array.prototype.slice.call(data).length; i++) {
             /* console.log(i);
              console.log(data[i].title);*/
              this.jobs.push({title: data[i].title, description: data[i].description, companyname: data[i].companyname, identifier: data[i].ID});
          }
      });
  }
}
