import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestPipesComponent } from './test-pipes/test-pipes.component';
import { TestServicesComponent } from './test-services/test-services.component';

import { EmployeeService } from '.employee.service'


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestPipesComponent,
    TestServicesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
