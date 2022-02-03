import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  /* La siguiente propiedad vendra desde el componente padre. */
  // @Input() personajes: Personaje[] = [];

  get personajes(){
    return this.dbzService.personajes;
  }

  // Aquí se utiliza nuestro servicio al ser importado.
  constructor( private dbzService: DbzService){

  }
}
