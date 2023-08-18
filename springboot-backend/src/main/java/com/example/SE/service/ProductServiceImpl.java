package com.example.SE.service;

import com.example.SE.models.Product;
import com.example.SE.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Component
public class ProductServiceImpl{
    @Autowired
    private ProductRepository productRepository;
    public List<Product> allProduct() {
        return productRepository.findAll();
    }

    public Optional<Product> IdProduct(String ProductId){
        return productRepository.findByProductId(ProductId);
    }

    public List<Product> BrandProduct(String brand) {
        return productRepository.findByBrand(brand);
    }

    public Optional<Product> NameProduct(String name) {
        return productRepository.findByName(name);
    }
    public List<Product> categoryProduct(String category){
        return productRepository.findByCategory(category);
    }
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    public void deleteProduct(String ProductId) {
        productRepository.deleteById(ProductId);
    }

    public void deleteAllProducts() {
        productRepository.deleteAll();
    }

}