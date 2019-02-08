import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page3RoutingModule } from './page3-routing.module';
import { FormsModule } from '@angular/forms';
import { Page3Component } from './view/page3.component';

@NgModule({
  declarations: [Page3Component],
  imports: [
    CommonModule,
    Page3RoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class Page3Module { }
