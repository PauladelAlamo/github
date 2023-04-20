import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ServicesComponent } from '../../services/clientService';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {



  nombre: FormControl = new FormControl('',Validators.required);
  apellidos: FormControl = new FormControl();
  fechaNacimiento: FormControl = new FormControl();
  email: FormControl = new FormControl('',Validators.email);
  codigoPostal: FormControl = new FormControl();
  genero: FormControl = new FormControl();
  hobbies: FormControl = new FormControl();


  FormularioCliente: FormGroup = new FormGroup({

    nombre: this.nombre,
    apellidos: this.apellidos,
    fechaNacimiento: this.fechaNacimiento,
    email: this.email
  });

  ngOnInit() {


    
   }
  Clic(datos: FormGroup) { console.log(datos) };


  clients: Client[] = [];
  clientNombre: string = "";
  clientApellidos: string = "";
  clientFechaNacimiento: string = "";
  clientEmail: string = "";
  clientCodigoPostal: number = 0;
  clientGenero: string = "";


  @ViewChild("itNombre") myNameElem!: ElementRef;
  @ViewChild("itApellidos") myNameElem2!: ElementRef;
  @ViewChild("itFechaNacimiento") myNameElem3!: ElementRef;
  @ViewChild("itEmail") myNameElem4!: ElementRef;
  @ViewChild("itCodigoPostal") myNameElem5!: ElementRef;
  @ViewChild("itGenero") myNameElem6!: ElementRef;


  constructor(private sc: ServicesComponent) { }

  public addClient() {
    this.sc.broadCastClientNombre(

      this.myNameElem.nativeElement.value,
      this.myNameElem2.nativeElement.value,
      this.myNameElem3.nativeElement.value,
      this.myNameElem4.nativeElement.value,
      this.myNameElem5.nativeElement.value,
      this.myNameElem6.nativeElement.value


    );


    this.sc.sendClients(
      this.myNameElem.nativeElement.value,
      this.myNameElem2.nativeElement.value,
      this.myNameElem3.nativeElement.value,
      this.myNameElem4.nativeElement.value,
      this.myNameElem5.nativeElement.value,
      this.myNameElem6.nativeElement.value

    );
  }
}
export interface Client {
  nombre: string;
  apellidos: string;
  fechaNacimiento: Date;
  email: string;
  codigoPostal: number;
  genero: string;
}


