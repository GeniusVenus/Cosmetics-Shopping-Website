package com.example.SE.controller;

import com.example.SE.models.Product;
import com.example.SE.service.ProductServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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

    @GetMapping("/brand/{brand}")
    public ResponseEntity<List<Product>> getBrand(@PathVariable("brand") String brand) {
        return new ResponseEntity<List<Product>>(productService.BrandProduct(brand), HttpStatus.OK);
    }
    @GetMapping("/category/{category}")
    public ResponseEntity<List<Product>> getCategoryProduct(@PathVariable("category") String category){
        return new ResponseEntity<List<Product>>(productService.categoryProduct(category), HttpStatus.OK);
    }
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping("/addProduct")
    public Product createProduct(@RequestBody Product product) {
        return productService.saveProduct(product);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @DeleteMapping("/deleteProduct/{id}")
    public ResponseEntity<HttpStatus> deleteProduct(@PathVariable("id") String id) {
        try {
            Optional<Product> products = productService.IdProduct(id);
            productService.deleteProduct(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @DeleteMapping("/deleteAll")
    public ResponseEntity<HttpStatus> deleteAllProducts() {
        try {
            productService.deleteAllProducts();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PutMapping("updateProduct/sell/{id}")
    public ResponseEntity<Product> updateSellProduct(@PathVariable("id") String id, int sellQuantity) {
        Optional<Product> products = productService.IdProduct(id);

        if (products.isPresent()) {
            Product product = products.get();
            product.setNum(product.getNum() - sellQuantity);
            product.setNum_sell(product.getNum_sell() + sellQuantity);
            return new ResponseEntity<>(productService.saveProduct(product), HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PutMapping("/updateProduct/quantity")
    public ResponseEntity<Product> updateSellProduct(@RequestBody Product prd) {
        String id = prd.getProductId();
        Optional<Product> products = productService.IdProduct(id);

        if (products.isPresent()) {
            Product product = products.get();
            product.setNum(product.getNum() + prd.getNum());
            return new ResponseEntity<>(productService.saveProduct(product), HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PutMapping("/updateProduct/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable("id") String id, @RequestBody Product prdct) {
        Optional<Product> products = productService.IdProduct(id);

        if (products.isPresent()) {
            Product product = products.get();
            product.setProductId(prdct.getProductId());
            product.setBrand(prdct.getBrand());
            product.setCategory(prdct.getCategory());
            product.setCost(prdct.getCost());
            product.setDescription(prdct.getDescription());
            product.setHow_to_use(prdct.getHow_to_use());
            product.setIngredient(prdct.getIngredient());
            product.setName(prdct.getName());
            product.setVolume(prdct.getVolume());
            product.setNum(prdct.getNum());
            product.setProfit(prdct.getProfit());
            product.setNum_sell(prdct.getNum_sell());
           return new ResponseEntity<>(productService.saveProduct(product), HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}