import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyaccountService } from '../myaccount.service';

@Component({
  selector: 'app-accountlogin',
  templateUrl: './accountlogin.component.html',
  styleUrls: ['./accountlogin.component.css']
})
export class AccountloginComponent implements OnInit {
  emailid: string = 'a';
  password: string = 'a';

  constructor(private myaccountservice: MyaccountService, private route: Router,private router:ActivatedRoute) { }

  loginCheck() {

    if (this.myaccountservice.validate(this.emailid, this.password)) {
      this.route.navigate(['video']);
    }
  }

  registerclick() {

    if (this.myaccountservice.validate(this.emailid, this.password)) {
      this.route.navigate(['../register'],{relativeTo:this.router});
    }
  }
  ngOnInit(): void {
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

}
