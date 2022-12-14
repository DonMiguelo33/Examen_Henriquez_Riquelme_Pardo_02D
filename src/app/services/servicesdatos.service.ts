import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Usuario{
  nomUsuario: string;
  correoUsuario: string;
  passUsuario: string;
  repassUsuario: string;
}

const ITEMS_KEY = 'my-usuarios';

@Injectable({
  providedIn: 'root'
})
export class ServicesdatosService {

  private _storage : Storage;

  constructor(private storage: Storage) {
    this.init();
   }

   //definimos metodo creacion almacenamiento
   async init(){
    const storage = await this.storage.create();
    this._storage= storage;
   }
}
