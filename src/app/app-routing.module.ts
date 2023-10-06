import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { BasicsComponent } from './basics/basics.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'add',component:AddproductComponent},
{path:'ba',component:BasicsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
