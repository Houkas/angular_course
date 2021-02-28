import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumbers : number[] = [];
  evenNumbers : number[] = [];

  onCountActive(nombreLance : number){
    
    if(nombreLance % 2 === 0){

      this.evenNumbers.push(nombreLance);

    }
    else{

      this.oddNumbers.push(nombreLance);

    }

  }

}
