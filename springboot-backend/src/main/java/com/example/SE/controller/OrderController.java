package com.example.SE.controller;

import com.example.SE.models.Order;
import com.example.SE.service.OrderServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderServiceImpl orderService;

    @Autowired
    public OrderController(OrderServiceImpl orderService) {
        this.orderService = orderService;
    }

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        Order savedOrder = orderService.aveOrder(order);
        return new ResponseEntity<>(savedOrder, HttpStatus.CREATED);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Order>> getOrdersByUserId(@PathVariable String userId) {
        List<Order> orders = orderService.findAll(userId);
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = orderService.findALlOrders();
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @GetMapping("/{orderId}")
    public ResponseEntity<Optional<Order>> getOrderById(@PathVariable("orderId") String orderId) {
        return new ResponseEntity<Optional<Order>>(orderService.indByOrderId(orderId), HttpStatus.OK);
    }

    @PutMapping("/accept/{orderId}")
    public ResponseEntity<Void> acceptOrder(@PathVariable String orderId) {
        orderService.acceptOrder(orderId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/cancel/{orderId}")
    public ResponseEntity<Void> cancelOrder(@PathVariable String orderId) {
        orderService.cancelOrder(orderId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
