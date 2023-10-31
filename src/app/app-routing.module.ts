import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HomeComponent } from './components/home/home.component';
import {CategoryPageComponent} from "./components/category-page/category-page.component";
import {CreateProductComponent} from "./components/create-product/create-product.component";
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products/manage', component: CreateProductComponent, canActivate: [AuthGuard]},
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'category/:name', component: CategoryPageComponent },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
