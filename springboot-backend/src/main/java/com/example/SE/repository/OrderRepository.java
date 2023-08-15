package com.example.SE.repository;

import com.example.SE.models.Order;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;
@Repository
public interface OrderRepository extends MongoRepository<Order, String> {

    @Override
    Order save(Order order);

    List<Order> findAllByUserId(String userId);

    @Override
    List<Order> findAll();

    // Phương thức để tìm đơn hàng dựa vào orderId
    Optional<Order> findByOrderId(String orderId);
}
