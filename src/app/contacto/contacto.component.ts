import { Component } from "@angular/core"

//Esta importación es Importante para recoger parámetros, hacer redirecciones y trabajar todo con rutas:
import {Router, ActivatedRoute, Params} from '@angular/router';



@Component({
  selector: 'contacto-tag',
  templateUrl : './contacto.component.html'
})

export class contactoComponent {

  public tittle: string;
  public parametro: string;
  //Esta propiedad va a ser enviada al exterior, simplemente la definimos:
  public dato_externo : any;

  /**
   * Por el constructor inyectamos las instancias de los elementos que hemos importado anteriormente,
   * No debemos preocuparnos por instanciarlos porque el framework lo hace por nosotros:
   * @param _route
   * @param _router
   */
  constructor(
    private _route: ActivatedRoute,
    private _router: Router

   ){

    this.tittle= 'Bienvenido al sitio de contacto';
    //Y posteriormente la inicializamos:
    this.dato_externo = {
      id: 1,
      web : 'Cristian.com.co',
      tematica: 'desarrollo'
    }
  }

  ngOnInit(){
    //_route me trae un array con todos los parámetros de la url, con el forEach recorro cada parámetro:
    //Se recomienda usar funciones de flecha para este tipo de procedimientos
    this._route.params.forEach( (params: Params) =>{

        this.parametro= params['param1'];
    });
  }

  redirigir = () => {

    //navigate nos permite ir a una URL específica, en este caso estamos enviando parámetros
    this._router.navigate(['/contacto','cristianfernandoduran']);
  }

  redirigir2 = () => {

    //navigate nos permite ir a una URL específica, en este caso no estamos enviando parámetros
    this._router.navigate(['/home']);
  }

  public datosRecibidos : any;
  /**
   * Este método recibe los datos que hemos enviado desde el componente html y que previamente recibió desde
   * Su componente hijo:
   * @param $event : Datos enviados que se reciben desde el componente hijo
   */
  recibirDatos = ($event) =>{
    console.log($event);
    this.datosRecibidos= $event;

  }

}
