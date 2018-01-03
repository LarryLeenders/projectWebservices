import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";



@Injectable()
export class ContactDataService {

    contacts = [];

  constructor(private http: HttpClient) {
      //get all contacts from backend
      //in backend use route api/getContacts to echo contents of contacts table to
      this.http.get('http://localhost:8000/api/getContacts').subscribe(data =>{
          console.log(data[0]);
          for(var i = 0; i < Array.prototype.slice.call(data).length; i++) {
              console.log(i);
              console.log(data[i].title);
              this.contacts.push({title: data[i].title, description: data[i].description, companyname: data[i].companyname, companyIdentifier:data[i].companyID, jobIdentifier:data[i].jobID})
          }

      });
      console.log("sent get request");
  }

  getContacts(){
    return this.contacts;
  }

  addContact(name: string, email: string, forComp: number){
    var newContact = {name, email, forComp};
    this.contacts.push(newContact);
    //api/setContacts in backend to update the table
      this.http.post('localhost:8000/setContacts',this.contacts);
    //TODO: this.contacts should be reloaded
  }


}
