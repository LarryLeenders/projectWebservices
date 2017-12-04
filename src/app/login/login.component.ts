import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  needToSignup = false;
  buttonstring = "I have not made an account yet";

  constructor() { }

  ngOnInit() {
  }

  Switch(){
    if(this.needToSignup == true){
      this.needToSignup = false;
      this.buttonstring = "I have not made an account yet";
    }else{
      this.needToSignup = true;
      this.buttonstring = "I have already made an account";
    }
  }

}
