import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'update/:id',
    loadChildren: () => import('./update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'borrow',
    loadChildren: () => import('./borrow/borrow.module').then( m => m.BorrowPageModule)
  },
  {
    path: 'borrower',
    loadChildren: () => import('./borrower/borrower.module').then( m => m.BorrowerPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'user-borrow',
    loadChildren: () => import('./user-borrow/user-borrow.module').then( m => m.UserBorrowPageModule)
  },
  {
    path: 'user-borrower',
    loadChildren: () => import('./user-borrower/user-borrower.module').then( m => m.UserBorrowerPageModule)
  },
  {
    path: 'update-borrower',
    loadChildren: () => import('./update-borrower/update-borrower.module').then( m => m.UpdateBorrowerPageModule)
  },
  {
    path: 'update-borrower/:id',
    loadChildren: () => import('./update-borrower/update-borrower.module').then( m => m.UpdateBorrowerPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }