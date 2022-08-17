import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyaccountService } from '../myaccount.service';

@Component({
  selector: 'app-accountregister',
  templateUrl: './accountregister.component.html',
  styleUrls: ['./accountregister.component.css']
})
export class AccountregisterComponent implements OnInit {
  regform!:FormGroup;

  constructor(formbuilder:FormBuilder,private router:ActivatedRoute, private myaccserv:MyaccountService,private route:Router) 
  {
    this.regform=formbuilder.group({
    email:new FormControl('', [Validators.required]),
    pass:new FormControl('',Validators.required),
    confpass:new FormControl('',Validators.required),
    allowinglive:new FormControl(false)

    })
   }

  ngOnInit(): void { }

  registerclick(){
    this.myaccserv.validatereg(this.regform.value);
    if(this.myaccserv.regvalidated)
    {
      this.route.navigate(['../login'],{relativeTo:this.router});
      console.error('a to check reg click');
    }
    console.log(this.myaccserv.regvalidated)
  }

  loginclick(){
    this.myaccserv.validatereg(this.regform.value);
    if(this.myaccserv)
    {
      this.route.navigate(['../login'],{relativeTo:this.router});
    }
    console.log(this.myaccserv.regvalidated)
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  //password
 hide = true;

}
