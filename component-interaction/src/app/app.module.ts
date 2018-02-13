import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestPipesComponent } from './test-pipes/test-pipes.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestPipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
