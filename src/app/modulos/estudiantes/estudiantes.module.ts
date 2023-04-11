import { PipesModule } from './../../shared/pipes/pipes.module';
import { MaterialModule } from './../../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { ListComponent } from './list/list.component';
import { GridComponent } from './grid/grid.component';
import { LayoutComponent } from './layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';



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
    ReactiveFormsModule,
    PipesModule,
    DirectivesModule
  ],
  exports:[
    LayoutComponent
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-AR' },DatePipe ],
})
export class EstudiantesModule { }
