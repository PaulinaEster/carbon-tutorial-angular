import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIShellModule, IconModule } from 'carbon-components-angular'; 
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    UIShellModule,
    IconModule
  ]
})
export class AppModule { }
