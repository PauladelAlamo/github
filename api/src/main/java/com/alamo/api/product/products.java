/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.alamo.api.product;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author paulaalafil
 */

@Entity
@Data @NoArgsConstructor @AllArgsConstructor

public class products {
    @Id @GeneratedValue
    private Integer id;
    private String name;
    private float price;
}
