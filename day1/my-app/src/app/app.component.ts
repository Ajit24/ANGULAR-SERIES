import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  color = 'sdgsd';
// obj = {
//   name:'ajit',
//   age:'20'
// }
// arr = ['ajit', 'shakti', 'santu']
//  currentVal = ""


// get input values 
// getVal(val: any)
// {
//   console.log(val)
//   this.currentVal = val
// }
 

// form in angular : 
// getUserValue(value: any){
//   console.log(value)
// }

// ----make and call a fn ----------------
// getName(getName:any){
//   alert(getName)
// }

//  --- events in NG -------

// getData(val:any){
//   console.log(val)
// }
// getMouse(over:any){
//   console.log(over)
// }

// get input values -------------
// displayVal= ''
// getValue(val:string){
// console.log(val)
// this.displayVal=val
// }

// counter-app
// count = 0
// counter(type:string){
// type==='add'? this.count++ : this.count--;
// // this.count++;
// }
// styles
// titles= ' components styles in Angular'

// property binding/ interpo
// name= "ajit"
// disable= true;

// ----- loop in NG ---------
// users = ["ajit", "shakti", "akash", "santu"]
// usersDetails = [
//   {name:'ajit', email: 'ajit@xyzgmail.com', phone:'12345678'},
//   {name:'shakti', email: 'shakti@xyzgmail.com', phone:'12345678'},
//   {name:'akash', email: 'akash@xyzgmail.com', phone:'12345678'},
//   {name:'santu', email: 'santu@xyzgmail.com', phone:'12345678'}
// ]

// nested loop in ng 
users = [
    {name:'ajit', email: 'ajit@xyzgmail.com', phone:'12345678', socialAccounts:['facebook', 'insta']},
    {name:'shakti', email: 'shakti@xyzgmail.com', phone:'12345678', socialAccounts:['facebook', 'insta']},
    {name:'akash', email: 'akash@xyzgmail.com', phone:'12345678', socialAccounts:['facebook', 'insta']},
    {name:'santu', email: 'santu@xyzgmail.com', phone:'12345678', socialAccounts:['facebook', 'insta']}
  ]
}
