package main.java.com.example.SE.Collection;

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
    private String cost;
    private String description;
    private String how_to_use;
    private String ingredient;
    private String brand;
    private String volume;
    private int mark;

    public Product(String productId, String category, String name, String cost, String description, String how_to_use, String ingredient, String brand, String volume) {
        this.productId = productId;
        this.category = category;
        this.name = name;
        this.cost = cost;
        this.description = description;
        this.how_to_use = how_to_use;
        this.ingredient = ingredient;
        this.brand = brand;
        this.volume = volume;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCost() {
        return cost;
    }

    public void setCost(String cost) {
        this.cost = cost;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getHow_to_use() {
        return how_to_use;
    }

    public void setHow_to_use(String how_to_use) {
        this.how_to_use = how_to_use;
    }

    public String getIngredient() {
        return ingredient;
    }

    public void setIngredient(String ingredient) {
        this.ingredient = ingredient;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getVolume() {
        return volume;
    }

    public void setVolume(String volume) {
        this.volume = volume;
    }

    public int getMark() {
        return mark;
    }

    public void setMark(int mark) {
        this.mark = mark;
    }
}