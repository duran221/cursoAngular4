
export class empleadoModel{

    public nombre: string;
    public edad: number;
    private contrasena: number;

    constructor(nombre,edad){
      this.nombre= nombre;
      this.edad= edad;
      this.contrasena= 123456;

    }

    /**
     * Retorna el nombre completo de una persona con su edad:
     */
    fullName(): string {

      return this.nombre + this.edad;
    }

    /**
     * Retorna la contraseña de una persona:
     */
    getContrasena(): number{
      return this.contrasena;
    }

}
