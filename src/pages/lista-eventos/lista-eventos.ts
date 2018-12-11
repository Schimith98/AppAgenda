import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the ListaEventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-eventos',
  templateUrl: 'lista-eventos.html',
})
export class ListaEventosPage {
 

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaEventosPage');
  }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'O evento NÃO foi excluido',
      duration: 3000,
    });
    toast.present();
  }

  removerEvento(){
    this.presentToast();
  }

}
