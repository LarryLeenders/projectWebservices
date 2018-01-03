import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {

@Input() contact : {title: string, name: string, forComp: string, companyIdentifier: number, jobIdentifier: number};

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  openLog(){
    //volledige uitwisseling halen vanuit databank
    //ook voor zorgen dat er communicatie kan gebeuren tussen bedrijf & applicant
  }
  delete(){
    console.log("deleting");
    console.log(this.contact.jobIdentifier);
    this.http.delete('http://localhost:8000/api/deleteContact/'+this.contact.jobIdentifier).subscribe(data => {
      console.log(data);
    });
  }
}
