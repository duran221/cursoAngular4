
export class EmpleadoModel2{


  /**
   * Esta forma de declarar las variables me permite ahorrar la sintaxis convencional, de esta forma estoy
   * Declarando y a la vez inicializando los atributos del modelo:
   * @param nombre
   * @param edad
   * @param cargo
   * @param contrasena
   */
  constructor(
      public nombre:string,
      public edad: number,
      public cargo: string,
      private contrasena: number
  ){}

  getContrasena(): number{

    return this.contrasena;
  }
}
