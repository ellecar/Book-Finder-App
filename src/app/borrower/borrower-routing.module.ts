import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BorrowerPage } from './borrower.page';

const routes: Routes = [
  {
    path: '',
    component: BorrowerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BorrowerPageRoutingModule {}
