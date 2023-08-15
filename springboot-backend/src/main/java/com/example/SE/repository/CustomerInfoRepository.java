package com.example.SE.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.SE.models.CustomerInfo;
import com.example.SE.models.User;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface CustomerInfoRepository extends MongoRepository<CustomerInfo, String> {
    Optional<CustomerInfo> findByUser_id(String user_id);
    Optional<CustomerInfo> findById(String id);
}
