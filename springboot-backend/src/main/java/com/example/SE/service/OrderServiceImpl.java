package com.example.SE.service;

import com.example.SE.models.Order;
import com.example.SE.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;

    @Autowired
    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public Order aveOrder(Order order) {
        return orderRepository.save(order);
    }

    @Override
    public List<Order> findAll(String userId) {
        return orderRepository.findAllByUserId(userId);
    }

    @Override
    public List<Order> findALlOrders() {
        return orderRepository.findAll();
    }

//    @Override
    public Optional<Order> indByOrderId(String orderId) {
        return orderRepository.findByOrderId(orderId);
    }

    @Override
    public void acceptOrder(String orderId) {
        Optional<Order> optionalOrder = orderRepository.findByOrderId(orderId);
        if (optionalOrder.isPresent()) {
            Order order = optionalOrder.get();
            order.setOrderStatus("Accepted");
            orderRepository.save(order);
        }
    }

    @Override
    public void cancelOrder(String orderId) {
        // Phương thức để hủy đơn hàng dựa vào orderId
            Optional<Order> optionalOrder = orderRepository.findByOrderId(orderId);
            if (optionalOrder.isPresent()) {
                Order order = optionalOrder.get();
                order.setOrderStatus("Cancelled");
            }
        }
//
//
//    //tạo dữ liệu mẫu
//    public void createSampleData() {
//        addOrder(new Order("1", "user1", "PENDING", 100.0));
//        addOrder(new Order("2", "user2", "PENDING", 150.0));
//        addOrder(new Order("3", "user1", "PENDING", 200.0));
//    }

}
