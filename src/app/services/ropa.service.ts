
//Importamos el servicio que nos permite usar inyección de dependencias a la hora de usar este servicio
import {Injectable} from '@angular/core';

//Este decorador nos permite indicar a angular que va a crear una instancia de esta clase por nosotros:
@Injectable()
export class RopaService{

  private nombrePrenda: string;

  private coleccionRopa = ['Pantalones Blancos','Camiseta Roja'];

  constructor(){
    this.nombrePrenda= 'Pantalones vaqueros';
  }

  /**
   *La función permite retornar un valor que es pedido por el servicio en el módulo home:
   */
  prueba = () => this.nombrePrenda;

  addRopa = (nombrePrenda:string) : Array<string> => {
    this.coleccionRopa.push(nombrePrenda);

    return this.coleccionRopa;
  }

  /**
   * Obtener una coleccion de prendas
   */
  getRopa = () : Array<string> => {
    return this.coleccionRopa
  }

  /**
   * Eliminar una prenda a partir de su posición en el Array:
   * @param indexRopa: Posición de elemento a eliminar en el array
   */
  deleteRopa = (indexRopa: number) : boolean => {
    try{
      this.coleccionRopa.splice(indexRopa,1);
      return true;
    }catch(e){
      return false;
    }

  }


}
