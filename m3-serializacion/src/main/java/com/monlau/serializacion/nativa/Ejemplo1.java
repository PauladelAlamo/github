/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.monlau.serializacion.nativa;

import com.monlau.serializacion.modelo.Product;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import static java.lang.System.in;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author paulaalafil
 */
public class Ejemplo1 {

    public static void main(String[] args) {
           Product prod = new Product(1,"iPhone X", 300.75);
            System.out.println(prod.toString());
            System.out.println("Vamos a serializar el producto anterior");
            serializar(prod);
            
            System.out.println("Vamos a deserializar el producto anterior");

            
           System.out.println(deserializar().toString());
            
         

    }

    static void serializar(Product p) {
        FileOutputStream fileOut = null;

        try {

            fileOut = new FileOutputStream(".\\Product.ser");

            ObjectOutputStream out = new ObjectOutputStream(fileOut);
            out.writeObject(p);
            System.out.println("El producto ha sido serializado en Product.ser");
        } catch (FileNotFoundException ex) {
            System.out.println("No se encuentra la ruta del fichero. " + ex.getMessage());
        } catch (IOException ex) {
            System.out.println("Ha surgido un error serializando. " + ex.getMessage());
        } finally {
            try {
                fileOut.close();
            } catch (IOException ex) {
                System.out.println("Ha surgido un error cerrando el fichero" + ex.getMessage());
            }
        }
    }

    static Product deserializar() {
        FileInputStream fileIn = null;
        Product p=null;

        try {

            fileIn = new FileInputStream(".\\Product.ser");
            ObjectInputStream in = new ObjectInputStream(fileIn);
            p = (Product) in.readObject();
            in.close();
            fileIn.close();

        } catch (FileNotFoundException ex) {
            System.out.println("No se encuentra la ruta del fichero. " + ex.getMessage());
        } catch (IOException ex) {
            System.out.println("Ha surgido un error deserializando. " + ex.getMessage());
        } catch (ClassNotFoundException ex) {
        } finally {
            try {
                fileIn.close();
            } catch (IOException ex) {
                System.out.println("Ha surgido un error cerrando el fichero" + ex.getMessage());
            }
            return p;
        }
        
        
    }
}
