import { Component } from '@angular/core';
import { Estudiantes } from '../../estudiantes';
import { MatDialog } from '@angular/material/dialog';
import { EstudianteComponent } from '../estudiante/estudiante.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  constructor( private matDialog:MatDialog) { }
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

  abrirAbmEstudiante(){
    // this.matDialog.open(EstudianteComponent)
    const dialog = this.matDialog.open(EstudianteComponent, {
      width: '600px'
    });

    dialog.afterClosed().subscribe((valor)=>{
      this.estudiantes.push(valor)
    })

  }
}

