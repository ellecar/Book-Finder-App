import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserBorrowPageRoutingModule } from './user-borrow-routing.module';

import { UserBorrowPage } from './user-borrow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserBorrowPageRoutingModule
  ],
  declarations: [UserBorrowPage]
})
export class UserBorrowPageModule {}
