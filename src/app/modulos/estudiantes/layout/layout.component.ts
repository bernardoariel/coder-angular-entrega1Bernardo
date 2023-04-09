import { Component, ViewChild } from '@angular/core';
import { Estudiante } from '../estudiante';
import { MatDialog } from '@angular/material/dialog';
import { EstudianteComponent } from '../estudiante/estudiante.component';
import { EstudianteService } from '../estudiante.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  @ViewChild(ListComponent) listComponent!: ListComponent;
 /*  estudiante!: Estudiante; */
  estudiante!: Estudiante
  constructor( private matDialog:MatDialog,private estudianteService: EstudianteService) { }


  abrirAbmEstudiante(){
    // this.matDialog.open(EstudianteComponent)
    const dialog = this.matDialog.open(EstudianteComponent, {
      width: '600px'
    });

    dialog.afterClosed().subscribe((valor)=>{

      this.estudianteService.agregarEstudiante(valor)
      this.listComponent.cargarEstudiantes();


    })

  }


}

