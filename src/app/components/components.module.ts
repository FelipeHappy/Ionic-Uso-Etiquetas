import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  //Declaramos el componente que utilizaremos
  declarations: [
    HeaderComponent
  ],
  //Lo exportamos para que pueda ser utilizado fuera de su ruta
  exports: [
    HeaderComponent
  ]
  ,
  imports: [
    CommonModule,
    //Si no identifica los componentes o etiquetas no provenientes del angular
    //Importamos el modulo de Ionic para relacionarlos
    IonicModule
  ]
})
export class ComponentsModule { }
