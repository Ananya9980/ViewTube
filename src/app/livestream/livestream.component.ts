import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-livestream',
  templateUrl: './livestream.component.html',
  styleUrls: ['./livestream.component.css']
})
export class LivestreamComponent implements OnInit {
  getLivestreamForm: FormGroup;

  constructor(formBuilder:FormBuilder) 
  {
    this.getLivestreamForm=formBuilder.group({
      'title':new FormControl('',Validators.required),
      'startDate':new FormControl('',Validators.required),
      'startTime':new FormControl('',Validators.required),
      'toTime':new FormControl('',Validators.required),
      'toDate':new FormControl('',Validators.required)
    
    });
   }

  ngOnInit(): void {
  }

  submitLivestreamForm()
  {
    console.log(this.getLivestreamForm.value);
    alert('Your live stream event is scheduled successfully');
  }

}
