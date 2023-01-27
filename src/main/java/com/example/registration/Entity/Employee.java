package com.example.registration.Entity;

import jakarta.persistence.*;

import javax.annotation.processing.Generated;

@Entity
@Table(name ="employee")

public class Employee {
    @Id
    @Column(name = "employee_id",length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int employeeid;

    @Column(name = "employee_Fname",length = 250)
    private String employeeFname;

    @Column(name = "employee_Lname",length = 250)
    private String employeeLname;


    @Column(name = "employee_mobile",length = 30)
    private int mobile;

    @Column(name="employee_Email",length=255)
    private String email;

    @Column(name = "employee_pass",length = 30)
    private int password;

    @Column(name = "employee_Conformpass",length = 30)
    private int Conformpass;



    //Constructor//
    public Employee(int employeeid, String employeeFname, String employeeLname, int mobile,String email,int password,int Conformpass) {
        this.employeeid = employeeid;
        this.employeeFname = employeeFname;
        this.employeeLname = employeeLname;
        this.mobile = mobile;
        this.email=email;
        this.password=password;
        this.Conformpass=Conformpass;
    }


    //Empty construe//
    public Employee() {

    }


    //Getter and Setter//


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

    public int getconformpass() {
        return Conformpass;
    }

    public void setconformpass(int Conformpass) {
        this.Conformpass = Conformpass;
    }



    @Override
    public String toString() {
        return "Employee{" +
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
