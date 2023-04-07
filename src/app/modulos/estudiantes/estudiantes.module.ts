import { MaterialModule } from './../../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudianteComponent } from './estudiante/estudiante.component';
import { ListComponent } from './list/list.component';
import { GridComponent } from './grid/grid.component';



@NgModule({
  declarations: [
    EstudianteComponent,
    ListComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    EstudianteComponent,
    GridComponent,
    ListComponent
  ]
})
export class EstudiantesModule { }
