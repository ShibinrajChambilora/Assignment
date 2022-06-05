import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomerDetailsComponent } from './CustomerDetails/CustomerDetails.component';
import { GlobalMenuComponent } from './global-menu/global-menu.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  { path: '', component: LogInComponent },
  { path: 'CustomerDetails', component: CustomerDetailsComponent },
  { path: 'GlobalMenu', component: GlobalMenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
