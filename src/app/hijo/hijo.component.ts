import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'componente-hijo',
  template: `
    <hr/>

    <strong>Este es el {{title}}</strong>
    <ul>
      <li>{{propiedad1}}</li>
      <li>{{propiedad2}}</li>
      <li>{{propiedad_entrante.web}}</li>
    </ul>

    <button (click)="enviar()">Enviar Datos Al Padre</button>
  `
})
export class HijoComponent{
  public title: string;
  //Mediante este decorador podemos definir de manera básica una propiedad entrante:
  @Input() propiedad1 : string;
  //Una propiedad entrante a la cual le hemos establecido un 'alias' en el html:
  @Input('texto1') propiedad2: string;
  //Esta propiedad es un objeto y viene directamente desde otro archivo typescript:
  @Input('persona') propiedad_entrante: any;

  //Esta propiedad funciona como un evento y permite EMITIR DATOS AL EXTERIOR:
  @Output('desde_el_hijo')propiedad_a_enviar = new EventEmitter();

  constructor(){
    this.title = "Componente hijo";
  }

  ngOnInit(){
    //Aquí se usa el componente.
    console.log(this.propiedad_entrante);
  }


  enviar(){
    //Este método permitirá exportar la propiedad al exterior de este componente hacia su componente PADRE:
    this.propiedad_a_enviar.emit({
      nombre:'Cristian Fernando Duran L',
      web: 'Cristian@gmail.com',
      twitter: 'Duran221'
    })
  }

}
