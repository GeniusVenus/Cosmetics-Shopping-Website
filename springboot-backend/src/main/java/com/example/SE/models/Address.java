package com.example.SE.models;

public class Address {
    private String province;
    private String district;
    private String town;
    private String details;

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getTown() {
        return town;
    }

    public void setTown(String town) {
        this.town = town;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public Address(String province, String district, String town, String details) {
        this.province = province;
        this.district = district;
        this.town = town;
        this.details = details;
    }
}
