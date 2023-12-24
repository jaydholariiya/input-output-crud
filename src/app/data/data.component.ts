import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule , FormsModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
    @Output() arrayEmitter = new EventEmitter<any>();
    arrayToSend: any;
    @Input() receiveArray : any;
    
    ngOnChanges(changes: any): void {
     
        if (changes.hasOwnProperty('receiveArray')) {
            this.arrayToSend = this.receiveArray;
            console.warn(this.arrayToSend , "Updated Data Got It!!");
            
            }
          
        
    }
  sendArray() {
  
     this.arrayToSend = [{
        id : 0 , name : "List 0"      
      },{
        id : 1 , name : "List 1"
      },{
        id : 2 , name : "List 2"
      }];
    this.arrayEmitter.emit(this.arrayToSend);
    

  }
}
