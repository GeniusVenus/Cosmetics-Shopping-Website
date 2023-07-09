package com.example.SE.controller;

import com.example.SE.Collection.Product;
import com.example.SE.service.ProductServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/product")
public class ProductController {
    @Autowired
    private ProductServiceImpl productService;
    @GetMapping
    public ResponseEntity<List<Product>> GetAllProduct() {
        return new ResponseEntity<List<Product>>(productService.allProduct(), HttpStatus.OK);
    }
    @GetMapping("/{ProductId}")
    public ResponseEntity<Optional<Product>> getId(@PathVariable("ProductId") String ProductId){
        return new ResponseEntity<Optional<Product>>(productService.IdProduct(ProductId), HttpStatus.OK);
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<Optional<Product>> getName(@PathVariable("name") String name) {
        return new ResponseEntity<Optional<Product>>(productService.NameProduct(name), HttpStatus.OK);
    }
    @GetMapping("/category/{category}")
    public ResponseEntity<List<Product>> getCategoryProduct(@PathVariable("category") String category){
        return new ResponseEntity<List<Product>>(productService.categoryProduct(category), HttpStatus.OK);
    }

    @PostMapping("/addProduct")
    public Product saveProduct(@RequestBody Product product) {
        return productService.saveProduct(product);
    }
    @DeleteMapping("/deleteProduct/{id}")
    public ResponseEntity<HttpStatus> deleteProduct(@PathVariable("id") String id) {
        try {
            productService.deleteProduct(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/tutorials")
    public ResponseEntity<HttpStatus> deleteAllProducts() {
        try {
            productService.deleteAllProducts();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}