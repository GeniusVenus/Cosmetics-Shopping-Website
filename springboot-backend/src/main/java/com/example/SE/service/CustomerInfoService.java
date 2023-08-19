package com.example.SE.service;
import com.example.SE.models.Address;
import com.example.SE.models.User;
import com.example.SE.models.CustomerInfo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CustomerInfoService {
    public CustomerInfo findByUser(String user_id);
    public CustomerInfo createCustomerInfo(String user_id, String firstname, String lastname, String phoneNumber);

    public void deleteById(String id);;
}
