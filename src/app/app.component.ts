import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Componente[] = [
    {
      icon: 'qr-code-outline',
      name: 'Codigo QR',
      redirecTo: '/qr'
    },          
    {
      icon: 'information-circle-outline',
      name: 'Quienes Somos',
      redirecTo: '/quienes'
    },
    {
      icon: 'newspaper-outline',
      name: 'Notcias',
      redirecTo: '/calendario'
    },
    {
      icon: 'log-out-outline',
      name: 'Log out',
      redirecTo: '/logout'
    }          
  ];
}

