package com.example.registration.Dto;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

public class EmployeeDTO {

    private int employeeid;
    private String employeeFname;
    private String employeeLname;
    private int mobile;
    private String email;
    private int password;
    private int Conformpass;

    public EmployeeDTO(int employeeid, String employeeFname, String employeeLname, int mobile,String email,int password,int Conformpass) {
        this.employeeid = employeeid;
        this.employeeFname = employeeFname;
        this.employeeLname = employeeLname;
        this.mobile = mobile;
        this.email=email;
        this.password=password;
        this.Conformpass=Conformpass;
    }


    public EmployeeDTO() {

    }

    public int getEmployeeid() {
        return employeeid;
    }

    public void setEmployeeid(int employeeid) {
        this.employeeid = employeeid;
    }

    public String getEmployeeFname() {
        return employeeFname;
    }

    public void setEmployeeFname(String employeeFname) {
        this.employeeFname = employeeFname;
    }

    public String getEmployeeLname() {
        return employeeLname;
    }

    public void setEmployeeLname(String employeeLname) {
        this.employeeLname = employeeLname;
    }

    public int getMobile() {
        return mobile;
    }

    public void setMobile(int mobile) {
        this.mobile = mobile;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getPassword() {
        return password;
    }

    public void setPassword(int password) {
        this.password = password;
    }

    public int getConformpass() {
        return Conformpass;
    }

    public void setconformpass(int Conformpass) {
        this.Conformpass = Conformpass;
    }

    @Override
    public String toString() {
        return "EmployeeDTO{" +
                "employeeid=" + employeeid +
                ", employeeFname='" + employeeFname + '\'' +
                ", employeeLname='" + employeeLname + '\'' +
                ", mobile=" + mobile +
                ", email='" + email + '\'' +
                ", password=" + password +
                ", Conformpass=" + Conformpass +
                '}';
    }
}
