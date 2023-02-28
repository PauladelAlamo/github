/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.alamo.api.controller;

import com.alamo.api.product.products;
import com.alamo.api.service.productService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;



/**
 *
 * @author paulaalafil
 */

@RestController
@RequiredArgsConstructor

public class ProductController {
    
    private final productService productService;
    
   @GetMapping("/products")
    public List<products> listProducts(){
        return productService.listProducts();
    }

    
    
    @GetMapping("/products/{id}")
    public ResponseEntity<products> obtainProduct (@PathVariable Integer id){
    
    try{
        products product = productService.obtainProductById(id);
        return ResponseEntity.ok(product);
        
        
    }catch(Exception e){
        return ResponseEntity.notFound().build();
    }
}

    
 @PostMapping("/products")
    public void newProudct (@RequestBody products product){
        productService.saveProduct(product);
    }
    
    
 @PutMapping("/products/{id}")
 public ResponseEntity<?> editarProducto(@RequestBody products product, @PathVariable Integer id) {
    try{
         products existentProduct = productService.obtainProductById(id);
         existentProduct.setName(product.getName());
         existentProduct.setPrice(product.getPrice());
         productService.saveProduct(existentProduct);
         return new ResponseEntity<products>(product, HttpStatus.OK);
    }catch (Exception e){
        return new ResponseEntity<products>(HttpStatus.NOT_FOUND);
        
        }
    
 }
    
    
    
    
    
    @DeleteMapping("/products/{id}")
    public void deleteProduct(@PathVariable Integer id){
        productService.deleteProduct(id);
    }
    
}
