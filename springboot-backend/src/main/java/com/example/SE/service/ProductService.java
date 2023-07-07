package main.java.com.example.SE.service;

import main.java.com.example.SE.Collection.Product;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface ProductService {
    List<Product> findAll();
    Optional<Product> findByName(String name);
    List<Product> findByCategory(String category);
}
