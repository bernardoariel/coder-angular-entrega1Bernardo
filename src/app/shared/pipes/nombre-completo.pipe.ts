import { Pipe, PipeTransform } from '@angular/core';
import { Estudiante } from 'src/app/modulos/estudiantes/estudiante';
import { LayoutComponent } from 'src/app/modulos/estudiantes/layout/layout.component';

@Pipe({
  name: 'nombreCompleto',
  pure: false
})
export class NombreCompletoPipe implements PipeTransform {

  transform(value: Estudiante, layoutComponent?: LayoutComponent): any {

    const {apellido,nombre} = value
    const apellidoMayusculas = apellido.toUpperCase();
    const nombreCapitalizado = nombre.toLowerCase().replace(/^\w/, (c) => c.toUpperCase());
    return `${apellidoMayusculas}, ${nombreCapitalizado}`;

  }

}
