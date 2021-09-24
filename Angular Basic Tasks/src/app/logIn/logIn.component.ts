import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { NavigationExtras,Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';  


import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'log-in',
  templateUrl: './logIn.component.html',
  styleUrls: ['./logIn.component.css']
})
export class LogInComponent implements OnInit {
    loginForm:any = FormGroup;
    passStatus:any = true;
    nameStatus:any = true;
    noUser:any = false;
    enpass = '12345';
    profileJson:any
    constructor(public authService:AuthService ,private formBuilder:FormBuilder ,private router:Router){}
    ngOnInit(): void {
        console.log( this.authService.isAuthenticated$ );
        // console.log(this.authService.user$ );
        // const {} = this.authService.error$;
        // console.log(this.authService);
        
        this.authService.user$.subscribe(
            (profile) =>  console.log(profile));
                // this.profileJson = JSON.stringify(profile, null, 2))
          

          console.log(this.profileJson);
          
        
        this.loginForm = this.formBuilder.group({
            name:new FormControl('',Validators.required),
            password:new FormControl('',Validators.required)
        })
        
    }

    onSubmit(){
        // console.log(this.loginForm);
        console.log(this.loginForm.controls.name.errors);
        console.log(this.loginForm.controls.password.errors);
        
        // console.log(this.loginForm.value);

        if(this.loginForm.controls.name.errors == null)
        {
              console.log("value clear");
              this.nameStatus = true;
              
        }
        else{
            console.log("error found");
            this.nameStatus = false; 
        }

        if(this.loginForm.controls.password.errors == null)
        {
              console.log("value clear");
              this.passStatus = true;
              
        }
        else{
            console.log("error found");
            this.passStatus = false; 
        }

    if(this.loginForm.invalid)
    {
        console.log("error fill the form correctly");
        return
        
    }
    else{
      let temp:any=localStorage.getItem('Users');
      console.log(temp);
      if(temp == null)
      {
          this.noUser=true;
          console.log('No User Found');
          return
          
      }
      let  users = JSON.parse(temp) 
        for(let i=0;i<users.length;i++)
        {

            users[i].name = CryptoJS.AES.decrypt(users[i].name .trim(),this.enpass.trim()).toString(CryptoJS.enc.Utf8);
            users[i].password = CryptoJS.AES.decrypt(users[i].password.trim(),this.enpass.trim()).toString(CryptoJS.enc.Utf8);
            if(this.loginForm.value.name == users[i].name)
            {
                if(this.loginForm.value.password == users[i].password)
                {
                    let name =this.loginForm.value.name 
                    let encryptname = CryptoJS.AES.encrypt(name.trim().toString(),this.enpass.trim()).toString();
                     let user = { name:encryptname };
                    localStorage.setItem('LoggedIn',JSON.stringify(user));
                    console.log("login Success");
                    const NavigationExtras :NavigationExtras ={state:this.loginForm.value};
                    this.router.navigate(['welcome'],NavigationExtras);
                }
                else{
                    console.log("incorrect password");
                    
                }

            }
            else{
                console.log("no user present");
                
            }
        }
        
    }
    }
}

