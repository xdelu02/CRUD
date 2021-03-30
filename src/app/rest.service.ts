import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Employee from './Employee';
@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http : HttpClient) { }
  url : string = "http://localhost:8080/api/tutorial/1.0/employees"
  getEmployees()
  {
    return this.http.get<Employee[]>(this.url);
  }
}