import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {

  @Input() omschrijving : string;
  @Input() titel : string;
  @Input() locatie : string;
  @Input() identifier : number;
  hidden : boolean;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.hidden = false;
  }

  dismiss(){
    console.log("deleting");
    console.log(this.identifier);
    //TODO: inbouwen van ondersteuning voor userID
    this.http.get('http://localhost:8000/api/dismissJob/'+this.identifier).subscribe(data => {
        console.log(data);
    });
    this.hidden = true;
    //window.location.reload();
  }

  save(){
    console.log("saving");
    console.log(this.identifier);
    //TODO: inbouwen van ondersteuning voor userID
    this.http.get('http://localhost:8000/api/likeJob/'+this.identifier).subscribe(data => {
        console.log(data);
    });
    this.hidden = true;
   // window.location.reload();
  }
}
