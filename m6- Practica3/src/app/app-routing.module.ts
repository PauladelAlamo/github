import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './body/home/home.component';
import { FormComponent } from './body/form/form.component';
import { ClientesComponent } from './body/clientes/clientes.component';

const routes: Routes = [

  {path: 'form', component:FormComponent},
  {path: 'home', component:HomeComponent},
  {path: 'clientes', component:ClientesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
