import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, throwError } from 'rxjs';
import { Client } from '../body/clientes/clientes.component';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
private url = "http://localhost:8080/clientes/";
httpOptions ={
headers: new HttpHeaders({'Content-Type':'application/json'})
} 

constructor(private http:HttpClient){};


getClients():Observable<any>{
    return this.http.get<any>(this.url);

}

createCLient(client:Client):Observable<Client>{
  return this.http.post<Client>(this.url,JSON.stringify(client),this.httpOptions).pipe(
    catchError((err) => {
      console.log('error caught');
      console.error(err);
      return throwError(err);
    })

  )
}


deleteCLient(id: number):Observable<Client>{
  id = id+1;
  return this.http.delete<Client>(this.url + id );
}

// createClient(client:Client):Observable<Client>{
// return this.http.post<Client>(this.url,JSON.stringify(client),this.httpOptions.pipe())
// }

}