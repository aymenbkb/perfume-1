import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterRoutingModule } from './filter-routing.module';
import { FilterComponent } from './filter.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterRoutingModule
  ]
})
export class FilterModule { }
