import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-for',
  templateUrl: './test-for.component.html',
  styleUrls: ['./test-for.component.css']
})
export class TestForComponent implements OnInit {

  public colors = ["red","blue","green","yellow"]
  constructor() { }

  ngOnInit() {
  }

}
