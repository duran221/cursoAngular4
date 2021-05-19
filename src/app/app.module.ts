import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

//Este módulo se tiene que importar si queremos usar peticiones http en alguno de los módulos
//Del proyecto:
import { HttpClientModule } from '@angular/common/http';

//En esta importación nos traemos la configuración de rutas que hemos definido en el archivo app.routing
import {rounting, appRoutingProviders} from './app.routing';

import {FormsModule} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

import {MaterialModule} from './material.module';



import { AppComponent } from './app.component';


//Aquí importamos el componente que hemos creado anteriormente, el componente debe registrarse, de lo contrario
//No será visible en ninguna parte:
import { FrutasComponent } from './frutas/frutas.component';

//Estoy importando el componente para poderlo usar en la aplicación:
import {homeComponent} from './home/home.component';
import { contactoComponent } from './contacto/contacto.component';

//Estoy importando el componente para poderlo usar en la aplicación:
import {EmpleadoComponent} from './empleado/empleado.component';
import {CochesComponent} from './coches/coches.component';

//Importamos la pipe que vamos a utilizar:
import {ConversorPipe} from './pipes/conversor.pipe';

import {HijoComponent} from './hijo/hijo.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { PhotosComponent } from './photos/photos.component';
import { PaintPhotosComponent } from './paint-photos/paint-photos.component';
import { TableSortingExample } from './exaple-table/exaple.component';

@NgModule({
  //Este array contiene las directivas, componentes y pipes que vamos a utilizar:
  declarations: [
    AppComponent,
    //Aquí registramos el componente para que quede listo para ser usado:
    FrutasComponent,
    //Aquí estoy registrando el componente para poderlo usar:
    EmpleadoComponent,
    homeComponent,
    contactoComponent,
    //En declarations, debemos incluir la pipe para que podamos usarla:
    ConversorPipe,
    CochesComponent,
    HijoComponent,
    EstudianteComponent,
    PhotosComponent,
    PaintPhotosComponent,
    TableSortingExample
  ],
  imports: [
    BrowserModule,
    //Además, debemos importar el módulo para que este quede listo para ser usado:
    HttpClientModule,
    FormsModule,
    //Aquí estamos utilizando las rutas que hemos importado más arriba:
    rounting,
    BrowserAnimationsModule,
    MaterialModule
  ],
  //Aquí lanzamos el servicio que hace que las rutas se lancen y funcionen cada vez que solicitamos un archivo
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
