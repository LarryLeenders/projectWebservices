import { Component, OnInit } from '@angular/core';
import {ContactDataService} from "../contact-data.service";


@Component({
  selector: 'app-contact-overview',
  templateUrl: './contact-overview.component.html',
  styleUrls: ['./contact-overview.component.css'],

})
export class ContactOverviewComponent implements OnInit {


  constructor(private dataservice : ContactDataService) { }

  ngOnInit() {
  }

}
