import { Component, OnDestroy, OnInit } from '@angular/core';
import { obtenerCursos } from '../datos-curso_promise'
import { Curso } from '../curso';
import { CursoService } from '../datos-curso_obs';
import { Subscription, concatMap, delay, interval, map, of } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit , OnDestroy{

  cursos!: Curso[] ;
  cursosObs!: Curso[];

  subscripcionRef!: Subscription | null
  constructor(private cursoService: CursoService){

  }
  ngOnDestroy(): void {
    this.subscripcionRef?.unsubscribe();
  }

  ngOnInit(): void {
    const cursosPromises = obtenerCursos();
    cursosPromises.then(cursos => {
      this.cursos = cursos;
    });
    this.subscripcionRef = interval(5000)
      .pipe(concatMap(() => this.cursoService.getCursos().pipe(
        map((cursos: any[]) => cursos.map(curso => ({...curso, nombre: curso.nombre.toUpperCase()}))),
        concatMap(c => of(c).pipe(delay(500)))
      ))).subscribe(cursos => {
        console.log('tick')
        this.cursosObs = cursos;
      });
  }

  
}
