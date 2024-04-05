import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllNotesPage } from './all-notes.page';

const routes: Routes = [
  {
    path: '',
    component: AllNotesPage
  },
  {
    path: ':name',
    component: AllNotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllNotesPageRoutingModule {}
