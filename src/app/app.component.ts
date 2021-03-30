import { Component, OnInit } from '@angular/core';
import {RestService} from './rest.service'
import Employee from './Employee';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  constructor(private rs : RestService) {}

  employees: Employee[] = [];

  ngOnInit(): void {
    this.rs.getEmployees().subscribe
    (
      response => {
        this.employees = response;
      },
      error => console.log(error)
    )
  }
}