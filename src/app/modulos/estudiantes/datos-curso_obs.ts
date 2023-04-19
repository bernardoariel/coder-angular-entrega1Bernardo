import { Observable, concatMap, delay, map, of } from "rxjs";
import { Curso } from "./curso";
import { Injectable } from "@angular/core";


const cursos: Curso[] = [
  { id: 1, nombre: 'JavaScript' },
  { id: 2, nombre: 'Python' },
  { id: 3, nombre: 'Java' },
  { id: 4, nombre: 'C++' },
  { id: 5, nombre: 'Ruby' },
  { id: 6, nombre: 'Swift' },
  { id: 7, nombre: 'Go' },
  { id: 8, nombre: 'PHP' },
  { id: 9, nombre: 'TypeScript' },
  { id: 10, nombre: 'Rust' }
];

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor() { }

  getCursos(): Observable<Curso[]> {
    return of(cursos).pipe(
      map((cursos: any[]) => cursos.map(curso => ({...curso, nombre: curso.nombre.toUpperCase()}))),
      concatMap(c => of(c).pipe(delay(500)))
    );
  }
}
