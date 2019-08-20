import { Component, OnInit } from '@angular/core';


import { CounterService } from '../child/counter.service';
@Component({
  selector: 'first-feature',
  templateUrl: './first-feature.component.html',
  styleUrls: [],
  providers: [CounterService]
})
export class FirstFeatureComponent implements OnInit {  

  constructor(
    public counterService: CounterService) { }

  ngOnInit(): void {
    
  }

}