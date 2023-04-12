import { Component } from '@angular/core';
import cursos from '../datos-curso'
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {

  cursos = cursos.cursos;

  constructor() { }


}
