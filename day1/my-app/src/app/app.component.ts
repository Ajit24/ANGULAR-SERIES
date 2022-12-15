import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

// obj = {
//   name:'ajit',
//   age:'20'
// }
// arr = ['ajit', 'shakti', 'santu']
currentVal = ""
getVal(val)
{
  console.log(val)
  this.currentVal = val
}


}
