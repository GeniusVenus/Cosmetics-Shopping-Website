package com.example.SE.controller;

import com.example.SE.models.CustomerInfo;
import com.example.SE.models.User;
import com.example.SE.payload.request.ModifyCustomerInfoRequest;
import com.example.SE.payload.response.CustomerInfoResponse;
import com.example.SE.repository.CustomerInfoRepository;
import com.example.SE.repository.UserRepository;
import com.example.SE.service.CustomerInfoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.beans.Encoder;
import java.util.Map;

@CrossOrigin(value = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/customerinfo")
public class CustomerInfoController {
    @Autowired
    CustomerInfoRepository customerInfoRepository;
    @Autowired
    CustomerInfoService customerInfoService;
    @Autowired
    UserRepository userRepository;
    @Autowired
    PasswordEncoder encoder;
    @GetMapping(path ={"/getInfo", "/getInfo/{data}"})
    public ResponseEntity<?> getCustomerInfo(@PathVariable(required = false, name = "data") String data ,@RequestParam(required = false) String id){
        if(data != null){
            CustomerInfo customerInfo = customerInfoService.findByUser(data);
            if(customerInfo == null){
                return ResponseEntity.badRequest().body("User Not Found");
            }
            return ResponseEntity.ok(new CustomerInfoResponse(customerInfo));
        }
        CustomerInfo customerInfo = customerInfoService.findByUser(id);
        if(customerInfo == null){
            return ResponseEntity.badRequest().body("User Not Found");
        }
        return ResponseEntity.ok(new CustomerInfoResponse(customerInfo));
    }

    @PostMapping("/modifyInfo")
    public ResponseEntity<?> modifyCustomerInfo(@Valid @RequestBody ModifyCustomerInfoRequest modifyCustomerInfoRequest){
        CustomerInfo customerInfo = customerInfoService.findByUser(modifyCustomerInfoRequest.getUser_id());
        customerInfo.setFirstname(modifyCustomerInfoRequest.getFirstname());
        customerInfo.setLastname(modifyCustomerInfoRequest.getLastname());
        customerInfo.setPhoneNumber(modifyCustomerInfoRequest.getPhoneNumber());
        customerInfo.setAddress(modifyCustomerInfoRequest.getAddress());
        if(!modifyCustomerInfoRequest.getNewpassword().isEmpty());
        {
            User user = userRepository.findById(modifyCustomerInfoRequest.getUser_id()).get();
            user.setPassword(encoder.encode(modifyCustomerInfoRequest.getNewpassword()));
            userRepository.save(user);
        }
        customerInfoRepository.save(customerInfo);
        return ResponseEntity.ok("Done");
    }
}
