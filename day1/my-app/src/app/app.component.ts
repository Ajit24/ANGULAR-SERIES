import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  color = 'sdgsd';

products = [
{
  "id": "1",
  "name": "Lee Davenport",
  "phone": "(145) 824-1316",
  "email": "orci.in@google.com",
  "country": "Russian Federation",
  "numberrange": "9"
},
{
  "id": "2",
  "name": "Wing Waters",
  "phone": "1-613-672-2538",
  "email": "vitae@aol.couk",
  "country": "Norway",
  "numberrange": "4"
},
{
  "id": "3",
  "name": "Harding Guy",
  "phone": "(646) 788-8604",
  "email": "risus@google.net",
  "country": "Ireland",
  "numberrange": "4"
},
{
  "id": "4",
  "name": "Ross Mcmahon",
  "phone": "(260) 946-3146",
  "email": "accumsan.convallis.ante@google.couk",
  "country": "Italy",
  "numberrange": "5"
},
{
  "id": "5",
  "name": "Dieter Kennedy",
  "phone": "(423) 539-0318",
  "email": "sodales.elit@aol.edu",
  "country": "United Kingdom",
  "numberrange": "7"
},
{
  "id": "6",
  "name": "ajit pandey",
  "phone": "95764-34444",
  "email": "ajit.elit@aol.edu",
  "country": "india",
},
{
  "id": "7",
  "name": "shakti dev",
  "phone": "95764-34343",
  "email": "shakti.dev@aol.edu",
  "country": "india",
},
{
  "id": "8",
  "name": "santu malakar",
  "phone": "454545-34444",
  "email": "santu.elit@aol.edu",
  "country": "india",
},
{
  "id": "9",
  "name": "jeetu jha",
  "phone": "36456-34444",
  "email": "jeetu.elit@aol.edu",
  "country": "india",
},
{
  "id": "10",
  "name": "akash",
  "phone": "99444-37654",
  "email": "akash.r@act.edu",
  "country": "india",
}
]

  // login={
  //   "firstname":"",
  //   "lastname":"",
  //   "email":"",
  //   "password":""
  // }
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
// users = [
//     {name:'ajit', email: 'ajit@xyzgmail.com', phone:'12345678', socialAccounts:['facebook', 'insta']},
//     {name:'shakti', email: 'shakti@xyzgmail.com', phone:'12345678', socialAccounts:['facebook', 'insta']},
//     {name:'akash', email: 'akash@xyzgmail.com', phone:'12345678', socialAccounts:['facebook', 'insta']},
//     {name:'santu', email: 'santu@xyzgmail.com', phone:'12345678', socialAccounts:['facebook', 'insta']}
//   ]
// }

// make todo list 
// list:any[]=[]
// addTask(item:string)
// {
// this.list.push({id:this.list.length, name:item})
// console.log(this.list)
// }
// // to remove the list
// removeTask(id: number){
//   console.log(id)
// this.list=this.list.filter(item=>item.id !==id)
// }


//--------- form in NG -------------

displayValue=''
submit(value:any){
  console.log("form submited", value)
  // this.displayValue=value
}
defaultcountry='india'

// -------- search & filter


searchText='';


}
