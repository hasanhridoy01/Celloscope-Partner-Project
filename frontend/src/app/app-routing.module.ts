import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './My-Components/login/login.component';
import { RegistrationComponent } from './My-Components/registration/registration.component';
import { DashboardComponent } from './My-Components/dashboard/dashboard.component';
import { SinglePartnerComponent } from './My-Components/single-partner/single-partner.component';

const routes: Routes = [
  //set route registration components...........!
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: RegistrationComponent},

  //set route login components...........!
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  //set route dashboard components...........!
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },

  //set route singlePartner components...........!
  { path: '', redirectTo: 'singlepartner', pathMatch: 'full' },
  { path: 'singlepartner/ID/:id', component: SinglePartnerComponent }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
