package com.example.SE.Collection;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "Product")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Product {
    @Id
    private String productId;
    private String category;
    private String name;
    private double cost;
    private String description;
    private String how_to_use;
    private String ingredient;
    private String brand;
    private int volume;
    private int mark;
}
