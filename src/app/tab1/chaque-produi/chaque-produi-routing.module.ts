import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChaqueProduiPage } from './chaque-produi.page';

const routes: Routes = [
  {
    path: '',
    component: ChaqueProduiPage
  },
  { path :':id',
   component :ChaqueProduiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChaqueProduiPageRoutingModule {}
