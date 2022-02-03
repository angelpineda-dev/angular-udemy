import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
// import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Gohan',
    poder: 3000
  }

  /* agregarNuevoPersonaje(arg: Personaje){
    this.personajes.push(arg);
  } */

  //? Una forma de llamar el sercivio y funciona.
  /* get personajes():Personaje[]{
    return  this.dbzService.personajes
  } */

  /* Esto se conoce como una inyección de dependencias, se esta inyectando el servicio en este componente. */
  constructor(/* private dbzService: DbzService */){

    /* Cuando se crea el componente se le asigna el valor de los personajes. */
    // this.personajes = this.dbzService.personajes;
  }

}
