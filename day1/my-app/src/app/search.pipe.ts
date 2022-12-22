import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
   if(!value) return null;
   if(!args) return value;
    args= args.toLowerCase();
   return value.filter((products:any)=>{
    return JSON.stringify(products).toLowerCase().includes(args);
   })
  }

}
