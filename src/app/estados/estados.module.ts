import { EstadosComponent } from './estados.component';
import { EstadosRoutingModule } from './estados.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [EstadosComponent],
  imports: [
    CommonModule,
    EstadosRoutingModule
  ]
})
export class EstadosModule { }
