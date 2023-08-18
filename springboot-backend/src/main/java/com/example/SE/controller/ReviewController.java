package com.example.SE.controller;

import com.example.SE.models.Review;
import com.example.SE.payload.request.ReviewRequest;
import com.example.SE.payload.response.ReviewResponse;
import com.example.SE.service.ReviewServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/review")
public class ReviewController {
    @Autowired
    private ReviewServiceImpl reviewService;
    @GetMapping
    public ResponseEntity<List<Review>> getAllReview() {
        return new ResponseEntity<List<Review>>(reviewService.allReview(), HttpStatus.OK);
    }

    @GetMapping("/{productId}")
    public ResponseEntity<ReviewResponse> getReviewByProductId(@PathVariable("productId") String productId) {
        List<Review> reviewList = reviewService.IdReview(productId);
        double avg = 0;
        for (int i = 0; i < reviewList.size(); ++ i) {
            avg += (double) reviewList.get(i).getPoint();
        }

        avg /= reviewList.size();
        ReviewResponse reviewResponse = new ReviewResponse(avg, reviewList);
        return new ResponseEntity<ReviewResponse>(reviewResponse, HttpStatus.OK);
    }

    @PostMapping("/editReview")
    public Review updateReview(@RequestBody ReviewRequest review) {
        String productId = review.getProductId();
        String userId = review.getUserId();
        System.out.println("userID: " + userId);
        Optional<Review> review1 = reviewService.ProductId_UserId_Review(productId, userId);
        if (review1.isPresent()) {
            Review review2 = review1.get();
            review2.setPoint(review.getPoint());
            return reviewService.saveReview(review2);
        }
        else {
            Review temp = new Review(review.getUserId(), review.getProductId(), review.getPoint());
            return reviewService.saveReview(temp);
        }
    }
}
