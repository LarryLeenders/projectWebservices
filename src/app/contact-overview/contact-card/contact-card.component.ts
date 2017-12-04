import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {

  @Input() titel : string; //uit database halen
  @Input() lastMessage : string; //uit database halen

  constructor() { }

  ngOnInit() {
  }

  openLog(){
    //volledige uitwisseling halen vanuit databank
    //ook voor zorgen dat er communicatie kan gebeuren tussen bedrijf & applicant
  }
}
