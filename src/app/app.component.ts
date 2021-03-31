import { Component, OnInit } from '@angular/core';
import {RestService} from './rest.service'
import Employee from './Employee';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  title = "Manage Employees";

  rowToDelete: number[] = [];

  constructor(private rs : RestService) {}

  employees: Employee[] = [];

  ngOnInit(): void {
    this.rs.getEmployees().subscribe(result => this.employees = result);
  }

  checkedRow(e){
    let id = e.target.id;
    if(e.target.checked) {
      this.rowToDelete.push(id);
    }else{
      let index = this.rowToDelete.findIndex(d => d === id); //find index in your array
      this.rowToDelete.splice(index, 1); //remove element from array
    }
    console.log(this.rowToDelete);
  }

  deleteEmployees() {
    for (let i = 0; i < this.rowToDelete.length; i++) {
      this.rs.removeEmployees(this.rowToDelete[i]).subscribe(() => true);
    }
    location.reload();
  }
}