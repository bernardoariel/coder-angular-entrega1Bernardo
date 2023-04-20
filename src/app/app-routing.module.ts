import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { ExitComponent } from './modulos/exit/exit.component';
import { ProfesoresComponent } from './modulos/estudiantes/profesores/profesores.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'salir',
    component: ExitComponent
  },
  {
    path: 'profesores',
    component: ProfesoresComponent
  },
  {
    path:'**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
