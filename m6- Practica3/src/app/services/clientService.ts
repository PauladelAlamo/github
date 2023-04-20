import {Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { NgModule } from '@angular/core';


@Injectable()
export class ServicesComponent {
    public clientNombre = new BehaviorSubject<string>('');
   castNombre = this.clientNombre.asObservable();

   public clientApellidos = new BehaviorSubject<string>('');
    castApellidos = this.clientApellidos.asObservable();

    public clientFechaNacimiento = new BehaviorSubject<any>((new Date().toLocaleDateString()));
    castFechaNacimiento = this.clientFechaNacimiento.asObservable();

    public clientEmail = new BehaviorSubject<string>('');
    castEmail = this.clientEmail.asObservable();

    public clientCodigoPostal = new BehaviorSubject<number>(0);
    castCodigoPostal = this.clientCodigoPostal.asObservable();

    public clientGenero = new BehaviorSubject<string>('');
    castGenero = this.clientGenero.asObservable();

  public broadCastClientNombre(nombre:string, apellidos:string, fechaNacimiento:Date, email:string, codigoPostal:number, genero:string){
    this.clientNombre.next(nombre);
    this.clientApellidos.next(apellidos);
    this.clientFechaNacimiento.next(fechaNacimiento);
    this.clientEmail.next(email);
    this.clientCodigoPostal.next(codigoPostal);
    this.clientGenero.next(genero);
}

  clients:Client[] = [ ];

  public sendClients(nombre:string, apellidos:string,fechaNacimiento:Date, email:string, codigoPostal:number, genero:string):Observable<Client[]>{
      if(nombre != "" && apellidos != ""&& email != ""&& fechaNacimiento != null && codigoPostal != null&& genero!="" ){
          this.clients.push({nombre: nombre, apellidos: apellidos, email:email, fechaNacimiento:fechaNacimiento, codigoPostal:codigoPostal, genero:genero});
      }
      return of(this.clients);
  }
}export interface Client {nombre: string;  apellidos: string; fechaNacimiento: Date; email:string; codigoPostal:number; genero:string }