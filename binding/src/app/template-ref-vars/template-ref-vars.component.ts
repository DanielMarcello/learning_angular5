import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ref-vars',
  templateUrl: './template-ref-vars.component.html',
  styleUrls: ['./template-ref-vars.component.css']
})
export class TemplateRefVarsComponent implements OnInit {

  public name = "Daniel";

  constructor() { }

  ngOnInit() {
  }

  logMessage(value){
  	console.log(value)
  }

}
