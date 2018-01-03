import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserDataService {

    users = [];

    constructor(private http: HttpClient) {
        this.users.concat(this.http
            .get('127.0.0.1/getUsers'));
    }

    getUsers(){
        return this.users;
    }

    addContact(title: string, description: string, companyID: number, contactID: number){
        var newUser = {title, description, companyID, contactID};
        this.users.push(newUser);
        //api/setContacts in backend to update the table
        this.http.post('127.0.0.1/setContacts',this.users);
        //this.contacts should be reloaded
        this.users = [];
        this.users.concat(this.http
            .get('127.0.0.1/getUsers'));
    }
}
