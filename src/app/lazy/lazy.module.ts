import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazycomComponent } from '../lazycom/lazycom.component';
import {Routes,RouterModule} from '@angular/router';
var routes=[{path:'',component:LazycomComponent}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LazycomComponent]
})
export class LazyModule { }
