import { NgModule } from '@angular/core';
import { ChildModule } from '../child/child.module';
import { FirstFeatureComponent } from './first-feature.component';
import { CounterService } from '../child/counter.service';



@NgModule({
  imports: [ChildModule],
  declarations: [
   FirstFeatureComponent
  ],
  exports: [FirstFeatureComponent],  
  providers: []  
})
export class FirstFeatureModule { }
