import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { useNavigate, useParams } from 'react-router-dom';

export const EmployeeForm = () => {
    const { addEmployee, getEmployeeById, updateEmployee } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)
    

    //for edit, hold on to state of employee in this view
    const [employee, setEmployee] = useState({
        name: "",
        rate: "",              
        manager: false,
        fullTime: false,
        locationId: 0
    })
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    const {employeeId} = useParams();
	  const navigate = useNavigate();

    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {
      //When changing a state object or array,
      //always create a copy make changes, and then set state.
      const newEmployee = { ...employee }
      //employee is an object with properties.
      //set the property to the new value
      newEmployee[event.target.name] = event.target.value
      //update state
      setEmployee(newEmployee)
    }

    const handleControlledInputChangeBool = (event) => {
    //When changing a state object or array,
      //always create a copy make changes, and then set state.
      const newEmployee = { ...employee }
      //employee is an object with properties.
      //set the property to the new value
      newEmployee[event.target.name] = event.target.checked
      //update state
      setEmployee(newEmployee)
    }

    const handleSaveEmployee = () => {

        //Boolean turns string into boolean
        const fullTime = Boolean(employee.fullTime)
        employee.fullTime = fullTime

        const manager = Boolean(employee.manager)
        employee.manager = manager


      if (parseInt(employee.locationId) === 0) {
          window.alert("Please select a location")
      } else {
        //disable the button - no extra clicks
        setIsLoading(true);
        if (employeeId){
          //PUT - update
          updateEmployee({
              id: employee.id,
              name: employee.name,
              rate: employee.rate,              
              manager: employee.manager,
              fullTime: employee.fullTime,
              locationId: parseInt(employee.locationId)
              
          })
          .then(() => navigate(`/employees/detail/${employee.id}`))
        }else {
          //POST - add
          addEmployee({
              name: employee.name,
              rate: employee.rate,              
              manager: employee.manager,
              fullTime: employee.fullTime,
              locationId: parseInt(employee.locationId)
              
          })
          .then(() => navigate("/employees"))
        }
      }
    }

    // Get locations. If employeeId is in the URL, getemployeeById
    useEffect(() => {
      getLocations().then(() => {
        if (employeeId){
          getEmployeeById(employeeId)
          .then(employee => {
              setEmployee(employee)
              setIsLoading(false)
          })
        } else {
          setIsLoading(false)
        }
      })
    }, [])

    //since state controlls this component, we no longer need
    //useRef(null) or ref

    return (
      <form className="employeeForm">
        <h2 className="employeeFormTitle">New employee</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="employeeName">Employee name: </label>
            <input type="text" id="employeeName" name="name" required autoFocus className="form-control"
            placeholder="employee name"
            onChange={handleControlledInputChange}
            defaultValue={employee.name}/>
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="location">Assign to location: </label>
            <select value={employee.locationId} name="locationId" id="employeeLocation" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select a location</option>
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
            <label htmlFor="employeeRate">Employee rate: $</label>
            <input type="text" id="employeeRate" name="rate" required className="form-control"
            placeholder="Employee rate"
            onChange={handleControlledInputChange}
            defaultValue={employee.rate}/>
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="employeeManager">Manager</label>
            <input type="checkbox" checked={employee.manager} id="employeeManager" name="manager" required className="form-control"
            placeholder="employee manager"
            onChange={handleControlledInputChangeBool} value={employee.manager}
            />
          </div>
        </fieldset>

        <fieldset>
            <div className="form-group">
            <label htmlFor="fullTime">Full Time</label>
            <input type="checkbox" checked={employee.fullTime} id="employeeFullTime" name="fullTime" onChange={handleControlledInputChangeBool} required  className="form-control" placeholder="Full Time" value={employee.fullTime}/>
            </div>
        </fieldset> 
        
       
        <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveEmployee()
          }}>
        {employeeId ? <>Save Employee</> : <>Add Employee</>}</button>
      </form>
    )
}
