import { Component, ViewChild,  EventEmitter, Output  } from '@angular/core';
import { Estudiante } from '../estudiante';
import { MatDialog } from '@angular/material/dialog';
import { EstudianteComponent } from '../estudiante/estudiante.component';
import { EstudianteService } from '../estudiante.service';
import { ListComponent } from '../list/list.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  @Output() estudiantesActualizados = new EventEmitter<Estudiante[]>();
  @ViewChild(ListComponent) listComponent!: ListComponent;
 /*  estudiante!: Estudiante; */
 estudiantes:Estudiante[] =  [
  {
    nombre: "lucía",
    apellido: "gonzález",
    fechaNacimiento: "2001-01-15",
    matricula: "001",
    fotoPerfilUrl: `https://randomuser.me/api/portraits/med/men/1.jpg`,
    fotoUrl: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    nombre: "tomás",
    apellido: "lópez",
    fechaNacimiento: "2002-03-20",
    matricula: "002",
    fotoPerfilUrl: "https://randomuser.me/api/portraits/med/men/2.jpg",
    fotoUrl: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    nombre: "sofía",
    apellido: "MarTínez",
    fechaNacimiento: "2000-05-08",
    matricula: "003",
    fotoPerfilUrl: "https://randomuser.me/api/portraits/med/men/3.jpg",
    fotoUrl: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    nombre: "PeDro",
    apellido: "GarcíA",
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
    apellido: "ramírez",
    fechaNacimiento: "2001-12-05",
    matricula: "006",
    fotoPerfilUrl: "https://randomuser.me/api/portraits/med/men/6.jpg",
    fotoUrl: "https://randomuser.me/api/portraits/men/3.jpg"
  }
 ];
 constructor( private matDialog:MatDialog,private datePipe: DatePipe) { }


  abrirAbmEstudiante(){
    // this.matDialog.open(EstudianteComponent)
    const dialog = this.matDialog.open(EstudianteComponent, {
      width: '600px'
    });
    dialog.id = 'dialogEstudianteAdd'

    dialog.afterClosed().subscribe((valor)=>{
      console.log('valor::: ', valor,dialog.id);
      if(!valor) return

      const totalAlumnos = this.estudiantes.length + 1
      const matricula = totalAlumnos.toString().padStart(3, '0');
      const estudianteNuevo:Estudiante = {
        ...valor,
        fechaNacimiento: this.datePipe.transform(valor.fechaNacimiento, 'yyyy-MM-dd'),
        matricula,
        fotoPerfilUrl:`https://randomuser.me/api/portraits/med/men/${totalAlumnos}.jpg`,
        fotoUrl: `https://randomuser.me/api/portraits/men/${totalAlumnos}.jpg`,
      }

      this.estudiantes.push(estudianteNuevo)
      this.listComponent.dataSource = [...this.estudiantes ]

    })


  }

  onEliminarEstudiante(id: string) {

    this.estudiantes = this.estudiantes.filter(estudiante => estudiante.matricula !== id)
    this.listComponent.dataSource = [...this.estudiantes ]

  }
  onEstudiantesActualizados(estudiantes: Estudiante[]) {
    this.estudiantes = estudiantes;
    console.log('estoy aca', this.estudiantes);
    this.listComponent.dataSource = [...this.estudiantes ]
  }

}

