import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test', //.app-test -> <div class=app-test></div>, [app-test] -> <div app-test></div>
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
