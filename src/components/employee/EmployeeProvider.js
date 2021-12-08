import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
//EmployeeContext stores date used in application
export const EmployeeContext = createContext()

// This component allows other components to use the context data
export const EmployeeProvider = (props) => {
    //useState hook defines a variable that holds the state of the compnent and a function to update it
    const [employees, setEmployees] = useState([])

    //?_expand=location adds location so we can pull location for the call
    const getEmployees = () => {
        return fetch("http://localhost:8088/employees?_expand=location")
        .then(res => res.json())
        .then(setEmployees)
    }

    const addEmployee = employeeObj => {
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employeeObj)
        })
        .then(getEmployees)
    }

    const getEmployeeById = (id) => {
        return fetch(`http://localhost:8088/employees/${id}?_expand=location`)
            .then(res => res.json())
    }
    
    const updateEmployee = employee => {
        return fetch(`http://localhost:8088/employees/${employee.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(employee)
        })
          .then(getEmployees)
      }
      
      const fireEmployee = employeeId => {
        return fetch(`http://localhost:8088/employees/${employeeId}`, {
            method: "DELETE"
        })
            .then(getEmployees)
    }

    /*
        You return a context provider which has the
        `employees` state, `getEmployees` function,
        and the `addEmployees` function as keys. This
        allows any child elements to access them.
    */
    return (
        <EmployeeContext.Provider value={{
            employees, getEmployees, addEmployee, getEmployeeById, updateEmployee, fireEmployee
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}