package com.example.SE.service;

import com.example.SE.Collection.Product;
import com.example.SE.repository.ProductRepository;
import com.example.SE.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Component
public class ProductServiceImpl implements ProductService{
    @Autowired
    private ProductRepository productRepository;
    public List<Product> allProduct() {
        return productRepository.findAll();
    }

    public Optional<Product> IdProduct(String ProductId){
        return productRepository.findById(ProductId);
    }

    public Optional<Product> NameProduct(String name) {
        return productRepository.findByName(name);
    }
    public List<Product> categoryProduct(String category){
        return productRepository.findByCategory(category);
    }

    @Override
    public List<Product> findAll() {
        return null;
    }

    @Override
    public Optional<Product> findByName(String name) {
        return Optional.empty();
    }

    @Override
    public List<Product> findByCategory(String category) {
        return null;
    }
}
