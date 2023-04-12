import { MatDrawer } from '@angular/material/sidenav';
import { Component, Input,Inject, Output, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  @Input() drawer?: MatDrawer;
  @Input() iconoGirado: boolean = true;
  @Output() girarIcono = new EventEmitter<boolean>();
  isLigthModeActive = true;
  constructor(@Inject(DOCUMENT) private document:Document,public snackBar:MatSnackBar) { }

  toggleIcono() {
    this.iconoGirado = !this.iconoGirado;
    this.girarIcono.emit(this.iconoGirado);
  }
  onChangeTheme():void {
    this.isLigthModeActive = !this.isLigthModeActive;
    console.log('this.isLigthModeActive::: ', this.isLigthModeActive);
    this.cambiarTheme(this.isLigthModeActive)

  }
  cambiarTheme(tema:boolean){
    if(!tema) {
      this.document.body.classList.add('dark-mode');
      this.document.body.classList.remove('ligth-mode');
    }else{
      this.document.body.classList.add('ligth-mode');
      this.document.body.classList.remove('dark-mode');
    }
    console.log('tema::: ', tema);

  }
  salir(){
    this.snackBar.open('Saliendo del sistema', 'PROXIMAMENTE', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',

    });
  }
}
