import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { EmployeeContext } from "./EmployeeProvider";

export const EmployeeForm = () => {
    const {addEmployee} = useContext(EmployeeContext)

    const [employee, setEmployee] = useState({    
        name: "",
        address:""
      });

      const navigate = useNavigate()

    

    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        
        const newEmployee = { ...employee }
        /* Employee is an object with properties.
        Set the property to the new value
        using object bracket notation. */
        newEmployee[event.target.id] = event.target.value
        // update state
        setEmployee(newEmployee)

    }

    const handleClickSaveEmployee = (event) => {
        event.preventDefault() //Prevents the browser from submitting the form
          
        // if (employeeName === "") {
        //   window.alert("Please add your name")
        // } else {
        //   //invoke addEmployee passing employee as an argument.
        //   //once complete, change the url and display the employee list
          addEmployee(employee)
          .then(() => navigate("/employees"))
        // }
      }

    return (
        <form>
            <h2 className="employeeFormTitle">New Employee</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Employee name:</label>
                  <input type="text" id="employeeName" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee name" value={employee.name}/>
              </div>
            </fieldset> 
              <fieldset>
              <div className="form-group">
                  <label htmlFor="breed">Employee address:</label>
                  <input type="text" id="breed" onChange={handleControlledInputChange} required className="form-control" placeholder="Employee address" value={employee.address}/>
              </div>
          </fieldset>
          <button className="btn btn-primary"
            onClick={handleClickSaveEmployee}>
            Save Employee
          </button>
        </form>
    )
}