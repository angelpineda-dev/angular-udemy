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

  constructor(private paisService:PaisService) { }

  buscar(){
    this.isError = false;

    this.paisService.buscarPais(this.termino)
      .subscribe(resp => {
        console.log(resp);
        this.paises = resp
      },(err) => {
        this.isError = true;
        this.paises = [];
      })

  }
}
