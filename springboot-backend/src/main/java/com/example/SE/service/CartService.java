package com.example.SE.service;
import com.example.SE.Collection.Cart;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public interface CartService {

    Cart saveCart (Cart cart);
    List<Cart> findByCartId(String cartId);

    List<Cart> findActiveCartByUserId(String userId, boolean isActive);
}
