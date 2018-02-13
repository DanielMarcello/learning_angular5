import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-services',
  templateUrl: './test-services.component.html',
  styleUrls: ['./test-services.component.css']
})
export class TestServicesComponent implements OnInit {

  public employees = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
  	this.employees = this._employeeService.getEmployees;
  }

}
