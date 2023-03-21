/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package alamo;

import alamo.dao.ProductDAO;
import alamo.dao.ProductDAOImpl;
import alamo.model.Product;

/**
 *
 * @author paulaalafil
 */
public class ProductManager {
 
    public static void main(String[] args){
    ProductDAO product = new ProductDAOImpl();
    
    //agregar nuevo producto
    
// product.insert(new Product(3400,"Pescado",10.0));

//  product.delete(new Product(3400,"Pescado",10.0));

      product.update(new Product (300,"Carnecita",10.0));

    Product p= product.read(100);
    System.out.println(p);
    
    }
    
}
