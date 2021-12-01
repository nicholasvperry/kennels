import React from "react";
import "./Employee.css"

export const EmployeeCard = ({employee}) => (
    <section className="employee">
        <h3 className="employeeName">{employee.name}</h3>
        <div className="employeeFacility">{employee.location.name}</div>
    </section>
)
