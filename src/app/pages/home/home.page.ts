import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  //Creamos una variable de tipo componente(interface)
  
  componentes: Componente[] = [

    // En el frontend debemos llamar a estas propiedades, recorriendolas con un NGfor
    // Llaves cuadradas en cada propiedad del campo, para que recorra cada objeto y le de formato segun su prestiva propiedad
    {
      icon: 'accessibility-outline',
      name: 'Action Sheet',
      redirecTo: '/action-sheet'
    },
    {
      icon: 'alert-outline',
      name: 'Alert',
      redirecTo: '/alert'
    },
  ];



  constructor() { }

  ngOnInit() {
  }

}
