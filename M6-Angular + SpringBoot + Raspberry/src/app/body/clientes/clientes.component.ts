import { Component } from '@angular/core';
import { dataService } from 'src/app/services/dataService';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  clients:Client[]= [];
  error:string='';
  clientNombre:any = "";
  clientApellidos:any = "";
  clientFechaNacimiento:any = 0;
  clientEmail:any = "";
  clientCodigoPostal:any = 0;
  clientGenero:any="";
  constructor(private http:ServiciosService){
    http.getClients().subscribe(data=>{
      this.clients = data;
    }, error=>this.error=error);
  }

public deleteUser(id: number){
    this.http.deleteCLient(id).subscribe(data=>{
    }, error=>this.error=error);
    }
    
    
    
 

  ngOnInit(): void {
      
  

}


}export interface Client {
                          id: number;
                          nombre: string; 
                          apellidos: string; 
                          fechaNacimiento: string;
                          email:string;
                          codigoPostal:number;
                          genero:string;}
