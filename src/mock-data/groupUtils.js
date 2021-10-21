import {employeesData as employees } from "./employees.js";

export const employeesFromIds = (employeeIds) =>{

    let groupMembers = employees.filter((employee) => {
             
        for (let empId of employeeIds ){
            if (employee.id === empId){
                return true;
            }           
        }        

        return false;
    });
    return groupMembers;
}
