import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Employee from './Employee';
import { Observable, throwError } from "rxjs";
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RestService {
    handleError: any;
    
    httpOptions = {
        headers: new HttpHeaders({'Content-Type':'application/json'})
    }

    apiURL = "http://localhost:8080/api/tutorial/1.0/employees"
    constructor(private http: HttpClient) {
    }

    getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.apiURL)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }
    
    removeEmployees(id:number){
        return this.http.delete<Employee>(this.apiURL+'/'+ id, this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }
}