import { Component,  OnInit, Input, Inject, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { formatDate } from '@angular/common';
import { Estudiante } from '../estudiante';
@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss']
})
export class EstudianteComponent implements OnInit{

  @Input() estudiante: Estudiante | undefined;
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

  matriculaControl = new FormControl('')
  constructor(
    private dialogRef:MatDialogRef<EstudianteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { estudiante?: Estudiante }){}


  estudianteForm = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    fechaNacimiento: this.fechaNacimientoControl,
    matricula: this.matriculaControl
  })
  ngOnInit(): void {

    if (this.data && this.data.estudiante) {
      console.log('this.data.estudiante::: ', this.data.estudiante.matricula);

      const estudiante = this.data.estudiante;
        this.estudianteForm.setValue({
          nombre: estudiante.nombre,
          apellido: estudiante.apellido,
          fechaNacimiento: estudiante.fechaNacimiento,
          matricula:  estudiante.matricula
        });

        console.log('this.estudianteForm::: ', this.estudianteForm.value);
    }
  }
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
      console.log('this.estudianteForm.value::: ', this.estudianteForm.value);
      this.dialogRef.close(this.estudianteForm.value)
    }else{
      // mostrar errores de validacion en consola
      console.log('this.estudianteForm.errors::: ', this.estudianteForm.errors);
    }
  }
}
