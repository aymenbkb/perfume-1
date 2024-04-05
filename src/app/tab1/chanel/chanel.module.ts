import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChanelPageRoutingModule } from './chanel-routing.module';

import { ChanelPage } from './chanel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChanelPageRoutingModule
  ],
  declarations: [ChanelPage]
})
export class ChanelPageModule {}
