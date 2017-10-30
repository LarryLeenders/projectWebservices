import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {

  @Input() omschrijving : string; //alle 3 inlezen uit databank
  @Input() titel : string;
  @Input() locatie : string;

  constructor() { }

  ngOnInit() {
  }

  dismiss(){
    //aangeven in database dat user niet geïnteresseerd is in deze job
  }

  save(){
    //aangeven in database dat user geïnteresseerd is in deze job
  }
}
