import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.scss']
})
export class ExitComponent {

  constructor(private router:Router){

  }
  volverAProbar(){
    this.router.navigate(['/dashboard'])
  }
}
