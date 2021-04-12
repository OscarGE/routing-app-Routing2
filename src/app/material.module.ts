import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [
    MatButtonModule,
    MatExpansionModule,
    MatGridListModule
  ],
  exports: [
    MatButtonModule,
    MatExpansionModule,
    MatGridListModule
  ]
})
export class MaterialModule { }
