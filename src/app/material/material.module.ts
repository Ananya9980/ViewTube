import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';

import {MatCardModule} from '@angular/material/card';

import { MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatOptionModule } from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRippleModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';




const materialComponent=[ MatToolbarModule,MatIconModule,MatButtonModule,MatInputModule,
MatFormFieldModule,MatChipsModule,MatCardModule,MatSidenavModule,MatListModule,MatTooltipModule
,MatOptionModule,MatMenuModule,MatGridListModule,MatRadioModule,MatSelectModule,
MatCheckboxModule,
MatRippleModule,
MatNativeDateModule,
MatDatepickerModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    
    materialComponent,

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  exports:[materialComponent]
})
export class MaterialModule { }
