import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignUpComponent } from './signUp/signUp.component';




import { routes } from './app-routing.module';
import { LogInComponent } from './logIn/logIn.component';
import { WelcomePageComponent } from './welcomePage/welcomePage.component';
import { UserNameComponent } from './userName/userName.component';
import { UserDetailComponent } from './userDetail/userDetails.component';
import { AppService } from './app.service';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { CheckBoxComponent } from './checkBox/checkBox.component';
import { CrudComponent } from './crud/crud.component';
import { UpdateComponent } from './crud/update/update.component';
import { WelcomePageAuthComponent } from './welcomePage-auth/welcomePage-auth.component';



// AUTHO MODULE
import { AuthModule } from '@auth0/auth0-angular';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    WelcomePageComponent,
    UserNameComponent,
    UserDetailComponent,
    ParentComponent,
    ChildComponent,
    CheckBoxComponent,
    CrudComponent,
    UpdateComponent,
    WelcomePageAuthComponent

  ],

  imports: [
    RouterModule.forRoot(routes,{useHash:true}),
    BrowserModule,
    // AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
 

    AuthModule.forRoot({
      domain: 'dev-23olbpw8.us.auth0.com',
      clientId: 'zNlp7oVLcodeTzHtcdoRB6syfPKjfpZk'
    }),
   


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
