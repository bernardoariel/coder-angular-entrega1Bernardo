import { Curso } from './curso';

export const cursos: Curso[] = [
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

export function obtenerCursos(): Promise<Curso[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(cursos);
    }, 2000);
  });
}
