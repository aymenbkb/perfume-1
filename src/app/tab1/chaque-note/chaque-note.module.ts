import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChaqueNotePageRoutingModule } from './chaque-note-routing.module';

import { ChaqueNotePage } from './chaque-note.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChaqueNotePageRoutingModule
  ],
  declarations: [ChaqueNotePage]
})
export class ChaqueNotePageModule {}
