import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MyaccountService } from './myaccount.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private myserv:MyaccountService){}
 
  canActivate(){
    return this.myserv.guarddetails.allowinglive;
  }
  
}
