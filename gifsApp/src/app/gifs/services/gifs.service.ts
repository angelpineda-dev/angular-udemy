import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GifsResponse } from '../interface/gifs.interface';

/* providedIn - Se utiliza en la parte de los servicios y esta fue añadida en la v4 de angular, permite que los servicios pueden estar incluidos en el momento que se crea el bundled de la app.

De esta manera le indica a angular que no importa en que parte de la app se encuentre, este servicio será unico y de manera global en el root.

Así no tenemos que especificarlos en los providers. De hacerlo solo lo podremos ocupar en ese módulo.

*/

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'B2rEp8Z0ViSdlKZPyK4FD7BxHf1zaDqM';
  private _historial: string[] = [];



  public apiGif: string = 'http://api.giphy.com/v1/gifs';
  public resultados:Gif[] = [];

  constructor(private http: HttpClient){

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }


  get historial(){
    return [...this._historial]
  }

  async buscarGifs(query:string){

    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,9);

      localStorage.setItem('historial', JSON.stringify(this._historial))
    }


    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', query);

    // console.log(params.toString());

    this.http.get<GifsResponse>(`${this.apiGif}/search`, { params })
      .subscribe((resp) => {
        //console.log(resp.data)
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados))
      })

  }
}
