
import {Component} from '@angular/core';

import {CocheModel} from './coche';

import {PeticionesService} from '../services/peticiones.service';

@Component(
  {
    selector: 'coches-tag',
    templateUrl: './coches.component.html',
    providers : [PeticionesService]
  }
)

export class CochesComponent {

  public coche: CocheModel;

  public coches: Array<CocheModel>;

  public articulos;

  public administrador;

  constructor(
    private _peticionesService : PeticionesService
  ){
    this.coche = new CocheModel();

    this.coches= [

      new CocheModel('Seat Panda',12,'Blanco'),
      new CocheModel('Renault Sandero',20,'Negro')

    ];

    this.administrador= true;

  }

  ngOnInit(){

    this._peticionesService.fetchItems().then(response =>{
      console.log(response);
    },error =>{
      console.log(error.value);
    });

    //Al invocar al método del servicio que hemos creado, este nos trae on objeto response que debemos tratar:
    //usamos subscribe el cual nos permite usar dos funciones, el primero argumento la función flecha que
    //Permitirá procesar los datos de la respuesta, la segunda función para procesar errores.
    this._peticionesService.sendGetRequest().subscribe((data: any[])=>{
      if(data["code"]==200){

        this.articulos = data["data"];
        console.log(data["data"]);
      }

    },//Si se detecta un error, imprimalo en consola:
    error =>{
      var errorMessage = <any> error;
      console.log(errorMessage);
    });

  }

  onSubmit(){
    console.log(this.coche);
    this.coches.push(this.coche);

    this.coche = new CocheModel("",0,"");

  }

  cambiarAdministrador(value){

    this.administrador= value;
  }
}


