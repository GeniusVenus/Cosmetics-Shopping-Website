package com.example.SE.service;

import com.example.SE.models.CustomerInfo;
import com.example.SE.models.ERole;
import com.example.SE.models.Role;
import com.example.SE.models.User;
import com.example.SE.payload.response.UserInfoResponse;
import com.example.SE.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserCache;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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
    @Autowired
    CustomerInfoService customerInfoService;
    public List<UserInfoResponse> findAllUser(){
        List<User> userList = userRepository.findAll();
        List<UserInfoResponse> responseList = new ArrayList<>();
        for(int i = 0 ; i < userList.size(); ++i){
            User tempUser = userList.get(i);
            CustomerInfo tempInfo = customerInfoService.findByUser(tempUser.getId());
            UserInfoResponse tempResponse = new UserInfoResponse(tempUser.getId(), tempUser.getUsername(), tempInfo.getFirstname(), tempInfo.getLastname(), tempUser.getEmail(), tempUser.getRoles(), tempUser.getIsEnable());
            responseList.add(tempResponse);
        }
        return responseList;
    }
    public UserInfoResponse findUserById(String user_id){
        User tempUser = userRepository.findById(user_id).get();
        CustomerInfo tempInfo = customerInfoService.findByUser(user_id);
        System.out.println(tempInfo.getLastname());
        UserInfoResponse tempResponse = new UserInfoResponse(tempUser.getId(), tempUser.getUsername(), tempInfo.getFirstname(), tempInfo.getLastname(), tempUser.getEmail(), tempUser.getRoles(), tempUser.getIsEnable());
        return tempResponse;
    }
   public void updateRole(User user, Set<String> roles){
       Set<Role> actualRoles = new HashSet<>();
       if (roles.isEmpty() || roles == null) {
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
