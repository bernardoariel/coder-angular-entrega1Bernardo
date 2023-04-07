import { ToolbarComponent } from './../../shared/components/toolbar/toolbar.component';
import { MatDrawer } from '@angular/material/sidenav';
import { Component, ViewChild } from '@angular/core';
import { Estudiantes } from '../estudiantes';

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

  estudiantes:Estudiantes[] =  [
    {
      nombre: "Lucía",
      apellido: "González",
      fechaNacimiento: "2001-01-15",
      matricula: "001",
      fotoPerfilUrl: `https://randomuser.me/api/portraits/med/men/1.jpg`,
      fotoUrl: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      nombre: "Tomás",
      apellido: "López",
      fechaNacimiento: "2002-03-20",
      matricula: "002",
      fotoPerfilUrl: "https://randomuser.me/api/portraits/med/men/2.jpg",
      fotoUrl: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      nombre: "Sofía",
      apellido: "Martínez",
      fechaNacimiento: "2000-05-08",
      matricula: "003",
      fotoPerfilUrl: "https://randomuser.me/api/portraits/med/men/3.jpg",
      fotoUrl: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      nombre: "Pedro",
      apellido: "García",
      fechaNacimiento: "1999-07-12",
      matricula: "004",
      fotoPerfilUrl: "https://randomuser.me/api/portraits/med/men/4.jpg",
      fotoUrl: "https://randomuser.me/api/portraits/men/4.jpg"

    },
    {
      nombre: "Ana",
      apellido: "Hernández",
      fechaNacimiento: "2002-10-22",
      matricula: "005",
      fotoPerfilUrl: "https://randomuser.me/api/portraits/med/men/5.jpg",
      fotoUrl: "https://randomuser.me/api/portraits/men/5.jpg"
    },

    {
      nombre: "Luis",
      apellido: "Ramírez",
      fechaNacimiento: "2001-12-05",
      matricula: "020",
      fotoPerfilUrl: "https://randomuser.me/api/portraits/med/men/6.jpg",
      fotoUrl: "https://randomuser.me/api/portraits/men/3.jpg"
    }
  ];
  cerrarMenu() {
    this.drawer.close();
    this.toolbar.toggleIcono();
  }

}
