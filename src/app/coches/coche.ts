
export class CocheModel {


  /**
   * Algo bonito de este constructor es que me permite establecer parámetros de paso opcionales, si no le paso
   * Dichos parámetros, el constructor establecerá los valores que hemos definido como valores por defecto
   * @param nombre
   * @param caballos
   * @param color
   */
  constructor(
    public nombre: string="",
    public caballos: number=0,
    public color : string = ""
  ){

  }
}
