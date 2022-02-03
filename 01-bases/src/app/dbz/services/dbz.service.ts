import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

/* La diferencia entre un servicio y un componente, es el decorador y este es de tipo Injectable. */

@Injectable()
export class DbzService{

  constructor() {}

  private _personajes: Personaje[] = [
    {
      nombre:'Goku',
      poder: 15000
    },
    {
      nombre:'Vegueta',
      poder:13000
    }
  ];

  get personajes(): Personaje[] {
    // lo retornamos destructurado para no sobreescribir o manipular los datos, debido a que javascript maneja los objetos por referencia.
    return [...this._personajes];
  }

  // método
  agregarPersonaje( personaje: Personaje) {
    this._personajes.push(personaje);
  }
}
