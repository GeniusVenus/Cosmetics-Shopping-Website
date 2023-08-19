package com.example.SE.payload.request;

import com.example.SE.models.Role;

import java.util.Set;

public class RoleEditRequest {
    private String id;
    private Set<String> roles;

    public Set<String> getRoles() {
        return roles;
    }

    public void setRoles(Set<String> roles) {
        this.roles = roles;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
