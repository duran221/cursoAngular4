import {Component} from '@angular/core';

//El modelo debe ser previamente importado:
import {empleadoModel} from './empleadoModel';


import {EmpleadoModel2} from './empleado2';

@Component({
  selector: 'empleado-tag',
  templateUrl: './empleado.component.html'
})

export class EmpleadoComponent{

  public titulo = "Título del co  mponente empleado";
  public empleado: empleadoModel;

  public empleado2: EmpleadoModel2;

  public trabajadores: Array<EmpleadoModel2>;

  public trabajadorExterno: boolean;

  public color: string;

  public colorSeleccionado: string;


  constructor(){

        //Se instancia el modelo que queremos Utilizar:
        this.empleado= new empleadoModel("Cristian Duran L.",25);

        this.empleado2= new EmpleadoModel2('Tumaco',23,'Ingeniero',1234);

        //Instanciando un array de Objetos:
        this.trabajadores = [
          new EmpleadoModel2('Tumaco2',23,'Ingeniero2',1234),
          new EmpleadoModel2('Daniel',17,'Programador',1234),
          new EmpleadoModel2('Sofia',23,'Ingeniero2',1234)
        ]

        this.trabajadorExterno= false;

        this.color= "red";

        this.colorSeleccionado= "yellow";
  }

  //Este método se llama automaticamente: Si lo que necesitamos es consumir un servicio AJAX para tener estos
  //Valores aquí si que conviene tener inicializado el objeto aquí, de lo contrario por buenas practicas se
  //Aconseja usar el constructor:
  ngOnInit(){

    console.log(this.empleado);
    console.log(this.empleado2);

  }

  cambiarTrabajador = valor =>{
    this.trabajadorExterno = valor;
  }

  cambiarColor = color =>{
    this.color= color;
  }

  mostrarColor = () =>{
    console.log(this.colorSeleccionado);
  }

}
