import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  signupUsers:any[]=[];
  signupObj:any={
    name:'',
    email: '',
    password:''
  }

  loginObj:any={
    name:'',
    password:''
  }

constructor(){}

ngOnInit(): void {
  
}

onSignup(){
  this.signupUsers.push(this.signupObj);
  localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers))
    }
  
    onLogin(){
  
    }
  

}
