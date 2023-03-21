/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package alamo.dao;

import alamo.model.Product;

/**
 *
 * @author paulaalafil
 */
public interface ProductDAO {
    
    public void insert(Product product);
    public void update(Product product);
    public void delete(Product product);
    public Product read(Integer id);

    public void update(int i, String macarrones, double d);
}
