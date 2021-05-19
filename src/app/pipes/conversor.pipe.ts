
//Importamos las clases necesarias para crear la Pipe:
import {Pipe, PipeTransform} from '@angular/core';

//Este decorador nos permite definir con qué nombre se va a denorminar la pipe que vamos a crear
@Pipe({name: 'conversor'})
export class ConversorPipe implements PipeTransform{

  /**
   * Este método heredado de la interfaz PipeTransform es el que nos permite crear la pipe:
   * @param number1
   * @param number2
   */
  transform( number1: string, number2: string){
      let n1 = parseInt(number1);

      let n2= parseInt(number2);

      let result = `El resultado para la multplicación ${number1} x ${number2} = ${n1*n2}`;

      return result;
  }
}
