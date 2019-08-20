import { Component, OnInit } from '@angular/core';


import { CounterService } from '../child/counter.service';
@Component({
  selector: 'second-feature',
  templateUrl: './second-feature.component.html',
  styleUrls: [],
  providers: []
})
export class SecondFeatureComponent implements OnInit {  

  constructor(
    public counterService: CounterService) { }

  ngOnInit(): void {
    
  }

}