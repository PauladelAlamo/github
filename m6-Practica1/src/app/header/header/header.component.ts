import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  backgroundcolor={
    'verde':false,
    'azul': false,
    'morado':false,
    'gris':false

  };
  verde() {
    this.backgroundcolor['gris']=false;

    this.backgroundcolor['azul']=false;
    this.backgroundcolor['morado']=false;
    this.backgroundcolor['verde']=true;
  }

  azul() {
    this.backgroundcolor['gris']=false;

    this.backgroundcolor['verde']=false;
    this.backgroundcolor['morado']=false;
    this.backgroundcolor['azul']=true;
  }

  morado() {
    this.backgroundcolor['gris']=false;

    this.backgroundcolor['verde']=false;
    this.backgroundcolor['morado']=true;
    this.backgroundcolor['azul']=false;
  }

  gris(){
    

    this.backgroundcolor['verde']=false;
    this.backgroundcolor['morado']=false;
    this.backgroundcolor['azul']=false;
this.backgroundcolor['gris']=true;
  }
}
