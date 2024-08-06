import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChaqueNotePage } from './chaque-note.page';

const routes: Routes = [
  {
    path: '',
    component: ChaqueNotePage
  },
  {
    path: ':name',
    component: ChaqueNotePage
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
export class ChaqueNotePageRoutingModule {}
