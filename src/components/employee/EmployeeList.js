import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { EmployeeCard } from "./EmployeeCard";
import "./Employee.css"
import { useNavigate } from "react-router";

export const EmployeeList = () => {
    // This state changes when `getEmployee()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext)
  const navigate = useNavigate()
  //useEffect - reach out to the world for something.
  //In this case it is reaching out to the api call for employees
  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees")
    getEmployees()

  }, [])


  return (
    <>
    <h2>Employees</h2>
      <button onClick={() => {navigate("create")}}>
              Add Employee
          </button>
    <div className="employees">
      {console.log("EmployeeList: Render", employees)}
      {
        employees.map(employeeObj => {
          return <EmployeeCard key={employeeObj.id} employee={employeeObj} />
        })
      }
    </div>
    </>
  )
}