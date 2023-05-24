import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ServiciosService } from 'src/app/services/servicios.service';
import { Client } from '../clientes/clientes.component';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  client: Client | undefined;
  id: FormControl = new FormControl();
  nombre: FormControl = new FormControl('', Validators.required);
  apellidos: FormControl = new FormControl();
  fechaNacimiento: FormControl = new FormControl();
  email: FormControl = new FormControl('', Validators.email);
  codigoPostal: FormControl = new FormControl();
  genero: FormControl = new FormControl();

  FormularioCliente: FormGroup = new FormGroup({
    id: this.id,
    nombre: this.nombre,
    apellidos: this.apellidos,
    fechaNacimiento: this.fechaNacimiento,
    email: this.email,
    codigoPostal: this.codigoPostal,
    genero: this.genero
  });

  ngOnInit() { }

  /*
      public añadirClients(){
        http.createCLient(this.client).subscribe(data=>{
          this.dataclient = data.data.clientNombre;
          },error=>this.error2=error);
      }
  */

  clients: Client[] = [];
  clientApellidos: string = "";
  clientFechaNacimiento: string = "";
  clientEmail: string = "";
  clientCodigoPostal: number = 0;
  clientGenero: string = "";
  dataclient: string = "";
  error: string = "";
  error2: string = "";

  @ViewChild("itNombre") myNameElem!: ElementRef;
  @ViewChild("itApellidos") myNameElem2!: ElementRef;
  @ViewChild("itFechaNacimiento") myNameElem3!: ElementRef;
  @ViewChild("itEmail") myNameElem4!: ElementRef;
  @ViewChild("itCodigoPostal") myNameElem5!: ElementRef;
  @ViewChild("itGenero") myNameElem6!: ElementRef;


  constructor(private http: ServiciosService) { }

  public Clic(datos: FormGroup) { 

      const client: Client = { 
        id: this.id.value,
        nombre: this.nombre.value, 
        apellidos: this.apellidos.value, 
        fechaNacimiento: this.fechaNacimiento.value, 
        email: this.email.value, 
        codigoPostal: this.codigoPostal.value, 
        genero: this.genero.value 
      };

        this.http.createCLient(client).subscribe( 
          data => { 
          }, 
          error => { 
            this.error2 = error; 
          } 
       );
    }
  }

        /*
   public Clic(datos: FormGroup) { 
                                  console.log(datos);
                                  datos
                                  this.http.createCLient(this.client).subscribe(data=>{
                                  this.dataclient = data.data.clientNombre;
        },error=>this.error2=error);};
  
  */











/*
export interface Client {
    nombre: string;
    apellidos: string;
    fechaNacimiento:string;
    email: string;
    codigoPostal:number;
    genero: string;
  };



*/