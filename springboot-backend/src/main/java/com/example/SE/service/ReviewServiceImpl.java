package com.example.SE.service;

import com.example.SE.models.Product;
import com.example.SE.payload.response.ReviewResponse;
import com.example.SE.repository.ReviewRepository;
import com.example.SE.models.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Component
@Service
public class ReviewServiceImpl {
    @Autowired
    private ReviewRepository reviewRepository;
    public List<Review> allReview() {
        return reviewRepository.findAll();
    }

    public List<Review> IdReview(String productId) {
        return reviewRepository.findByProductId(productId);
    }

    public Optional<Review> ProductId_UserId_Review(String productId, String userId) {
        return reviewRepository.findByProductIdAndUserId(productId, userId);
    }

    public Review saveReview(Review review) {
        return reviewRepository.save(review);
    }
}
