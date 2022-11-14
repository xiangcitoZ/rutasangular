import { HomeComponent } from "./components/home/home.component";
import { CineComponent } from "./components/cine/cine.component";
import { MusicaComponent } from "./components/musica/musica.component";
import { TelevisionComponent } from "./components/television/television.component";
import { Error404Component } from "./components/error404/error404.component";
import { NumerodobleComponent } from "./components/numerodoble/numerodoble.component";

//NECSITAMOS LOS SIGUIENTES MODULOS PARA REALIZAR ROUTING
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';



//DEFINIMOS UN ARRRAY DE OBJETOS Routes
const appRoutes: Routes = [
    {path: "", component: HomeComponent},
    {path: "numerodoble", component: NumerodobleComponent },
    {path: "numerodoble/:numero", component: NumerodobleComponent },
    {path: "musica", component: MusicaComponent},
    {path: "cine", component: CineComponent},
    {path: "television", component: TelevisionComponent},

    //EL PATH DE ERROR SIEMPRE EN LA ULTIMA
    {path: "**", component: Error404Component}
]

//DE ESTA CLASE DEBEMOS EXPLOTAR DOS ELEMENTOS PARA app.module.ts
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =
RouterModule.forRoot(appRoutes);

