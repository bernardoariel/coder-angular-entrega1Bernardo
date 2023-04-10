import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'controlErrorMessages'
})
export class ControlErrorMessagesPipe implements PipeTransform {

  transform(error: any, controlName: string): any {
    console.log('controlName::: ', controlName);
    console.log('error::: ', error);
    let defaultMsg = 'Error desconocido';
    const opciones:Record<string,string> = {
      required: 'Este campo es requerido',
      minlength:`Este campo debe tener al menos ${error.value.requiredLength} caracteres`,
      email: "El valor debe ser de un email valido",
      pattern: (controlName=='nombre')? 'Este campo no debe contener numeros':'',
      matDatepickerParse: 'El dato ingresado no es el esperado.'

    }

    if(opciones[error.key]) defaultMsg = opciones[error.key]
    return defaultMsg;
  }


}
