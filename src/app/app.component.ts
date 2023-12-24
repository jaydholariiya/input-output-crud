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

receivedArray: any[] = [];

receiveArray(array: any) {
  this.receivedArray = array;
  console.warn("got it" , this.receivedArray);
}

updateData() {
   
    const updatedData: any[] = [{
      id: 0, name: "updated List 0"
    }, {
      id: 1, name: "updated List 1"
    }, {
      id: 2, name: "updated List 2"
    }];

    this.receivedArray = updatedData;
  }


}
