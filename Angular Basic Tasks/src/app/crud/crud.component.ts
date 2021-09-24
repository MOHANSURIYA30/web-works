import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl } from '@angular/forms';
import { Router ,NavigationExtras} from '@angular/router';
import { AppService } from '../app.service';


@Component({
  selector: 'crud-comp',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  details :any;
  detailForm: any

    constructor(private appService:AppService,private formBuilder:FormBuilder,private router:Router){}
    ngOnInit(){
      this.detailForm = this.formBuilder.group({
        name:new FormControl(''),
        age:new FormControl('')
    })
       
    // this.appService.read()
    //     .then(data_res => {
    //     console.log(data_res);
    //     this.details = data_res
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });

    }


    onEdit(data:any){
      let d = this.details.find((detail:any)=>{
        if(detail.id == data)
        {
          console.log(detail);
          
          return detail
        }

      })
      console.log(d);
      
      const NavigationExtras :NavigationExtras ={state:d};
    this.router.navigate(['crud/update'],NavigationExtras);
    }
    onSubmit():void{
            console.log(this.detailForm.value);
          let data = this.detailForm.value;
          //     this.appService.create(data)
          //  .then(data_res => {
          //    console.log(data_res);
          //  })
          //  .catch(err => {
          //    console.log(err);
          //  });

  }

  onDelete(data:any){
  console.log(data);  
    //      this.appService.delete(data)
    //  .then((data_res) => {
    //      console.log(data_res);
         
      
    //  })
    //  .catch(err => {
    //    console.log(err);
    //  }); 

    
  }


    // onSend(){
// Create
//   let data ={name:'suriya'};

// console.log(data);

//   this.appService.create(data)
//   .then(data_res => {
//     console.log(data_res);
//   })
//   .catch(err => {
//     console.log(err);
//   });


// UPDATE
// this.appService.update('1', {name:'mohan1'}) 
// .then((data_res) => {
// console.log(data_res);

// })
// .catch(err => {
//   console.log(err);
// });



// delete

// this.appService.delete('1')
// .then((data_res) => {
//     console.log(data_res);
    
 
// })
// .catch(err => {
//   console.log(err);
// }); 

    // }

}
