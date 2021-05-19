
import {Injectable} from '@angular/core';

//El módulo HttpClient que me permite enviar peticiones a un servicio específico:
import {HttpClient,HttpErrorResponse } from '@angular/common/http';

import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';



@Injectable()
export class PeticionesService{

  private variable: string;
  private url: string;
  private REST_API_SERVER = "http://localhost/curso_angular_api2/public/index.php/productos/12";

  constructor(
    //Mediante la inyección de dependencias recibimos el objeto Http que nos permite realizar solicitudes:
    private _http: HttpClient
  ){
    this.variable = "ok";
    //Inicializamos la url a la cual vamos a realizar la petición:
    this.url= "http://localhost/curso_angular_api2/public/index.php/productos";

  }


  public sendGetRequest(){
    console.log("Provando el método GET de Angular: ");
    return this._http.get(this.REST_API_SERVER).pipe(catchError(this.handleError));
  }

  getPrueba = () => {
    return "Ok";
  }


   fetchItems = async (): Promise<Array<any> | string> => {

    try {
        let datos = {
          "nombre" :  "Peras Uva",
          "descripcion" : "Ricas Uvas",
          "precio" : 2000,
          "imagen" : "dfsaf/fa/dasfs"
      };
        const response = await fetch(this.url,{
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          body: JSON.stringify(datos)
        });
        const { data } = await response.json();
        return data;

    } catch (error) {
        if (error) {
            return error.message
        }
    }
  }


  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


}

