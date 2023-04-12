import {  Component,  EventEmitter,  Input,  OnInit, Output} from '@angular/core';
import { Estudiante } from '../estudiante';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EstudianteComponent } from '../estudiante/estudiante.component';
import { ConfirmComponent } from 'src/app/modulos/estudiantes/componentes/confirm/confirm.component';
import { MatSnackBar } from '@angular/material/snack-bar';


  @Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
  })
  export class ListComponent implements OnInit{

    data!: { estudiante?: Estudiante };
    @Output() eliminarEstudiante = new EventEmitter<string>();
    @Output() estudiantesActualizados = new EventEmitter<Estudiante[]>();


    @Input()
    estudiantes: Estudiante[] = [];

    displayedColumns: string[] = ['nombreCompleto', 'nombre','apellido', 'fechaNacimiento',  'matricula','fotoPerfilUrl', 'acciones'];
    dataSource: Estudiante[] = [];

    datePipe: any;
    listComponent: any;

    ngOnInit() {

      this.dataSource = this.estudiantes.slice();

    }

    constructor(private matDialog:MatDialog,
                public snackBar:MatSnackBar){}

    openDialogEditEstudiante(estudiante?:Estudiante ){

      // this.matDialog.open(EstudianteComponent)
      const dialog = this.matDialog.open(EstudianteComponent, {
        width: '600px',
        data: { estudiante: estudiante }
      });

      dialog.afterClosed().subscribe((valor)=>{
        console.log('valoadsfsadfasr::: ', valor);

        //Actualizar un estudiante cuando el valor.matricula sea igual a this.estudiantes.matricula
        if (valor) {
          console.log('valor::: ', valor);
          // buscar el estudiante en el arreglo que sea igual a valor.matricula
          const estudiante = this.estudiantes.find((estudiante) =>estudiante.matricula === valor.matricula);
          console.log('estudiante::: ', estudiante);

          // El estudiante ya existe, actualiza sus propiedades
          if (estudiante) {
            // eliminar estudiante del arreglo
            this.estudiantes = this.estudiantes.filter((estudiante) => estudiante.matricula !== valor.matricula);

            // Actualizar propiedades del estudiante
            estudiante.nombre = valor.nombre;
            estudiante.apellido = valor.apellido;
            estudiante.fechaNacimiento = valor.fechaNacimiento;

            // Update de estudiante en el arreglo de estudiantes
            this.estudiantes.unshift(estudiante);

            // Emitir evento de estudiantes actualizados
            this.dataSource = [...this.estudiantes]
            this.dataSource = this.estudiantes.slice()
            this.dataSource = this.estudiantes
            // this.estudiantesActualizados.emit(this.estudiantes);
          }

        }

      })


    }

    openDialogConfirm(matricula:string): void {


      const estudianteAEliminar = this.estudiantes.find((estudiante) =>estudiante.matricula === matricula);

      const dialogRef: MatDialogRef<ConfirmComponent> = this.matDialog.open(ConfirmComponent, {
        width: '500px',
        data: {
          mensaje: `¿ Desea eliminar a ${ estudianteAEliminar?.apellido.toUpperCase() }
                     ${estudianteAEliminar?.nombre.toUpperCase()} ?` }
      });


      dialogRef.afterClosed().subscribe(result => {

        if (result) {
          // El usuario seleccionó "Sí"
           this.eliminarEstudiante.emit(matricula)
           this.snackBar.open('Estudiante eliminado con exito', '', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            
          })
        }

      });

    }
  }
