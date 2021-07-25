import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserBorrowerPage } from './user-borrower.page';

const routes: Routes = [
  {
    path: '',
    component: UserBorrowerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserBorrowerPageRoutingModule {}
