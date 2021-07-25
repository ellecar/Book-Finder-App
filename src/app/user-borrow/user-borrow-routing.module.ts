import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserBorrowPage } from './user-borrow.page';

const routes: Routes = [
  {
    path: '',
    component: UserBorrowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserBorrowPageRoutingModule {}
