import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MyaccountService } from '../myaccount.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  

  constructor(private mysercv:MyaccountService,private route:Router) 
  { }
  videoclick(){
    

      if (!this.mysercv.regvalidated) {
        this.route.navigate(['account']);
        console.log('hi');
      }
  }

  ngOnInit(): void {
  }

}
