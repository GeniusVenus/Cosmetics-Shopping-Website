package com.example.SE.controller;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.SE.Collection.ERole;
import com.example.SE.Collection.Role;
import com.example.SE.Collection.User;
import com.example.SE.payload.request.LoginRequest;
import com.example.SE.payload.request.SignupRequest;
import com.example.SE.payload.response.UserInfoResponse;
import com.example.SE.payload.response.MessageResponse;
import com.example.SE.repository.RoleRepository;
import com.example.SE.repository.UserRepository;
import com.example.SE.security.jwt.JwtUtils;
import com.example.SE.security.services.UserDetailsImpl;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserController {

}
