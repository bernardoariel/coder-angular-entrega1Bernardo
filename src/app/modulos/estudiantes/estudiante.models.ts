import { Estudiante } from "./estudiante";

class EstudianteModel implements Estudiante {
  public nombre: string;
  public apellido: string;
  public fechaNacimiento: string;
  public matricula: string;
  public fotoPerfilUrl: string;
  public fotoUrl: string;

  constructor(nombre: string, apellido: string, fechaNacimiento: string, matricula: string, fotoPerfilUrl: string, fotoUrl: string) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.matricula = matricula;
    this.fotoPerfilUrl = fotoPerfilUrl;
    this.fotoUrl = fotoUrl;
  }
}
