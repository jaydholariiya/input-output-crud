import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule , FormsModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
    @Output() customEvent = new EventEmitter<string>();
    @Input() updatePerId : any;
    formgup : FormGroup;
    addDataVarible : any = [];
    constructor(private fb : FormBuilder){
        this.formgup = this.fb.group({
            name : [''],
            id : [''],
            email : [''],
            password : ['']   
        })
        this.updateData();
    
    }
    addData(){
        console.log(this.formgup.value)
        this.addDataVarible.push(this.formgup.value)
        console.warn(this.addDataVarible);
        this.customEvent.emit(this.addDataVarible);

    }
    updateData(){
        console.warn("data",this.updatePerId); 
    }
   

}
