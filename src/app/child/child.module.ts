import { NgModule, Optional, SkipSelf } from '@angular/core';

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


  // constructor (@Optional() @SkipSelf() parentModule: ChildModule) {
  //   if (parentModule) {
  //     throw new Error(
  //       'ChildModule is already loaded. Import it in the AppModule only');
  //   }
  // }
}
