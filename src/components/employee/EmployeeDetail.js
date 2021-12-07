import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { useParams, useNavigate } from "react-router-dom"

export const EmployeeDetail = () => {
  const { getEmployeeById } = useContext(EmployeeContext)

	const [employee, setEmployee] = useState({})

	const {employeeId} = useParams();
	const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect", employeeId)
    getEmployeeById(employeeId)
    .then((response) => {
      setEmployee(response)
    })
    }, [])

  return (
    <section className="employee">
      <h3 className="employeeName">{employee.name}</h3>
      {/* What's up with the question mark???? See below.*/}
      <div className="employeeLocation">Location: {employee.location?.name}</div>
      <div className="manager">{employee.manager ? `Manager` : "Professional"}</div>
      <div className="position">{employee.fullTime ? `Full Time` : "Part Time"}</div>
    </section>
  )
}
