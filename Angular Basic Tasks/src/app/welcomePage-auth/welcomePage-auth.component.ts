import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import * as CryptoJS from 'crypto-js';  

@Component({
  selector: 'welcome-auth',
  templateUrl: './welcomePage-auth.component.html',
  styleUrls: ['./welcomePage-auth.component.css']
})
export class WelcomePageAuthComponent implements OnInit {
  // user:any;
  // enpass:any = '12345';
  constructor(private router :Router){
    // const navigation = this.router.getCurrentNavigation();
    // if(navigation != undefined && navigation.extras != undefined && navigation.extras.state ){
    //   const state = navigation.extras.state;
    //   this.user = state;
    //   console.log(this.user);
      

    // }
    // else{
    //     let temp:any = localStorage.getItem('LoggedIn');
    //     this.user = JSON.parse(temp);
    //     this.user.name = CryptoJS.AES.decrypt(this.user.name.trim(),this.enpass.trim()).toString(CryptoJS.enc.Utf8);
    //     console.log(this.user.name );
    // }

  }
  ngOnInit(): void {
    

  }
}
