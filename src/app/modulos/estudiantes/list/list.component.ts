import { Component, Input, OnInit } from '@angular/core';
import { Estudiantes } from '../../estudiantes';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{


  @Input() estudiantes!: Estudiantes[];

  displayedColumns: string[] = ['nombre', 'apellido', 'fechaNacimiento',  'matricula','fotoPerfilUrl', 'acciones'];
  dataSource: Estudiantes[] = [];

  ngOnInit() {
    this.dataSource = this.estudiantes;
  }
}
