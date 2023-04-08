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
  nombreControl = new FormControl('', [Validators.required, Validators.minLength(3)])
  apellidoControl = new FormControl('', [Validators.required, Validators.minLength(3)])
  fechaNacimientoControl = new FormControl('', [
    Validators.required,
    Validators.max(this.fechaActual.getTime()),
  ]);

  constructor(private dialogRef:MatDialogRef<EstudianteComponent>){}

  estudianteForm = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    fechaNacimiento: this.fechaNacimientoControl
  })

  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${month}/${day}/${year}`;
  }

  guardar(){
    if(this.estudianteForm.valid){
      console.log('this.estudianteForm.value::: ', this.estudianteForm.value);
      this.dialogRef.close(this.estudianteForm.value)
    }else{
      // mostrar errores de validacion en consola
      console.log('this.estudianteForm.errors::: ', this.estudianteForm.errors);

    }
  }
}
