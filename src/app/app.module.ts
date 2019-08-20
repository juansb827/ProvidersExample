import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstFeatureModule } from './first-feature/first-feature.module';
import { SecondFeatureModule } from './second-feature/second-feature.module';
import { ChildModule } from './child/child.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstFeatureModule,
    SecondFeatureModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
