import {Component} from '@angular/core';

//Importamos el archivo con el servicio que vamos a utilizar
import {RopaService} from '../services/ropa.service';


@Component({
  selector: 'home-tag',
  templateUrl: './home.component.html',
  //Esto lo que hace es mediante el inyector de dependencias generarnos instancias de los objetos que coloquemos
  //Aquí:
  providers: [RopaService]

})

export class homeComponent{
  public  tittle: string;

  public coleccionRopa : Array<string>;

  public prendaGuardar : string;

  public fecha : Date;

  public nombreConvertir: string;

  constructor(
    //Aquí estamos inyectando la instancia de el servicio que hemos creado denominado RopaService:
    private _ropaService : RopaService
  ){
    this.tittle = "Bienvenido a la página principal";

    this.fecha = new Date(2021,2,2021);

    this.nombreConvertir = 'cristian fernando duran';
  }

  ngOnInit(){
    console.log(this._ropaService.prueba());

    this.coleccionRopa = this._ropaService.getRopa();
  }

  guardarRopa = () =>{
    this._ropaService.addRopa(this.prendaGuardar);
    this.prendaGuardar = null;
  }

  eliminarPrenda = (indexPrenda: number) => {
    this._ropaService.deleteRopa(indexPrenda);

  }

}
