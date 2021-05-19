//Importamos el componente principal de el framework:
import { Component } from "@angular/core";


//Este es un decorador, al cual pasamos un objeto JSON, no es una función, solo permite aportar una funcionalidad
//A una clase, por ello no se usa punto y coma:
@Component({
  selector: 'fruta', //Etiqueta o selector html donde vamos a cargar nuestro componente
  //Aquí vamos a tener la plantilla html que nos permite pintar el html de nuestra vista. las dobles llaves {{}}
  //Permiten manejar interpolación Esta es una plantilal en linea.
  //También podemos cargar una plantilla que se encuentre en un fichero independiente de la siguiente manera:
  templateUrl: './frutas.component.html'
})

//Esto me permite exportar la clase  hacia el exterior para usarlo en otros ficheros, en el interior,
//Contiene propiedades que podemos posteriormente usar por ejemplo en nuestro TEMPLATE:
//Se pueden tener diferentes encapsulaciones (public, private...)
export class FrutasComponent{
  public nombre_componente= 'Componente de fruta' ;
  public listado_frutas = 'Naranja, Manzana, Pera, e';

  //Aquí estoy declarando una variable como privada, con esta nueva accesibilidad el la variable solo
  //Puede ser usada por la clase de manera interna
  private  nombre_dueno = 'Cristian Fernando Duran';

  //Esta propiedad es de tipo string o cadena
  public nombre: string;

  //Esta propiedad es de tipo número:
  public numero: number;

  //Esta propiedad es de tipo booleano:
  public mayorEdad: boolean = true;

  //Esta propiedad es de tipo array de cadenas o string:
  public arrayColores: Array<string> = ["Azul","Rojo","Negro"];

  //Esta propiedad es un array de cualquier cosa:
  public arrayNumeros: Array<any> = ["1","2",3, "Four", false];

  //Esta propiedad puede ser cualquier tipo de dato:
  cualquierCosa: any = "Puedo ser cualquier cosa";

  //Así se declara un constructor en Angular, este constructor es lo primero que se instancia cuando la clase
  //Es llamada, funciona como cualquier constructor antes aprendido, se puede recibir parámetros etc etc.
  //Se recomienda usar el constructor sólo para instanciar objetos, inicializar variables, etc.
  constructor (){

    //Se recomienda inicializar las variables aquí:
    this.nombre= "Cristian Duran";
    this.numero= 12;
    console.log(`${this.nombre}  ${this.numero}`);

  }

  /**
   *Este método se invoca automáticamente, y es el primero en ejecutarse, luego de que el
   *El constructor ha sido invocado, podemos colocar todo tipo de lógica aquí ya que en teoría
   *Las variables de la clase principal a estas alturas ya están declaradas e inicializadas
   */
  ngOnInit(){
    this.saludar(this.nombre);
    this.aumentarNumero(this.numero);

    console.log("Ejemplo diferencias entre let y var");
    this.variables();
  }

  /**
   * De esta manera podemos declarar métodos en TypeScript y Javascript, dentro se enbebe toda la lógica que
   * Conocemos de un método de programación común:
   * @param nombre
   */
  saludar(nombre){

    console.log('Mi primer hola mundo desde un método '+ nombre);

  }

  /**
   *Segunda forma más bonita de declarar un método:
   * @param numero
   */
  aumentarNumero = numero => {

    console.log(`Soy un genio ${numero+=1}`);
  };


  /**
   * La diferencia más marcada entre let y var es el alcance, mientras var tiene un alcance mayor, más
   * Global por así decir, let tiene alcance únicamente del bloque sobre el cual se está ejecutando
   */
  variables = () => {
    //Mientras var tiene un alcance más global, let tiene alcance únicamente sobre el bloque que se esté
    //Ejecutando, esto quiere decir que cuando uso let, como se ve en el ejemplo, n2 únicamente tiene alcance
    //Para el bloque 'if', cuando se abandona este bloque dicha variable deja de tener alguna varidez:
    var n1= 40;
    var n2= 30;

    let n3 = 20;

    if (n1 === 40){
      let n2= 35;
      var n1= 57;
      let n3= 50;
      console.log(n1);
      console.log(n2);

      console.log(n3);
      console.log(n1);

    }

    console.log(n2);
    console.log(n3);
    console.log(n1);

  }

}
