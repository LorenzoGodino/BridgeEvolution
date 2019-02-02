import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {LoginLayoutComponent} from './component/layouts/login/login-layout.component';
import {LoginComponent} from './component/login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomeLayoutComponent} from './component/layouts/home/home-layout.component';
import {HomeComponent} from './component/home/home.component';

@NgModule({
  declarations: [
    LoginLayoutComponent,
    LoginComponent,
    HomeLayoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule, InputTextModule, ButtonModule
  ],
  providers: [],
  bootstrap: [LoginLayoutComponent]
})
export class AppModule {
}
