import { Component, OnInit } from '@angular/core';
import { obtenerCursos } from '../datos-curso_promise'
import { Curso } from '../curso';
import { CursoService } from '../datos-curso_obs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos!: Curso[] ;
  cursosObs!: Curso[];
  constructor(private cursoService: CursoService){

  }

  ngOnInit(): void {
    const cursosPromises = obtenerCursos();
    cursosPromises.then(cursos => {
      this.cursos = cursos;
    });
    this.cursoService.getCursos().subscribe(cursos => {
      console.log('cursos::: ', cursos);
      this.cursosObs = cursos;
    });
  }


}
