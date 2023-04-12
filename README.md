# 1PFBernardo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Que se hizo
1. Instalacion de bootstrap para las grillas
2. Estructura del proyecto
  1. La Carpeta de Modulos contendra los distintos componentes separados en submodulos
  2. La Carpeta Shared tendra todo lo que se comparta en la carpeta anterior y proximamente tambien de la carpeta Views cuando implementemos las rutas.
3. Creacion de todos los modulos que vamos a usar 
4. Instalacion de Angular Material 
5. Importando el Toolbar en dashboard 
6. Utilizando ViewChild para invocar un toogle sobre #drawer Recibiendo el Valor por un Input
7. Otro ViewChild para acceder a una propiedad del tipo boolean y darle movimiento desde adentro y desde afuera para el icono de menu
8. Capturando el evento del backdrop del menu,  cuando se abre el menu lateral, al tocar en cualquier lugar de la pantalla se volvia y el icono quedaba a 90 grados 
9. Dos Formas de mostrar una lista de estudiantes, con Tabla y con card
10. Agregando el Dialog de Estudiante con sus respectivos campos
11. Agregando DataPicker con su formato de argentina DD/MM/YYYY
12. Agregando un Servicio para la comunicacion entre componentes hermanos
13. Se creo el pipe con nombre completo y en el pipe ademas se agrego algunas funciones de js para que el apellido este en mayuscula, y el nombre muestre siempre la primera letra en Mayuscula
14. Se hicieron las validaciones con el pipe, pasando para el futuro no solo el error si no el campo
15. Se agrego en el datapicker una funcion de control para poder ingresar solo datos entre 1940 y el dia actual.
16. En el Menu lateral tiene dos tag a que llaman a una funcion que cambian el valor y muestra la tabla, que se pidio, y un ul que no se pidio respecto a los items de los cursos
17. En caso de que los dos items esten en falso muestra un mensaje y hace una simulacion de redireccionamiento
18. tengo aplicado los snackbars, se muestra cuando tocamos salir en la aplicacion



