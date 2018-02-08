import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  public name = "Daniel";
  public hasError = false;
  public isSpecial = true;
  public highlightColor = "orange";

  public titleStyles = {
  	color: "blue",
  	fontStyle: "italic",
  };

  constructor() { }

  ngOnInit() {
  }

}
