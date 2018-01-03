import { Component, OnInit } from '@angular/core';
import {CrudDataService} from "../crud-data.service";
import { HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
    toAddTitle = "";
    toAddDescription = "";
    toAddCompID= 0;
    toAddContID = 0;
    maxIDcomp = 0;
    maxIDcont = 0;
  allJobs = [];
  displayAddForm = false;

  constructor(private dataservice: CrudDataService, private http: HttpClient) {}

  ngOnInit() {
      //DE MAXES ZIJN NIET CORRECT INGESTELD ONLOAD?
      this.maxIDcomp = this.dataservice.getCompID();
      this.maxIDcont = this.dataservice.getContID();
    this.allJobs = this.dataservice.getJobs();

  }


  delete(id: number){
      //console.log("deleting "+id);
      this.http.delete('http://localhost:8000/api/deleteJobFromCrud/'+id).subscribe(data => {
         // console.log(data);
      });
      this.dataservice.refreshJobs();
      this.allJobs = this.dataservice.getJobs();
  }


  update(id: number, index: number){
      console.log("updating "+this.allJobs[index].jobID);
      console.log(JSON.stringify(this.allJobs[index]));
      //inputs nog checken
     this.http.patch('http://localhost:8000/api/updateJobFromCrud/'+id, this.allJobs[index]).subscribe(data => {
          console.log(data);
      });
      this.dataservice.refreshJobs();
      this.allJobs = this.dataservice.getJobs();
  }

  add(){
    if(!this.displayAddForm){
        this.displayAddForm = true;
        this.maxIDcomp = this.dataservice.maxCompID;
        //console.log(this.maxIDcomp);
        this.maxIDcont = this.dataservice.maxContID;
        //console.log(this.maxIDcont);
    }else{
        //waardes uit form inlezen en doorsturen naar backend
        this.displayAddForm = false;
        var toAdd = {title:this.toAddTitle, description:this.toAddDescription, compID:this.toAddCompID, contID:this.toAddContID};
        this.http.put("http://localhost:8000/api/addJobFromCrud",toAdd);
        console.log(toAdd);
        this.toAddContID = 1;
        this.toAddCompID = 1;
        this.toAddDescription = "";
        this.toAddTitle = "";
        this.dataservice.refreshJobs();
        this.allJobs = this.dataservice.getJobs();
    }
  }
}
