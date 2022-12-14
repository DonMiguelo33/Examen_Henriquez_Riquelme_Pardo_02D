import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../service/registroservice.service';

import {
FormGroup,
FormControl,
Validators,
FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor( private alertController: AlertController,
    private navController: NavController,
    private registroService: RegistroserviceService,
    private fb: FormBuilder) {}

  ngOnInit() {
  }

  async Salir(){
    const a = 1;
    localStorage.removeItem('ingresado');
    this.navController.navigateRoot('login');
    if (a==1){
    this.alertMsg();
    }
  }
    
  async alertMsg(){
    const alert = await this.alertController.create({
    header: 'Sesión Cerrada!',
    message: 'Hasta luego',
    buttons: ['Adios'],
    });
      await alert.present();
      return;
  }

}
