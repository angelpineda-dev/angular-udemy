import { Injectable } from '@angular/core';

/* providedIn - añadida en la v4 de angular, permite que los servicios pueden estar incluidos en el momento que se crea el bundled de la app.

De esta manera le indica a angular que no importa en que parte de la app se encuentre, este servicio será unico y de manera global en el root.

Así no tenemos que especificarlos en los providers. De hacerlo solo lo podremos ocupar en ese módulo.

*/

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];

  get historial(){
    return [...this._historial]
  }

  buscarGifs(query:string){
    this._historial.unshift(query);

    console.log(this._historial);
  }
}
