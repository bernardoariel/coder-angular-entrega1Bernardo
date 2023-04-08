import { Component, Input,  OnInit } from '@angular/core';
import { Estudiante } from '../../estudiante';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit{

  @Input() estudiantes!: Estudiante[];

  displayedColumns: string[] = ['nombre', 'apellido', 'fechaNacimiento',  'matricula','fotoPerfilUrl', 'acciones'];
  dataSource: Estudiante[] = [];

  ngOnInit() {
    this.dataSource = this.estudiantes.slice();
  }

}
