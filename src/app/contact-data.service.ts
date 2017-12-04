import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";



@Injectable()
export class ContactDataService {

    contacts = [];

  constructor(private http: HttpClient) {
      //get all contacts from backend
      //in backend use route api/getContacts to echo contents of contacts table to
      this.contacts.concat(this.http
          .get('api/getContacts'));
  }

  getContacts(){
    return this.contacts;
  }

  addContact(name: string, email: string, forComp: number){
    var newContact = {name, email, forComp};
    this.contacts.push(newContact);
    //api/setContacts in backend to update the table
      this.http.post('api/setContacts',this.contacts);
  }


}
