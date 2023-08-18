package com.example.SE.service;

import com.example.SE.models.ERole;
import com.example.SE.models.Role;
import com.example.SE.models.User;
import com.example.SE.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserCache;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import com.example.SE.repository.RoleRepository;
@Service
public class UserService {
    @Autowired
    RoleRepository roleRepository;
    @Autowired
    UserRepository userRepository;
    public List<User> findAllUser(){
        return userRepository.findAll();
    }
   public void updateRole(User user, Set<String> roles){
       Set<Role> actualRoles = new HashSet<>();
       if (roles == null) {
           Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                   .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
           actualRoles.add(userRole);
       } else {
           roles.forEach(role -> {
               switch (role) {
                   case "admin":
                       Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                               .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                       actualRoles.add(adminRole);

                       break;
                   default:
                       Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                               .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                       actualRoles.add(userRole);
               }
           });
       }
       user.setRoles(actualRoles);
       userRepository.save(user);
   }
   public void deleteUser(String user_id){
       userRepository.deleteById(user_id);
   }
   public void banUser(String user_id){
        User user = userRepository.findById(user_id).get();
        user.setDisable(!user.getDisable());
        userRepository.save(user);
   }
}
