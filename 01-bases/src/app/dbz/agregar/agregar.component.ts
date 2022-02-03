import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})

export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: "",
    poder: 0
  }

  //? Inyectamos el servicio (importamos), y ahora lo podemos utilizar en esta clase.
  constructor(private dbzService: DbzService) {

  }

  /* El Output - sirve cuando tenemos un componente hijo y ese hijo necesita emitir a un componente padre.
    sirve para emitir eventos, entre las llaves se especifica el tipo de dato que se tiene que enviar porque es un generico.

  */

  // Ya no necesitamos esta linea para crear un personaje.
  //? @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter()

  agregar(){

    if (this.nuevo.nombre.trim().length === 0) { return; }

    // Ya no necesitamos esta linea para crear un personaje.
    //? this.onNuevoPersonaje.emit( this.nuevo )

    //? Ejecutamos el método de nuestro servicio donde verdaderamente lo utilizamos.
    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre:'',
      poder:0
    }
  }
}
