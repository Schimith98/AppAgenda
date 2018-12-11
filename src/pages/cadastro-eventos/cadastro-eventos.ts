import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-cadastro-eventos',
  templateUrl: 'cadastro-eventos.html',
})
export class CadastroEventosPage {
  evento = {
    data: "",
    hora: "",
    cliente: "",
    tel: "",
    tema: "",
    local: "",
    valor: "",
    descricao: ""
  }
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public toastCtrl: ToastController) {
                
  }
  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'O evento NÃO foi agendado',
      duration: 3000,
    });
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroEventosPage');
  }

  agendarEvento(evento){
    this.presentToast();
  }
}
