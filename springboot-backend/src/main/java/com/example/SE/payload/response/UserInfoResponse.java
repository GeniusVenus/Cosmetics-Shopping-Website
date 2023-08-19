package com.example.SE.payload.response;

import com.example.SE.models.Role;

import java.util.List;
import java.util.Set;

public class UserInfoResponse {
    private String id;
    private String username;
    private String firstname;
    private String lastname;
    private String email;
    private Set<Role> roles;
    private Boolean isEnable;

    public UserInfoResponse(String id, String username, String firstname, String lastname, String email, Set<Role> roles, Boolean isEnable) {
        this.id = id;
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.roles = roles;
        this.isEnable = isEnable;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public Boolean getEnable() {
        return isEnable;
    }

    public void setEnable(Boolean enable) {
        isEnable = enable;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }
}