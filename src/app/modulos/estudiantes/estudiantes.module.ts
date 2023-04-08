import { MaterialModule } from './../../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudianteComponent } from './estudiante/estudiante.component';
import { ListComponent } from './list/list.component';
import { GridComponent } from './grid/grid.component';
import { LayoutComponent } from './layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EstudianteComponent,
    ListComponent,
    GridComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class EstudiantesModule { }
