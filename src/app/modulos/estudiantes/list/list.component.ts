import {  Component,  EventEmitter,  Input,  OnInit, Output} from '@angular/core';
import { Estudiante } from '../estudiante';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EstudianteComponent } from '../estudiante/estudiante.component';
import { ConfirmComponent } from 'src/app/modulos/estudiantes/componentes/confirm/confirm.component';


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

      this.cargarEstudiantes();

    }


    constructor(private matDialog:MatDialog){}

    abrirAbmEstudiante(estudiante?:Estudiante ){

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

            this.estudiantesActualizados.emit(this.estudiantes);
          }

        }

      })


    }
    public actualizarEstudiantes(estudiantes: Estudiante[]) {
      this.dataSource = estudiantes;
    }

    cargarEstudiantes(){
      console.log('this.estudiantes::: list', this.estudiantes);
      this.dataSource = this.estudiantes.slice();

    }
    abrirDialogo(matricula:string): void {

      const dialogRef: MatDialogRef<ConfirmComponent> = this.matDialog.open(ConfirmComponent, {
        width: '500px',
        data: { mensaje: '¿Desea guardar los cambios?' }
      });


      dialogRef.afterClosed().subscribe(result => {

        if (result) {
          // El usuario seleccionó "Sí"
          console.log('result::: ', result);
           this.eliminarEstudiante.emit(matricula)
        }
      });

    }
  }
