package com.example.SE.repository;

import com.example.SE.Collection.Product;
import com.example.SE.service.ProductService;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends MongoRepository<Product, String>{
    ///@Query("{Category:'?0'}")
    Optional<Product> findByName(String name);
    List<Product> findByCategory(String category);
}
