import { Component, OnInit } from '@angular/core';


import { CounterService } from '../child/counter.service';
@Component({
  selector: 'lazy',
  template: `<h1>Lazy Component: </h1>
  <h1>  
    ChildCount: {{counterService.count}}
  </h1>
  <button (click)="counterService.add()">Add</button>
  `,
  styleUrls: [],
  providers: []
})
export class LazyComponent implements OnInit {  

  constructor(
    public counterService: CounterService) { }

  ngOnInit(): void {
    
  }

}