// import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { CheckBoxComponent } from './checkBox/checkBox.component';
import { CrudComponent } from './crud/crud.component';
import { UpdateComponent } from './crud/update/update.component';
import { LogInComponent } from './logIn/logIn.component';
import { ParentComponent } from './parent/parent.component';
import { SignUpComponent } from './signUp/signUp.component';
import { UserDetailComponent } from './userDetail/userDetails.component';
import { UserNameComponent } from './userName/userName.component';
import { WelcomePageAuthComponent } from './welcomePage-auth/welcomePage-auth.component';
import { WelcomePageComponent } from './welcomePage/welcomePage.component';


export const routes: Routes = [
  {
  path:'',
  component:LogInComponent
  },

  {
    path:'signup',
    component:SignUpComponent
  },
  {
    path:"welcome",
    canActivate:[AuthenticationGuard],
    component:WelcomePageComponent
  },
  {
    path:"welcome-auth",
    component:WelcomePageAuthComponent
  },
  {

    path:'username',
    component:UserNameComponent
  },
  {
    path:'userdetail',
    component:UserDetailComponent
  },
  {
    path:'userdetail/:id',
    component:UserDetailComponent
  },
  {
    path:'parent',
    component:ParentComponent
  },
  {
    path:'checkBox',
    component:CheckBoxComponent
  },
  {
    path:'crud',
    component:CrudComponent
  },
  {
    path:'crud/update',
    component:UpdateComponent
  }

];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
