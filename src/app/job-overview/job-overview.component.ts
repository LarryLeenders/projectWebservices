import { Component, OnInit } from '@angular/core';
import {JobDataService} from "../job-data.service";

@Component({
  selector: 'app-job-overview',
  templateUrl: './job-overview.component.html',
  styleUrls: ['./job-overview.component.css']
})
export class JobOverviewComponent implements OnInit {
  jobs = [];

  constructor(private dataservice: JobDataService) { }

  ngOnInit() {
      this.jobs = this.dataservice.getJobs();
  }

}
