import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DataComponent } from "./data/data.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, DataComponent]
})
export class AppComponent {
  title = 'input-output';

    gettingData : any[] = [];
  
  constructor() {}

  DataGet(data : any){
    this.gettingData = data;
    console.warn("add", this.gettingData); 
  }
  ParticularIDValue : any;
  UpdateItem(data : any){
    console.warn(data);
    this.ParticularIDValue = data.id;
    let dataa = (Number(this.ParticularIDValue));
   console.log( typeof dataa );
    
    
  }
}
