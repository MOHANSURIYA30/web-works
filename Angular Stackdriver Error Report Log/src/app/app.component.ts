import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup,FormControl, FormBuilder } from '@angular/forms'; 
import { AppService } from './app.service';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'logging-test';
  profile :any;
  constructor(public formBuilder:FormBuilder,private appService:AppService,@Inject(DOCUMENT) private document:Document ){}
  ngOnInit(): void {

  this.profile = this.formBuilder.group({
    name :new FormControl(null),
    age :new FormControl(null),

  })
  
  }
onSubmit(){
  console.log(this.profile.value);

  this.appService.postLog('Submit Executed').then((res)=>{console.log(res);
  });
  this.appService.postData(this.profile.value)
  .then((res)=>{
    console.log("post data res");
    
    console.log(res);  
  })
  .catch((err)=>{
    console.log(err);
  })

  
}

throwError(){
  var currentdate = new Date(); 
 let datetime =  currentdate.getDate() + "/"
 + (currentdate.getMonth()+1)  + "/" 
 + currentdate.getFullYear() + " @ "  
 + currentdate.getHours() + ":"  
 + currentdate.getMinutes() + ":" 
 + currentdate.getSeconds();
  // try {

    let nullValue: string | null = "";
    nullValue = null;
    nullValue!.toUpperCase();


   

// console.log(datetime);
  // throw new Error('DATE:'+datetime);
// }
  //  catch (error) {
  //    let e:any = error;
  //    console.log(typeof error);
     
  //    console.log(datetime+"  "+e.toString());
     
  //   this.appService.postError(datetime+"  "+e.toString()).then((res)=>{console.log(res);
  //   });
  //   // try{
  //     throw new Error(datetime+" | USER 111 | "+e.toString());
  //   // }
  // //   catch(e1){
  // //     let e11 :any = e1;
  // //  console.error(e11);
   
  // //   }
  // }
 

}

}
