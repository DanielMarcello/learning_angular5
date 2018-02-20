import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs/Observable'; //Observable
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmployeeService {

  private _url: string = "/assets/data/employees.json"; //data

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
  	return this.http.get<IEmployee[]>(this._url).catch(this.errorHandler); //retorna un Observable de tipo IEmployee
  }

  errorHandler(error: HttpErrorResponse){
  	return Observable.throw(error.message || "server error");
  }

}
