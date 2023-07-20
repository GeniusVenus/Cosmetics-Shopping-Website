package com.example.SE.service;

import com.example.SE.models.Product;
import org.springframework.stereotype.Service;
//
import java.util.List;
import java.util.Optional;

@Service
public interface ProductService {
    List<Product> findAll();
    Optional<Product> findByName(String name);
    List<Product> findByCategory(String category);
}
