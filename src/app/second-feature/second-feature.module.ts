import { NgModule } from '@angular/core';

import { CounterService } from '../child/counter.service';
import { ChildModule } from '../child/child.module';
import { SecondFeatureComponent } from './second-feature.component';

@NgModule({
  imports: [],
  declarations: [
    SecondFeatureComponent
  ],
  exports: [SecondFeatureComponent],  
  providers: []  
})
export class SecondFeatureModule { }
