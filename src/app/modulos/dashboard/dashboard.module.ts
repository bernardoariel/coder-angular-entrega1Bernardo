import { MaterialModule } from './../../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { EstudiantesModule } from '../estudiantes/estudiantes.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    EstudiantesModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
