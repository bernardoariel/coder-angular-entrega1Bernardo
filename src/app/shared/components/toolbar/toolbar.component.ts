import { MatDrawer } from '@angular/material/sidenav';
import { Component, Input, Inject, Output, EventEmitter } from '@angular/core';
import { DOCUMENT} from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Time, TimeService } from 'src/app/services/time.service';
import { Observable } from 'rxjs';
import { TimeFormatPipe } from 'src/app/shared/pipes/time-format.pipe';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Input() drawer?: MatDrawer;
  @Input() iconoGirado: boolean = true;
  @Output() girarIcono = new EventEmitter<boolean>();
  isLigthModeActive = true;
  horaActual$: Observable<Time | null>;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    public snackBar: MatSnackBar,
    private timeService: TimeService
  ) {
    this.horaActual$ = this.timeService.reloj$;
  }

  toggleIcono() {
    this.iconoGirado = !this.iconoGirado;
    this.girarIcono.emit(this.iconoGirado);
  }
  onChangeTheme(): void {
    this.isLigthModeActive = !this.isLigthModeActive;
    console.log('this.isLigthModeActive::: ', this.isLigthModeActive);
    this.cambiarTheme(this.isLigthModeActive);
  }
  cambiarTheme(tema: boolean) {
    if (!tema) {
      this.document.body.classList.add('dark-mode');
      this.document.body.classList.remove('ligth-mode');
    } else {
      this.document.body.classList.add('ligth-mode');
      this.document.body.classList.remove('dark-mode');
    }
    console.log('tema::: ', tema);
  }
  salir() {
    this.snackBar.open('Saliendo del sistema', 'PROXIMAMENTE', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
