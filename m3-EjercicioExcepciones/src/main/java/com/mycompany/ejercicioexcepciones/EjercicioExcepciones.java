/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Project/Maven2/JavaApp/src/main/java/${packagePath}/${mainClassName}.java to edit this template
 */
package com.mycompany.ejercicioexcepciones;

import Parking.Parking;
import Parking.ParkingException;
import java.util.Scanner;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author paulaalafil
 */
public class EjercicioExcepciones {

    static Parking parking = new Parking("centro", 10);
    static int opcion;
    static Scanner x = new Scanner(System.in);

    public static void main(String[] args) {
    do{
            menu();
            opciones();
    }while(opcion!=4);
}

    public static void menu() {
        System.out.println("1) Entrada de coche");
        System.out.println("2) Salida de coche");
        System.out.println("3) Mostrar parking");
        System.out.println("4) Salir del programa");
        System.out.printf("Elige una opcion del menu: ");
        opcion = x.nextInt();
    }

    public static void opciones() {

        switch (opcion) {
            case 1:
                entradaCoche();
                break;
            case 2:
                salidaCoche();
                break;
            case 3:
                System.out.println(parking + "\n");
                break;
            case 4:
                System.out.println("Fin del Programa");
                break;

            default:
              System.out.println("Error");

           
        }
        
    }
    
    public static void entradaCoche(){
        try {
            System.out.println("Introduzca la matricula: ");
            String m = x.next();
            System.out.println("Introduzca la plaza: ");
            int p = x.nextInt();
            
            parking.entrada(m, p);
            System.out.println("El coche se ha introducido correctamente");
            
        } catch (ParkingException ex) {
            System.out.println("ERROR: " + ex.getMensaje());
            System.out.println("No se ha realizado la entrada del coche con la matricula "
             + ex.getMatricula() +  " en el parking.");
            
        }
        
        
    }
     public static void salidaCoche(){
         
             try {
            System.out.println("Introduzca la matricula: ");
            String m = x.next();
            
            parking.salida(m);
                 System.out.println("El coche ha salido correctamente");
                 System.out.println("Plazas totales: " + parking.getPlazasTotales());
                 System.out.println("Plazas ocupadas: " + parking.getPlazasOcupadas());
                 System.out.println("Plazas libres: " + parking.getPlazasLibres());
            
        } catch (ParkingException ex) {
            System.out.println("ERROR: " + ex.getMensaje());
            System.out.println("No se ha realizado la salida del coche con la matricula " + 
                    ex.getMatricula() +  " en el parking.");
        }
        
         
    }
    
}
