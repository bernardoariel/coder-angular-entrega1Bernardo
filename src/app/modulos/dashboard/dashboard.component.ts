import { ToolbarComponent } from './../../shared/components/toolbar/toolbar.component';
import { MatDrawer } from '@angular/material/sidenav';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  @ViewChild('drawer', { static: false }) drawer!: MatDrawer;
  @ViewChild(ToolbarComponent, { static: false }) toolbar!: ToolbarComponent

  iconoGirado: boolean = false;
  showFiller = false;
  mostrarMensaje = false;

  estadoEstudiantes: boolean = false;
  estadoCursos: boolean = true;

  constructor(private router: Router) { }
  cambiarEstadoEstudiantes() {
    this.estadoEstudiantes = !this.estadoEstudiantes;
    console.log('this.estadoEstudiantes::: ', this.estadoEstudiantes);
    this.cerrarMenu();
  }
  cambiarEstadoCursos() {
    this.estadoCursos = !this.estadoCursos;
    console.log('this.estadoCursos::: ', this.estadoCursos);
    this.cerrarMenu();
  }
  cerrarMenu() {
    this.drawer.close();
    this.toolbar.toggleIcono();
  }
  irAProfesores(){
    this.router.navigate(['profesores']);
  }
  mostrarMensajeTemporalmente() {
    setTimeout(() => {
      this.mostrarMensaje = true;
      this.estadoEstudiantes = true;
    }, 5000);
  }
}
