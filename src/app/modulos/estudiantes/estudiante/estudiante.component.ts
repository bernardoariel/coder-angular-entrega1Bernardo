import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss']
})
export class EstudianteComponent {

  nombreControl = new FormControl('', [Validators.required, Validators.minLength(3)])
  apellidoControl = new FormControl('', [Validators.required, Validators.minLength(3)])

  constructor(private dialogRef:MatDialogRef<EstudianteComponent>){}

  estudianteForm = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl
  })

  guardar(){
    if(this.estudianteForm.valid){
      console.log('this.estudianteForm.value::: ', this.estudianteForm.value);
      this.dialogRef.close(this.estudianteForm.value)
    }
  }

}
