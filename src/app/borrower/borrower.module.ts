import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BorrowerPageRoutingModule } from './borrower-routing.module';

import { BorrowerPage } from './borrower.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BorrowerPageRoutingModule
  ],
  declarations: [BorrowerPage]
})
export class BorrowerPageModule {}
