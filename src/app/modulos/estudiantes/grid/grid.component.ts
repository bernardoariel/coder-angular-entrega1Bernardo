import { Component, Input } from '@angular/core';
import { Estudiantes } from '../../estudiantes';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  @Input() estudiantes!: Estudiantes[];
}
