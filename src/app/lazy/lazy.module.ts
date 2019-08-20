import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LazyComponent } from './lazy.component';
import { ChildComponent } from '../child/child.component';
import { ChildModule } from '../child/child.module';
import { CounterService } from '../child/counter.service';



@NgModule({
  declarations: [LazyComponent],
  imports: [
   
    CommonModule,
    RouterModule.forChild([{
      path: '', component: LazyComponent
    }])
  ],
  providers: []
})
export class LazyModule { }
