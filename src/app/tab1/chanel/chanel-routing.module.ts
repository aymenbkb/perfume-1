import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChanelPage } from './chanel.page';
import { Tab1Page } from '../tab1.page';

const routes: Routes = [
  {
    path: '',
    component: ChanelPage
  },
  {
    path: ':nom',
    component: ChanelPage
  },
  {
    path: 'chaque-produi',
    loadChildren: () => import('../chaque-produi/chaque-produi.module').then( m => m.ChaqueProduiPageModule)
  },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChanelPageRoutingModule {}
