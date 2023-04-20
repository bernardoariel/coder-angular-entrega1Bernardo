import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface Profesor {
  nombre: string;
  apellido: string;
  especialidad: string;
  experiencia_en_anios: number;
}
// crear un arreglo de profesores de forma aleatoria
const DATA_PROFESORES: Profesor[] = [
  { nombre: 'Juan', apellido: 'Perez', especialidad: 'JavaScript', experiencia_en_anios: 5 },
  { nombre: 'Maria', apellido: 'Gomez', especialidad: 'Python', experiencia_en_anios: 3 },
  { nombre: 'Pedro', apellido: 'Gonzalez', especialidad: 'Java', experiencia_en_anios: 2 }
  ]


@Injectable({
  providedIn: 'root'
})

export class ProfesoresService {

  private profesores$ = new BehaviorSubject<Profesor[]>([]);

  constructor() { }

  obtenerProfesores():Observable<Profesor[]> {
    this.profesores$.next(DATA_PROFESORES);
    return this.profesores$.asObservable();
  }

}
