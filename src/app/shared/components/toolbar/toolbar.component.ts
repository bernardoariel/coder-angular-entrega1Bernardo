import { MatDrawer } from '@angular/material/sidenav';
import { Component, Input,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  @Input() drawer?: MatDrawer;
  isLigthModeActive = true;
  iconoGirado = true;

  constructor(@Inject(DOCUMENT) private document:Document) { }

  toggleIcono() {
    this.iconoGirado = !this.iconoGirado;
    console.log('this.iconoGirado::: ', this.iconoGirado);
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
}
