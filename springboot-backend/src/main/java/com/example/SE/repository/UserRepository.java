package com.example.SE.repository;

import com.example.SE.models.User;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;


public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByUsername(String username);
    Optional<User> findById(String id);
    List<User> findAll();
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
    @Modifying
    void deleteById(String user_id);
}
