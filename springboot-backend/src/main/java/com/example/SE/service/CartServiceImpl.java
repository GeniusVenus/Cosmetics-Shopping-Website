package com.example.SE.service;

import com.example.SE.models.Cart;
import com.example.SE.repository.CartRepository;
import com.example.SE.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CartServiceImpl implements CartService {

    private final CartRepository cartRepository;

    @Autowired
    public CartServiceImpl(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    @Override
    public Cart saveCart(Cart cart) {
        return cartRepository.save(cart);
    }
    @Override
    public  List<Cart> findByCartId(String cartId) {
        return cartRepository.findByCartId(cartId);
    }

    @Override
    public List<Cart> findActiveCartByUserId(String userId, boolean isActive) {
        return cartRepository.findActiveCartByUserId(userId, isActive);
    }

    @Override
    public List<Cart> getAllOrders(boolean isActive) {
        return cartRepository.getAllOrders(isActive);
    }

    @Override
    public List<Cart> getOrdersByUserId(String userId, boolean isActive) {
        return cartRepository.getOrdersByUserId(userId, isActive);
    }
}
