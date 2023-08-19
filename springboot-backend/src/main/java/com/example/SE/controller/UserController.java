package com.example.SE.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import com.example.SE.exception.TokenRefreshException;
import com.example.SE.models.*;
import com.example.SE.payload.request.*;
import com.example.SE.payload.response.JwtResponse;
import com.example.SE.payload.response.TokenRefreshResponse;
import com.example.SE.repository.CustomerInfoRepository;
import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import com.example.SE.payload.response.UserInfoResponse;
import com.example.SE.payload.response.MessageResponse;
import com.example.SE.repository.RoleRepository;
import com.example.SE.repository.UserRepository;
import com.example.SE.security.jwt.JwtUtils;
import com.example.SE.service.UserDetailsImpl;
import com.example.SE.service.RefreshTokenService;
import com.example.SE.service.UserService;
import com.example.SE.controller.AuthController;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    UserRepository userRepository;
    @Autowired
    UserService userService;
    @Autowired
    AuthController authController;
    @PostAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping()
    public ResponseEntity<?> getAllUsers(){
        return ResponseEntity.ok(userService.findAllUser());
    }

    @GetMapping("/{user_id}")
    public ResponseEntity<?> getUserById(@PathVariable("user_id") String user_id){
        return ResponseEntity.ok(userService.findUserById(user_id));
    }
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping("/editRoles")
    public ResponseEntity<?> editRoles(@RequestBody RoleEditRequest roleEditRequest){
        User curUser = userRepository.findById(roleEditRequest.getId()).get();
        userService.updateRole(curUser, roleEditRequest.getRoles());
        return ResponseEntity.ok("User " + roleEditRequest.getId() + " roles updated");
    }
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping("/banUser")
    public ResponseEntity<?> banUser(@RequestBody BanRequest banRequest){
        userService.banUser(banRequest.getId());
        User curUser = userRepository.findById(banRequest.getId()).get();
        return ResponseEntity.ok("User " + (curUser.getDisable() ? " is unbanned" : " is banned"));
    }
}
