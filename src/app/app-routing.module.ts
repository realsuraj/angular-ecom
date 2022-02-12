import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { RegisterComponent } from './register/register.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },

  {
    path: '', component: HomeComponent
  },
  
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'adminlogin', component: AdminLoginComponent
  },
  {
    path: 'admin-dashboard', component: AdminDashboardComponent
  },
  {
    path: 'product-view', component: ProductViewComponent
  },
  {
    path: 'shop-cart', component: ShopCartComponent
  },
  {
    path: 'user-profile', component: UserProfileComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AdminDashboardComponent, AdminLoginComponent, HomeComponent , LoginComponent, ProductViewComponent,RegisterComponent, ShopCartComponent, UserProfileComponent]