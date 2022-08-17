import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyaccountService {
  regvalidated :boolean =false;
  isValidated: boolean = false;
  guarddetails:any;

  constructor() { }

  validatereg(reg:any){
    if((reg.email==='')|| (reg.pass==='')|| (reg.confpass===''))
    {
      this.regvalidated=false;
    }
    else{
      this.regvalidated=true;
    }
    this.guarddetails=reg;
    console.log('Register allowing live'+this.guarddetails.allowinglive)
  }


  validate(email: string, password: string): boolean {
    console.log(email, password)
    if (email === '' || password === '') {
      console.log('Service : isValidated : ' + this.isValidated);
      this.isValidated = false;
    }
    else {
      this.isValidated = true;
     console.log('Service : isValidated : ' + this.isValidated);
    }
    return this.isValidated;
  }


}
