import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateBorrowerPageRoutingModule } from './update-borrower-routing.module';

import { UpdateBorrowerPage } from './update-borrower.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateBorrowerPageRoutingModule
  ],
  declarations: [UpdateBorrowerPage]
})
export class UpdateBorrowerPageModule {}
