import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino:string = ''
  isError:boolean = false;
  paises : Country[] = [];
  placeholder = "Buscar país...";

  constructor(private paisService:PaisService) { }

  buscar( termino:string){

    this.isError = false;
    this.termino = termino;

    this.paisService.buscarPais(termino)
      .subscribe(resp => {

        //console.log(resp);
        this.paises = resp

      },(err) => {
        this.paises = [];
        console.log(err);
        this.isError = true;
      })
  }

  sugerencias(event:string){
    this.isError = false;
  }
}
