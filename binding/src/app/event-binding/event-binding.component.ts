import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public name = "Daniel";
  public greeting = "";
  constructor() { }

  ngOnInit() {
  }

  onClick(event){
  	console.log(event)
  	this.greeting = event.type
  }

}
