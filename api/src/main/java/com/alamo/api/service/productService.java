/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.alamo.api.service;
import com.alamo.api.product.products;
import com.alamo.api.repository.productRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author paulaalafil
 */
@Service
public class productService {
    @Autowired
    private productRepository repository;
    
    public List<products>listProducts(){
        return repository.findAll();
    }
    
    public void saveProduct(products product){
    repository.save(product);
        
    }
    
    public products obtainProductById(Integer id){
        return repository.findById(id).get();
    }
    
    public void deleteProduct(Integer id){
    
        repository.deleteById(id);
    }
    
    
    
}
