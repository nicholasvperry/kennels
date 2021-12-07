import React from "react";
import "./Employee.css"
import { Link } from "react-router-dom"

export const EmployeeCard = ({employee}) => (
    <section className="employee">
        <h3 className="employeeName">
          <Link to={`/employees/detail/${employee.id}`}>
            { employee.name }
          </Link>
        </h3>
        <div className="employeeLocation">{ employee.location.name }</div>
    </section>
)
