package com.example.SE.service;
import com.example.SE.Collection.Order;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface OrderService {

    Order saveOrder (Order order);

    List<Order> findAll(String userId);

    List<Order> findALlOrders();

//    Optional<Order> findByOrderId(String orderId);

    void acceptOrder(String orderId);

    void cancelOrder(String orderId);


}