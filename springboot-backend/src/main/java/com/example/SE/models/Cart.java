package com.example.SE.models;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Data
@Builder
//@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "Cart")
@JsonInclude(JsonInclude.Include.NON_NULL)


public class Cart {
    @Id
    private String cartId;
    private String userId;

    private List<String> productIds = new ArrayList<>();
    private boolean isActive;
    private boolean isOrder;
    private double totalPrice;
    private String orderStatus;
    private String address;
    private String date;
    private int shippingMethod;
    private String paymentMethod;

    public Cart(
            String cartId,
            String userId,
            List<String> productIds,
            boolean isActive,
            boolean isOrder,
            double totalPrice,
            String orderStatus,
            String address,
            String date,
            int shippingMethod,
            String paymentMethod
        ) {
        this.cartId = cartId;
        this.userId = userId;
        this.productIds = productIds;
        this.isActive = isActive;
        this.isOrder = isOrder;
        this.totalPrice = totalPrice;
        this.orderStatus = orderStatus;
        this.address = address;
        this.date = date;
        this.shippingMethod = shippingMethod;
        this.paymentMethod = paymentMethod;
    }

    public String getCartId() {
        return cartId;
    }

    public void setCartId(String cartId) {
        this.cartId = cartId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public List<String> getProductIds() {
        return productIds;
    }

    public void setProductIds(List<String> productIds) {
        this.productIds = productIds;
    }

    public boolean getIsActive() {
        return isActive;
    }

    public void isActive(boolean isActive) {
        this.isActive = isActive;
    }

    public boolean getIsOrder() {
        return isOrder;
    }

    public void isOrder(boolean isOrder) {
        this.isOrder = isOrder;
    }


    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getShippingMethod() {
        return shippingMethod;
    }

    public void setShippingMethod(int shippingMethod) {
        this.shippingMethod = shippingMethod;
    }

    public String getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(String orderStatus) {
        this.orderStatus = orderStatus;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }
}
