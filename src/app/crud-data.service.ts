import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CrudDataService {
    maxCompID = -1;
    maxContID = -1;
    jobs = [];

    constructor(private http: HttpClient) {
        this.http.get('http://localhost:8000/api/getJobsForCrud').subscribe(data =>{
            for(var i = 0; i < Array.prototype.slice.call(data).length; i++) {
                this.jobs.push({title: data[i].title, description: data[i].description, compidentifier: data[i].companyID, contactidentifier: data[i].contactID, jobID: data[i].jobID});
            }
        });
        this.getMaxCompID();
        this.getMaxContID();
    }

    refreshJobs(){
        this.jobs = [];
        this.http.get('http://localhost:8000/api/getJobsForCrud').subscribe(data =>{
            for(var i = 0; i < Array.prototype.slice.call(data).length; i++) {
                this.jobs.push({title: data[i].title, description: data[i].description, compidentifier: data[i].companyID, contactidentifier: data[i].contactID, jobID: data[i].jobID});
            }
        });
    }

    getJobs(){
        return this.jobs;
    }

    getCompID(){
        return this.maxCompID;
    }

    getContID(){
        return this.maxContID;
    }

    getMaxCompID(){
        this.http.get('http://localhost:8000/api/getMaxCompID').subscribe(
            data =>{
                this.maxCompID = data[0].ID;
                //console.log(this.maxCompID);
            }
        );
    }

    getMaxContID(){
        this.http.get('http://localhost:8000/api/getMaxContID').subscribe(
            data =>{
                this.maxContID = data[0].ID;
                //console.log(this.maxContID);
            }
        );
    }
}
