import { NgModule } from '@angular/core';

import { ChildComponent } from './child.component';
import { CounterService } from './counter.service';


@NgModule({
  imports: [],
  declarations: [
    ChildComponent
  ],
  exports: [],
  providers: [CounterService]
})
export class ChildModule {

  // public static forRoot() {
  //   return {
  //     ngModule: ChildModule,
  //     providers: [CounterService]
  //   }
  // }

  // public static forChild() {
  //   return {
  //     ngModule: ChildModule,
  //     providers: []
  //   }
  // }
}
