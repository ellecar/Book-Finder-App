import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserBorrowerPageRoutingModule } from './user-borrower-routing.module';

import { UserBorrowerPage } from './user-borrower.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserBorrowerPageRoutingModule
  ],
  declarations: [UserBorrowerPage]
})
export class UserBorrowerPageModule {}
