import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivestreamComponent } from './livestream/livestream.component';

import { StudioUploadComponent } from './studio-upload/studio-upload.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { UploadComponent } from './upload/upload.component';
import { AccountComponent } from './account/account.component';
import { AccountloginComponent } from './accountlogin/accountlogin.component';
import { AccountregisterComponent } from './accountregister/accountregister.component';
import { AuthGuard } from './auth.guard';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  { path: '', component: ToolbarComponent },
  {
    path: 'video', component: StudioUploadComponent,canActivate:[AuthGuard],
    children: [
      {path:'',component:UploadComponent},
      { path: 'upload', component: UploadComponent },
      { path: 'livestream', component: LivestreamComponent , canActivate:[LoginGuard]}
    ]
  },
  {path:'account',component:AccountComponent,
  children:[
    {path:'',component:AccountloginComponent},
  {path:'login',component:AccountloginComponent},
  {path:'register',component:AccountregisterComponent}
  ]
  }

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
