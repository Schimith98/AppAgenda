import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-cadastro-eventos',
  templateUrl: 'cadastro-eventos.html',
})
export class CadastroEventosPage {
  evento = {
    data: "",
    cliente: "",
    tema: "",
    local: "",
    valor: "",
    descricao: ""
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroEventosPage');
  }

  agendarEvento(evento){
    console.log(evento);
  }
}
