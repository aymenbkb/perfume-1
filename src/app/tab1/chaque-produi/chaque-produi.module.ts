import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChaqueProduiPageRoutingModule } from './chaque-produi-routing.module';

import { ChaqueProduiPage } from './chaque-produi.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChaqueProduiPageRoutingModule
  ],
  declarations: [ChaqueProduiPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
})
export class ChaqueProduiPageModule {}
