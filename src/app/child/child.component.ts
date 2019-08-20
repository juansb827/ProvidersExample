import { Component, OnInit } from '@angular/core';


import { CounterService } from './counter.service';
@Component({
  selector: 'le-child',
  templateUrl: './child.component.html',
  styleUrls: [],
  providers: []
})
export class ChildComponent implements OnInit {
  
  

  constructor(
    public counterService: CounterService) { }

  ngOnInit(): void {
    
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/