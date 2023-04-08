import { Component, Input } from '@angular/core';
import { Estudiante } from '../../estudiante';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  @Input() estudiantes!: Estudiante[];
}
