import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  // signupUsers:any[]=[];
  // signupObj:any={
  //   userName:'',
  //   email: '',
  //   password:''
  // }

  // loginObj:any={
  //   userName:'',
  //   password:''
  // }

  // onSignUp(){
  //   this.signupUsers.push(this.signupObj);
  //   localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers))
     
  //  this.signupObj={
  //     userName:'',
  //     email: '',
  //     password:''
  //   }
  
  // }
    
    //   onLogin(){
  
    //     debugger;
    // const isUserExist = this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password)
    // if( isUserExist != undefined){
    //   alert('user login successfully')
    // }else{
    //   alert('wrong credentials ... Please Check ')
    // }
    //   }




//   constructor(){}

//   ngOnInit(): void {
//     // const localData = localStorage.getItem('signupUsers')
//     // if(localData != null){
//     //   this.signupUsers= JSON.parse(localData);
//     // }

// }
}
