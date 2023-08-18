package com.example.SE.service;
import com.example.SE.models.Order;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface OrderService {

    Order aveOrder (Order order);

    List<Order> findAll(String userId);

    List<Order> findALlOrders();

//    Optional<Order> findByOrderId(String orderId);

    void acceptOrder(String orderId);

    void cancelOrder(String orderId);


}