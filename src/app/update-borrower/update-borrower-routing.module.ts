import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateBorrowerPage } from './update-borrower.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateBorrowerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateBorrowerPageRoutingModule {}
