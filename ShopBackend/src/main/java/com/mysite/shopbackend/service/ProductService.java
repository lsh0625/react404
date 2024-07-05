package com.mysite.shopbackend.service;

import com.mysite.shopbackend.model.Product;

import java.util.List;

public interface ProductService {
    Product saveProduct(Product product);
    void deleteProduct(Long id);
    List<Product> findAllProducts();
}
