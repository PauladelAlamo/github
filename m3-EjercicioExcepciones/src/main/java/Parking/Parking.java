/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Parking;

import java.util.ArrayList;
import java.util.Collections;

/**
 *
 * @author paulaalafil
 */
public class Parking {

    private final ArrayList<String> matriculas;
    private final String nombre;

    public Parking(String nombre, int plazas) {
        this.nombre = nombre;

        matriculas = new ArrayList<>();
        for (int i = 0; i < plazas; i++) {
            matriculas.add(null);
        }
    }

    public String getNombre() {
        return nombre;
    }
    
    
    public void entrada(String matricula, int plaza) throws ParkingException{
      
        if(matricula==null||matricula.length()<4){
            throw new ParkingException("Matricula incorrecta",matricula);
        }
        
        if(matriculas.get(plaza)!=null){
            throw new ParkingException("Plaza ocupada",matricula);
        }
        
        if(matriculas.contains(matricula)){
            throw new ParkingException("Matricula repetida", matricula);
        }
        
        matriculas.set(plaza, matricula);
    }
    
    
    public int salida(String matricula) throws ParkingException {
         int plaza = 0;
        if( matriculas.contains(matricula)){
             plaza=matriculas.indexOf(matricula);
            matriculas.set(plaza, null); 
        }else{
        throw new ParkingException ("Matricula no existente", matricula);
        
    
        }
        return plaza;
        
    }
    
    public int getPlazasTotales(){
        return matriculas.size();
    }
    
    public int getPlazasOcupadas(){
          int plazasOcupadas=0;
         
         for(int i=0; i<matriculas.size();i++){
             if(matriculas.get(i)!=null){
                 plazasOcupadas++;
             }
         }
         return plazasOcupadas;
    }
    
     public int getPlazasLibres(){
         int plazasLibres=0;
         
         for(int i=0; i<matriculas.size();i++){
             if(matriculas.get(i)==null){
                 plazasLibres++;
             }
         }
         return plazasLibres;
    }

    @Override
    public String toString() {

        String cadena="Parking "+ nombre + "\n";
        cadena +="---------------------------\n";
        for(int i=0; i<matriculas.size();i++){
            cadena += "Plaza "+ i+ " : ";
            if(matriculas.get(i)==null){
             cadena +=" Vacia";
             cadena += "\n";
            }else{
              cadena += matriculas.get(i);
              cadena += "\n";

            }
        }
        cadena +="---------------------------\n";

        return cadena;
    }

     
     
     

}
