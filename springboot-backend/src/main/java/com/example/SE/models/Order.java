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
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "Order")
@JsonInclude(JsonInclude.Include.NON_NULL)

public class Order {
    @Id
    private String orderId;
    private String userId;

    private List<OrderItem> orderItems = new ArrayList<>();
    private Date orderDate;
    private String orderStatus;
    private double totalPrice;
    private String paymentMethod;
    // private DeliveryInfo deliveryInfo;

    public Order(String userId, List<OrderItem> orderItems, Date orderDate, String orderStatus, double totalPrice, String paymentMethod) {
        this.userId = userId;
        this.orderItems = orderItems;
        this.orderDate = orderDate;
        this.orderStatus = orderStatus;
        this.totalPrice = totalPrice;
        this.paymentMethod = paymentMethod;
    }

    public String getOrderId() {return orderId;}

    public void setOrderId (String orderId) {this.orderId = orderId;}

    public String getUserId() {return userId;}

    public void setUserId (String userId) {this.userId = userId;}

    public Date getOrderDate() {return orderDate;}

    public void setOrderDate (Date orderDate) {this.orderDate = orderDate;}

    public String getOrderStatus() {return orderStatus;}

    public void setOrderStatus (String orderStatus) {this.orderStatus = orderStatus;}

    public double getTotalPrice() {return totalPrice;}

    public void setTotalPrice (double totalPrice) {this.totalPrice= totalPrice;}

    public String getPaymentMethod() {return paymentMethod;}

    public void setPaymentMethod (String paymentMethod) {this.paymentMethod = paymentMethod;}

    public void addOrderItem(OrderItem orderItem) {
        this.orderItems.add(orderItem);
    }
}
