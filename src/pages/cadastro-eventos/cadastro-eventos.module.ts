import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroEventosPage } from './cadastro-eventos';

@NgModule({
  declarations: [
    CadastroEventosPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroEventosPage),
  ],
})
export class CadastroEventosPageModule {}
