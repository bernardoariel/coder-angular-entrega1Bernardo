import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss']
})
export class EstudianteComponent {

  formatDate = formatDate;
  fechaActual: Date = new Date();

  nombreControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20),
    Validators.pattern(/^[^0-9]+$/)
  ])

  apellidoControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20),
    Validators.pattern(/^[^0-9]+$/)
  ])
  fechaNacimientoControl = new FormControl('', [
    Validators.required,
    // Validators.pattern(/^([0-2]\d|3[0-1])\/(0\d|1[0-2])\/\d{4}$/)
  ]);

  constructor(private dialogRef:MatDialogRef<EstudianteComponent>){}

  estudianteForm = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    fechaNacimiento: this.fechaNacimientoControl
  })

  myFilter = (d: Date | null): boolean => {
    const today = new Date();
    const cutoffDate = new Date("1940-01-01");

    if (!d) {
      // Si la fecha es nula, retornar falso para no permitir su selección
      return false;
    }

    // Retornar falso si la fecha es mayor a la actual o menor a la fecha límite (1940)
    return d <= today && d >= cutoffDate;
  };


  guardar(){
    if(this.estudianteForm.valid){
      // console.log('this.estudianteForm.value::: ', this.estudianteForm.value);
      this.dialogRef.close(this.estudianteForm.value)
    }else{
      // mostrar errores de validacion en consola
      console.log('this.estudianteForm.errors::: ', this.estudianteForm.errors);
    }
  }
}
