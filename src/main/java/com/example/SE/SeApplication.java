package com.example.SE;

import com.example.SE.repository.ProductRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
public class SeApplication {

	public static void main(String[] args) {
		SpringApplication.run(SeApplication.class, args);
	}
}
