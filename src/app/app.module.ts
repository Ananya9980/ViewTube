import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VideoContentComponent } from './video-content/video-content.component';
import { ChipsBarComponent } from './chips-bar/chips-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from './material/material.module';
import { StudioUploadComponent } from './studio-upload/studio-upload.component';
import { AppRoutingModule } from './app-routing.module';
// import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import { LivestreamComponent } from './livestream/livestream.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { AccountregisterComponent } from './accountregister/accountregister.component';
import { AccountloginComponent } from './accountlogin/accountlogin.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoContentComponent,
    ChipsBarComponent,
    ToolbarComponent,
    StudioUploadComponent,
    UploadComponent,
    LivestreamComponent,
    AccountregisterComponent,
    AccountloginComponent,
    AccountComponent
  ],
  imports: [
    
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule  ,
    ReactiveFormsModule        //always write this after AppRoutingModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
