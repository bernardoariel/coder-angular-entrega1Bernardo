import { Component, OnInit } from '@angular/core';
import { obtenerCursos } from '../datos-curso_promise'
import { Curso } from '../curso';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos!: Curso[] ;

  ngOnInit(): void {
    const cursosPromises = obtenerCursos();
    cursosPromises.then(cursos => {
      this.cursos = cursos;
    });
  }


}
