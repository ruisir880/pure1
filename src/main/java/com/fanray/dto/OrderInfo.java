package com.fanray.dto;

import java.io.Serializable;

/**
 * Created by Ray Rui on 5/23/2017.
 */
public class OrderInfo implements Serializable{
    private String product;

    private String style;

    private String name;

    private String tel;

    private String address;

    private String delNo;

    public String getProduct() {
        return product;
    }

    public void setProduct(String product) {
        this.product = product;
    }

    public String getStyle() {
        return style;
    }

    public void setStyle(String style) {
        this.style = style;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDelNo() {
        return delNo;
    }

    public void setDelNo(String delNo) {
        this.delNo = delNo;
    }
}
