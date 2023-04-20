import { Component } from '@angular/core';
import { ServicesComponent } from '../../services/clientService';
import { dataService } from 'src/app/services/dataService';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  clients:Client[] = [ ];
  clientNombre:any = "";
  clientApellidos:any = "";
  clientFechaNacimiento:any = 0;
  clientEmail:any = "";
  clientCodigoPostal:any = 0;
  clientGenero:any="";
  constructor(private clientService:ServicesComponent){}

  ngOnInit(): void {
 
   
    this.clientService.sendClients(this.clientNombre, this.clientApellidos,this.clientFechaNacimiento,this.clientEmail,this.clientCodigoPostal, this.clientGenero).subscribe((clients:Client[]) => {
        this.clients = clients;
      });
    
     
  

}


}export interface Client {nombre: string; 
                          apellidos: string; 
                          fechaNacimiento: Date;
                          email:string;
                          codigoPostal:number;
                          genero:string;}
