import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'usuario',
    loadChildren: './usuario/usuario.module#UsuarioModule'
  },
  {
    path: 'estados',
    loadChildren: './estados/estados.module#EstadosModule'
  },
  {
    path: 'prime-ng',
    loadChildren: './prime-ng/prime-ng.module#PrimeNgModule'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
