package com.example.registration.services.impl;

import com.example.registration.Dto.EmployeeDTO;
import com.example.registration.Entity.Employee;
import com.example.registration.Repo.EmployeeRepo;
import com.example.registration.services.EmployeeServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeIMPL implements EmployeeServices {

    @Autowired
    private EmployeeRepo employeeRepo;

    @Override
    public String addEmployee(EmployeeDTO employeeDTO) {

        Employee employee=new Employee(
                employeeDTO.getEmployeeid(),
                employeeDTO.getEmployeeFname(),
                employeeDTO.getEmployeeLname(),
                employeeDTO.getMobile(),
                employeeDTO.getEmail(),
                employeeDTO.getPassword(),
                employeeDTO.getConformpass()
        );
            employeeRepo.save(employee);


        return employee.getEmployeeFname();
    }
}
