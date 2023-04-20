import {Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class dataService {
    httpOptions =  {
headers: new HttpHeaders({

    "Content-Type": "application/json"

})
};
constructor(private http: HttpClient){};

 url = "http://localhost:8080/clientes/";

postUser(user:any){
    return this.http.post(this.url,user, this.httpOptions);

}

getUsers():Observable<any>{
    return this.http.get(this.url);

}

}