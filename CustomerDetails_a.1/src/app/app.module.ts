import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerDetailsComponent } from './CustomerDetails/CustomerDetails.component';
import { HttpClientModule } from '@angular/common/http';
import { GlobalMenuComponent } from './global-menu/global-menu.component';
import { LogInComponent } from './log-in/log-in.component';
@NgModule({
  declarations: [AppComponent, CustomerDetailsComponent, GlobalMenuComponent, LogInComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
