import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-pipes',
  templateUrl: './test-pipes.component.html',
  styleUrls: ['./test-pipes.component.css']
})
export class TestPipesComponent implements OnInit {
  //pipes transforma la data antes de mostrarla en un view

  public name = "Daniel";
  public message = "Welcome Daniel";
  public person = {
  	"firstName": "John",
  	"lastName": "Doe",
  }
  public date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
