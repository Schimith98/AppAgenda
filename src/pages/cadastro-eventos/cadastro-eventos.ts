import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';


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
    tema: "",
    local: "",
    valor: "",
    descricao: ""
  }
  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroEventosPage');
  }

  agendarEvento(evento){
    this.navCtrl.pop(evento);
  }
}
