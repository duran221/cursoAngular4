
//Importación de los módulos necesarios para trabajar con enrutamiento en Angular:
import { ModuleWithProviders } from "@angular/core";
import {Routes, RouterModule, Route} from '@angular/router';

//Importar los componentes: Estos componentes son los que vamos a enrutar en nuestra aplicación:
import {EmpleadoComponent} from './empleado/empleado.component';
import {FrutasComponent} from './frutas/frutas.component';
import {CochesComponent} from './coches/coches.component';


import {homeComponent} from './home/home.component';
import {contactoComponent} from './contacto/contacto.component';




//Un array donde definimos las rutas que utilizará la aplicación, nótese como se usan los componentes
//Que hemos construido para asociarlos a las rutas que se establecen en este archivo:
const appRoutes: Routes = [
    //Esta es la ruta inicial, es decir cuando se inicie la aplicación por primera vez, aquí ingresará:
    {path: '', component : homeComponent},
    {path: 'empleado', component: EmpleadoComponent},
    {path: 'frutas', component: FrutasComponent},
    {path: 'home', component: homeComponent},
    {path: 'contacto', component: contactoComponent},

    {path: 'coches', component: CochesComponent},

    //De esta forma indicamos que a esta ruta se le va a asignar un parámetro, que vamos a recibir:
    {path: 'contacto/:param1', component: contactoComponent},

    //Esta ruta especial se va a direccionar ocurra un error, por ejemplo cuando ocurra un error 404:
    {path: '**', component: FrutasComponent},

];

//Este procedimiento se realiza para cargar el provider de el archivo de configuración de Angular
export const appRoutingProviders: any[] = [];

//Aquí le indicamos qué array de rutas debemos cargar en la configuración interna de las rutas del framework
export const rounting: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);
