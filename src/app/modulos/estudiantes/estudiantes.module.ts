import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { EstudianteComponent } from './estudiante/estudiante.component';



@NgModule({
  declarations: [
    ListadoComponent,
    EstudianteComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListadoComponent,
    EstudianteComponent
  ]
})
export class EstudiantesModule { }
