import { Component, OnDestroy, OnInit } from '@angular/core';
import { Profesor, ProfesoresService } from '../profesores.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.scss']
})
export class ProfesoresComponent implements OnInit, OnDestroy {

  listaProfesores: Profesor[] = [];
  suscripcionProfesores!: Subscription;
  constructor(private profesoresService: ProfesoresService, private router:Router) { }


  ngOnInit(): void {

    this.suscripcionProfesores = this.profesoresService.obtenerProfesores().subscribe(
      {next:(profesores:Profesor[])=>{
        this.listaProfesores = profesores;
        console.log('profesores::: ', profesores);}
      })

  }

  ngOnDestroy(): void {
    if (this.suscripcionProfesores) {
      this.suscripcionProfesores.unsubscribe();
    }
  }

  volverADash(){
    this.router.navigate([''])
  }

}
