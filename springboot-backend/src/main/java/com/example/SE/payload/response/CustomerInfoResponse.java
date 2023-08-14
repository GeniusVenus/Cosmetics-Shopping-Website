package com.example.SE.payload.response;
import com.example.SE.models.CustomerInfo;
import com.example.SE.models.User;

import java.util.List;

public class CustomerInfoResponse {
    CustomerInfo customerInfo;

    public CustomerInfoResponse(CustomerInfo customerInfo) {
        this.customerInfo = customerInfo;
    }

    public CustomerInfo getCustomerInfo() {
        return customerInfo;
    }
}
