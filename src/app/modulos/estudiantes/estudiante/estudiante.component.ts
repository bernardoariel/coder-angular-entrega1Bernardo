import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss']
})
export class EstudianteComponent {
  fechaActual:Date = new Date();
  nombreControl = new FormControl(this.formatDate(this.fechaActual), [Validators.required, Validators.minLength(3)])
  apellidoControl = new FormControl('', [Validators.required, Validators.minLength(3)])
  fechaNacimientoControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/(19|20)[0-9]{2}$')
  ]);

  constructor(private dialogRef:MatDialogRef<EstudianteComponent>){}

  estudianteForm = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    fecha: this.fechaNacimientoControl
  })

  guardar(){
    if(this.estudianteForm.valid){
      console.log('this.estudianteForm.value::: ', this.estudianteForm.value);
      this.dialogRef.close(this.estudianteForm.value)
    }
  }

  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${month}/${day}/${year}`;
  }
}
