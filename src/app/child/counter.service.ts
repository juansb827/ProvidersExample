import { Injectable } from '@angular/core';
import { ChildModule } from './child.module';


// From angular 6
@Injectable()
export class CounterService {
  count = 0;
  constructor() { }

  add() {
    this.count ++;
  }
  

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/