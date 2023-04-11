import { Pipe, PipeTransform } from '@angular/core';
import { Estudiante } from 'src/app/modulos/estudiantes/estudiante';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(value: Estudiante): string {

    const {apellido,nombre} = value
    const apellidoMayusculas = apellido.toUpperCase();
    const nombreCapitalizado = nombre.toLowerCase().replace(/^\w/, (c) => c.toUpperCase());
    return `${apellidoMayusculas}, ${nombreCapitalizado}`;

  }

}
