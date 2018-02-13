import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestSwitchComponent } from './test-switch/test-switch.component';
import { TestForComponent } from './test-for/test-for.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestSwitchComponent,
    TestForComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
