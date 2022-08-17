import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MyaccountService } from './myaccount.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private serice:MyaccountService){}
  
  canActivate(){
  //  console.log('Auth Guard Validation: ' + this.MyaccountService.isValidated);
     return this.serice.isValidated;
  }  
  
}
