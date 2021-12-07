import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { EmployeeContext } from "./EmployeeProvider";
import { LocationContext } from "../location/LocationProvider";
import Swal from 'sweetalert2';

export const EmployeeForm = () => {
    const {addEmployee} = useContext(EmployeeContext)
    //pull getLocations fetch call and store state in "location"
    const { locations, getLocations} = useContext(LocationContext)

    //employee is the state
    //setEmployee is how we change the value of the object
    //useState sets initial values
    const [employee, setEmployee] = useState({    
        name: "",
        locationId: 0,
        manager: false,
        fullTime: false
      });

      const navigate = useNavigate()

    useEffect(() => {
        getLocations()
    }, [])

    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        
        //...employee makes copy of current state
        const newEmployee = { ...employee }
        /* Employee is an object with properties.
        Set the property to the new value
        using object bracket notation. */

        //Change copy. ID tells which property to change
        newEmployee[event.target.id] = event.target.value
        
        // update copy (change state)
        setEmployee(newEmployee)

    }

    const handleClickSaveEmployee = (event) => {
        event.preventDefault() //Prevents the browser from submitting the form
        
        //Pull foreign keys from form to save in json
        const locationId = parseInt(employee.locationId)
        employee.locationId = locationId

        //Boolean turns string into boolean
        const fullTime = Boolean(employee.fullTime)
        employee.fullTime = fullTime

        const manager = Boolean(employee.manager)
        employee.manager = manager

        if (employee.name === "") {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please add employee name!',
            position: `center`
          })
        } else if (employee.locationId === 0 ) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please add location!',
            position: `center`
          })
        } else {
        //invoke addEmployee passing employee as an argument.
        //once complete, change the url and display the employee list
        const Toast = Swal.mixin({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })         
           
          Toast.fire({
            icon: 'success',
            title: 'You have saved your new employee!'
          })
          addEmployee(employee)
          .then(() => navigate("/employees"))
        // }
      }}

    return (
        <form className="employeeForm">
            <h2 className="employeeFormTitle">New Employee</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Employee name:</label>
                  <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee name" value={employee.name}/>
              </div>
            </fieldset> 

            <fieldset>
              <div className="form-group">
                  <label htmlFor="location">Assign to location: </label>
                  <select onChange={handleControlledInputChange} defaultValue={employee.locationId} name="locationId" id="locationId" className="form-control" >
                      <option type="number" value="0">Select a location</option>
                      {locations.map(l => (
                          <option key={l.id} value={l.id}>
                              {l.name}
                          </option>
                      ))}
                  </select>
              </div>
          </fieldset>

          <fieldset>
              <div className="form-group">
                  <label htmlFor="manager">Manager</label>
                  <input type="checkbox" id="manager" onChange={handleControlledInputChange} required  className="form-control" placeholder="Manager" value={employee.manager}/>
              </div>
            </fieldset> 

          <fieldset>
              <div className="form-group">
                  <label htmlFor="manager">Full Time</label>
                  <input type="checkbox" id="fullTime" onChange={handleControlledInputChange} required  className="form-control" placeholder="Full Time" value={employee.fullTime}/>
              </div>
            </fieldset> 
          

          <button className="btn btn-primary"
            onClick={handleClickSaveEmployee}>
            Save Employee
          </button>
        </form>
    )
}