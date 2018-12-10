import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroEventosPage } from '../cadastro-eventos/cadastro-eventos';
import { ListaEventosPage } from '../lista-eventos/lista-eventos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController) {
  }

  openCadastrarEvento() {
    this.navCtrl.push(CadastroEventosPage);
  }
  openListaEventos(){
    this.navCtrl.push(ListaEventosPage);
  }
}
