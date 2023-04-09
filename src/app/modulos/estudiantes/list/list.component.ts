import {  Component,  EventEmitter,  Input,  OnInit, Output} from '@angular/core';
import { Estudiante } from '../estudiante';
import { EstudianteService } from '../estudiante.service';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit{

  estudiantes: Estudiante[] = [];

  displayedColumns: string[] = ['nombre', 'apellido', 'fechaNacimiento',  'matricula','fotoPerfilUrl', 'acciones'];
  dataSource: Estudiante[] = [];

  ngOnInit() {
    this.cargarEstudiantes();
  }
  constructor(private estudianteService: EstudianteService) { }



  cargarEstudiantes(){
    this.estudiantes = this.estudianteService.getEstudiantes()
    this.dataSource = this.estudiantes
  }
}
