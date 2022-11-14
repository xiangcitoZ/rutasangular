import { Component, OnInit } from '@angular/core';
//NECESITMAOS RECUPERAR PARAMETROS DE RUTA
//INCLUIMOS Router PARA LA REDIRECCION POR COIDGO
import {ActivatedRoute, Params , Router} from '@angular/router';


@Component({
  selector: 'app-numerodoble',
  templateUrl: './numerodoble.component.html',
  styleUrls: ['./numerodoble.component.css']
})
export class NumerodobleComponent implements OnInit {
  //NECSITAMOS VARIABLES PARA CAPTURAR NUESTRO NUMERO
  //Y DIBUJAR EL DOBLE
  public numero!: number;
  public doble!: number;

  //ACTIVATEDROUTER VIENE INYECTADO DESDE EL MODULE
  //NECESITAMOS DECLARARLO IoC
  //PARA PODER RECUPEAR LOS PARAMETROS
  constructor(private _activeRoute: ActivatedRoute
    ,private _router: Router) { }

  
  ngOnInit(): void {
    //EN EL INIT DEL COMPONENT ES DONDE E DEBEMOS SUSCRIBIRNOS
    //Y RECUPEAR PARAMETRO/S
    //UTILIZAMOS EL OBJETO DE LA INYECCION
    this._activeRoute.params.subscribe((parametros: Params)=> {
      //DENTRO DE Params, PODEMOS RECUPEAR CADA PARAMETRO POR
      //SU NAME: parametros['PARAMETER NAME']
      if(parametros['numero'] != null){
        //LOS PARAMETROS SIEMPRE SON string
        this.numero = parseInt(parametros['numero']);
        this.doble = this.numero * 2;
      }

    });
  }

}
