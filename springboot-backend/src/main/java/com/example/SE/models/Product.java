package com.example.SE.models;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Random;

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
    private String image;
    private int num;
    private double profit;
    private int num_sell;

    public Product(String productId, String category, String name, String cost, String description, String how_to_use, String ingredient, String brand, String volume, String image) {
        this.productId = productId;
        this.category = category;
        this.name = name;
        this.cost = cost;
        this.description = description;
        this.how_to_use = how_to_use;
        this.ingredient = ingredient;
        this.brand = brand;
        this.volume = volume;
        this.image = image;
        this.num = 999;
        String money = this.cost.substring(1, cost.length() - 2);
        double revenue = Double.parseDouble(money);
        Random generator = new Random();
        double num = generator.nextDouble() * (0.5 - 0);
        revenue -= revenue * num;
        this.profit = revenue;
        this.num_sell = 0;
    }

    public int getNum_sell() {
        return num_sell;
    }

    public void setNum_sell(int num_sell) {
        this.num_sell = num_sell;
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

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public void setProfit(double profit){
        this.profit = profit;
    }

    public double getProfit() {
        String money = this.cost.substring(1, this.cost.length() - 2);
        double revenue = Double.parseDouble(money);
        Random generator = new Random();
        double num = generator.nextDouble() * (0.5 - 0);
        revenue -= revenue * num;
        return revenue;
    }
}