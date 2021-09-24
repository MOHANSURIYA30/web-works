import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'check-box',
  templateUrl: './checkBox.component.html',
  styleUrls: ['./checkBox.component.css']
})
export class CheckBoxComponent implements OnInit{
    checkForm:any = FormGroup;
   
    constructor(private formBuilder:FormBuilder){}
    ngOnInit(): void {
        this.checkForm = this.formBuilder.group({
            selectAll:new FormControl(''),
            employed:new FormControl(''),
            married:new FormControl(''),
            educated:new FormControl(''),
            nri:new FormControl('')
  })
        
    }

    onCheck(){


    if( this.checkForm.get('selectAll').value == true){
        this.checkForm.patchValue({ employed:true, married:true, educated:true, nri:true});
    }
    else{
        this.checkForm.patchValue({ employed:false, married:false, educated:false, nri:false});
    }
      

    }

    onChange(){
        this.checkForm.patchValue({ selectAll:false});
        if(this.checkForm.get('employed').value == true &&this.checkForm.get('married').value == true &&this.checkForm.get('educated').value == true && this.checkForm.get('nri').value == true )
{
    this.checkForm.patchValue({ selectAll:true});

}
        
    }

}
