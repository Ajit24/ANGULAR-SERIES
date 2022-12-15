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

getData(val:any){
  console.log(val)
}
getMouse(over:any){
  console.log(over)
}
}
