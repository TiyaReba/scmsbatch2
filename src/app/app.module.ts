import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { HeaderComponent } from './header/header.component';
import { BasicsComponent } from './basics/basics.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { ProserService } from './proser.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddproductComponent,
    HeaderComponent,
    BasicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [ProserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
