package com.example.registration.EmployeeControl;

import com.example.registration.Dto.EmployeeDTO;
import com.example.registration.services.EmployeeServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/employee")

public class EmployeeController {

    @Autowired
    private EmployeeServices employeeServices;


    @PostMapping(path = "/save")
    public String saveEmployee(@RequestBody EmployeeDTO employeeDTO){

        String id = employeeServices.addEmployee(employeeDTO);

        return id;

    }

}
