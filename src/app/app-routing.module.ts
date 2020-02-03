import { NgModule, Component } from '@angular/core';
import{RouterModule, Routes} from '@angular/router';
import{ DashboardComponent } from './components/dashboard/dashboard.component';
import{ AddClientComponent } from './components/add-client/add-client.component';
import{ RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '',component: DashboardComponent},
  { path:'login',component: AddClientComponent},
  { path:'register',component: RegisterComponent},
  

];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
    
  ]
})
export class AppRoutingModule { }
