package com.example.SE.payload.response;

import com.example.SE.models.Review;

import java.util.List;

public class ReviewResponse {
    private double avgpoint;
    private List<Review> reviews;

    public ReviewResponse(double avgpoint, List<Review> reviews) {
        this.avgpoint = avgpoint;
        this.reviews = reviews;
    }

    public double getAvgpoint() {
        return avgpoint;
    }

    public void setAvgpoint(double avgpoint) {
        this.avgpoint = avgpoint;
    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }
}
