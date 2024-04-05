import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'chaque-produi',
    loadChildren: () => import('./chaque-produi/chaque-produi.module').then( m => m.ChaqueProduiPageModule)
  },
  {
    path: 'all-notes',
    loadChildren: () => import('./all-notes/all-notes.module').then( m => m.AllNotesPageModule)
  },
  
  {
    path: 'chanel',
    loadChildren: () => import('./chanel/chanel.module').then( m => m.ChanelPageModule)
  },
  {
    path: 'chaque-note',
    loadChildren: () => import('./chaque-note/chaque-note.module').then( m => m.ChaqueNotePageModule)
  },


 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
