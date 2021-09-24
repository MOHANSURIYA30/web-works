import { Location } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import * as CryptoJS from 'crypto-js';  
@Component({
  selector: 'sign-up',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css']
})
export class SignUpComponent implements OnInit {
    user :any ={};
    enpass = '12345';
    constructor(private location:Location,private formBuilder:FormBuilder){}
    signForm:any = FormGroup;
    ngOnInit(): void {
        this.signForm = this.formBuilder.group({
            name:new FormControl('',Validators.required),
            password:new FormControl('',Validators.required)
        })
    }

    onSubmit(){
        let name = this.signForm.value.name;
        console.log(name);
        let password = this.signForm.value.password;
        console.log(password);
       

        let encryptname =CryptoJS.AES.encrypt(name.trim().toString(),this.enpass.trim()).toString();
        let encryptpassword =CryptoJS.AES.encrypt(password.trim().toString(),this.enpass.trim()).toString();
        console.log(encryptname);
        console.log(encryptpassword);
        

        //  let Decryptname = CryptoJS.AES.decrypt(encryptname.trim(),enpass.trim()).toString(CryptoJS.enc.Utf8);  
        //  let Decryptpassword = CryptoJS.AES.decrypt(encryptpassword.trim(),enpass.trim()).toString(CryptoJS.enc.Utf8);  
        // console.log(Decryptname);
        // console.log(Decryptpassword);
        
      this.user = Object.assign(this.user,{name:encryptname,password:encryptpassword})
     this.addUser(this.user);
     this.location.back();
        
    }

    addUser(user:any){
        let users:any =[];
        if(localStorage.getItem('Users'))
        {
            let temp:any =localStorage.getItem('Users')
            users = JSON.parse(temp);
            users=[user,...users];
        }
        else{
            users=[user];
        }
        localStorage.setItem('Users',JSON.stringify(users));
    }

}

