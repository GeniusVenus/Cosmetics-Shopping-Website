package com.example.SE.service;
import com.example.SE.models.Address;
import com.example.SE.models.CustomerInfo;
import com.example.SE.models.User;
import com.example.SE.payload.response.MessageResponse;
import com.example.SE.repository.CustomerInfoRepository;
import com.example.SE.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerInfoServiceImpl implements CustomerInfoService {
    @Autowired
    private CustomerInfoRepository customerInfoRepository;
    @Autowired
    private UserRepository userRepository;
    public CustomerInfo findByUser(String user_id){
        CustomerInfo customer = customerInfoRepository.findByUser_id(user_id)
                .orElseThrow(() -> new RuntimeException("Error: customer not found"));
        return customer;
    }
    public CustomerInfo createCustomerInfo(String user_id, String firstname, String lastname, String phoneNumber){
        CustomerInfo customerInfo = new CustomerInfo();
        customerInfo.setUser(userRepository.findById(user_id).get());
        customerInfo.setFirstname(firstname);
        customerInfo.setLastname(lastname);
        customerInfo.setPhoneNumber(phoneNumber);

        customerInfoRepository.save(customerInfo);
        return customerInfo;
    }

    public void deleteById(String id){
        customerInfoRepository.deleteById(id);
    }
}
