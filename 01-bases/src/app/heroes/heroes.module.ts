import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
;

/* Al dominar los módulos podremos evitar que nuestras aplicaciones crescan de manera descontrolada */
@NgModule({
  /* declaraciones - es un arreglo que indican que componentes, pipes o cosas contiene este modulo y estas se encuentran invisibles */
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],
  /* exports - Que cosas quiero que sean visibles afuera de este módulo */
  exports:[
    ListadoComponent
  ],
  /* imports - usualmente solo van módulos */
  imports:[
    /* CommonModule ofrece las directivas como ngIf o ngFor  */
    CommonModule
  ]
})
// En Angular todo es una clase.
export class HeroesModule{}
