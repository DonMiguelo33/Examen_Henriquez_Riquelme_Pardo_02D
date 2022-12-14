import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  qrCodeString='Presente';
  qrCodeString2='';
  qrCodeString3='';
  scannedResult:any;
  scannedResult2:any;
  scannedResult3:any;

  constructor(private menuController: MenuController) {}

  usuario={
    nom:'',
    fec:'',
    sec:'',

  }

  ngOnInit() {
  }

  generaScan(){
    this.qrCodeString= this.usuario.nom;
    this.qrCodeString2= this.usuario.fec;
    this.qrCodeString3= this.usuario.sec;
  
  }
  
  verScan(){
    this.scannedResult=this.qrCodeString;
    this.scannedResult2=this.qrCodeString2;
    this.scannedResult3=this.qrCodeString3;
  }

}
