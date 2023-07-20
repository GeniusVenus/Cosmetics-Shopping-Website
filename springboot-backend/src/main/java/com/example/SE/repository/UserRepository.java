package com.example.SE.repository;

import com.example.SE.Collection.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;


public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByUsername(String username);
    Optional<User> findById(String id);

    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);

}
