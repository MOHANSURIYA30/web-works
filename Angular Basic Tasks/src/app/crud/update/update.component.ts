import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'update-comp',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
    detailForm: any;
    detail:any;
    constructor(private appService:AppService,private formBuilder:FormBuilder,private router:Router){

        const navigation = this.router.getCurrentNavigation();
        if(navigation != undefined && navigation.extras != undefined && navigation.extras.state ){
          const state = navigation.extras.state;
          this.detail = state;
          console.log(this.detail);
          
    
        }
    }

    ngOnInit(): void {
         this.detailForm = this.formBuilder.group({
        name:new FormControl(''),
        age:new FormControl('')
    })

    this.detailForm.setValue({name:this.detail.name,age:this.detail.age})
    }


    onSubmit(){
        
        console.log(this.detailForm.value);

        this.appService.update(this.detail.id,this.detailForm.value) 
.then((data_res) => {
console.log(data_res);
this.router.navigate(['crud']);


})
.catch(err => {
  console.log(err);
});
        
    }

   

}

