package com.example.SE.repository;

import java.util.List;
import java.util.Optional;

import com.example.SE.payload.response.ReviewResponse;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.SE.models.Review;

@Repository
public interface ReviewRepository extends MongoRepository<Review, String> {

    public List<Review> findByProductId(String productId);

    public Optional<Review> findByProductIdAndUserId(String productId, String userId);

}
