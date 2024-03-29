import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
    {path:'',component:LoginRegComponent},
    {path: 'home' , component: HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'products',component:ProductsComponent},
    {path:'cart',component:CartComponent},
    {path:'admin',component:AdminComponent},
    {path:'checkout',component:CheckoutComponent},

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  } )
  export class AppRoutingModule { }